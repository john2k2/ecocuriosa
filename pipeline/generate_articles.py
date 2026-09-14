"""Genera borradores locales a partir de briefs estructurados de Luna Max.

Este script no es un publicador y no usa el catálogo histórico de temas. Solo
acepta un brief que declare fuentes candidatas, límites y revisión pendiente;
los artículos publicados nunca se sobrescriben.
"""

# -*- coding: utf-8 -*-
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DEFAULT_DRAFT_DIR = ROOT_DIR / 'docs' / 'editorial' / 'drafts'
PUBLISHED_DIR = ROOT_DIR / 'src' / 'content' / 'articles'
SOURCE_CATALOG_PATH = ROOT_DIR / 'docs' / 'editorial' / 'SOURCE_CATALOG.yml'
ALLOWED_EVIDENCE_TYPES = {'primary', 'review', 'dataset', 'institutional', 'secondary'}
ALLOWED_CERTAINTY = {'fact', 'inference', 'hypothesis'}
ALLOWED_IMAGE_PLANS = {'original-illustration', 'licensed-photo', 'commissioned-photo'}
SLUG_PATTERN = re.compile(r'^[a-z0-9]+(?:-[a-z0-9]+)+$')


def load_catalog_entries() -> dict[str, str]:
    """Read canonical source IDs and URLs without adding a YAML dependency."""

    if not SOURCE_CATALOG_PATH.is_file():
        raise ValueError(f'No existe el catálogo de fuentes: {SOURCE_CATALOG_PATH}')
    entries: dict[str, str] = {}
    current_id: str | None = None
    for line in SOURCE_CATALOG_PATH.read_text(encoding='utf-8').splitlines():
        if match := re.match(r'^\s*- id:\s*([^\s#]+)\s*(?:#.*)?$', line):
            current_id = match.group(1)
            continue
        if current_id and (match := re.match(r'^\s+url:\s*(https://\S+)\s*(?:#.*)?$', line)):
            entries[current_id] = match.group(1)
            current_id = None
    if not entries:
        raise ValueError('El catálogo de fuentes no contiene IDs reconocibles.')
    return entries


def load_catalog_ids() -> set[str]:
    """Backward-compatible set of canonical source IDs."""

    return set(load_catalog_entries())


def yaml_string(value: object) -> str:
    """Produce una cadena YAML doblemente entrecomillada y escapada."""

    return json.dumps(str(value), ensure_ascii=False)


def _require_text(value: object, field: str) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f'{field} debe ser texto no vacío.')
    return value.strip()


def _require_list(value: object, field: str) -> list:
    if not isinstance(value, list):
        raise ValueError(f'{field} debe ser una lista.')
    return value


def validate_source(source: object, index: int, catalog_ids: set[str] | dict[str, str]) -> dict:
    if not isinstance(source, dict):
        raise ValueError(f'sourceCandidates[{index}] debe ser un objeto.')
    url = _require_text(source.get('url'), f'sourceCandidates[{index}].url')
    if not url.startswith('https://'):
        raise ValueError(f'sourceCandidates[{index}].url debe usar HTTPS.')
    evidence_type = _require_text(source.get('evidenceType'), f'sourceCandidates[{index}].evidenceType')
    if evidence_type not in ALLOWED_EVIDENCE_TYPES:
        raise ValueError(f'Tipo de evidencia no permitido: {evidence_type}.')
    if source.get('checkedBy') is not None or source.get('checkedDate') is not None:
        raise ValueError('Un brief nuevo no puede declarar una fuente como verificada.')
    catalog_id = _require_text(source.get('catalogId'), f'sourceCandidates[{index}].catalogId')
    if catalog_id not in catalog_ids:
        raise ValueError(f'sourceCandidates[{index}].catalogId no existe en SOURCE_CATALOG.yml: {catalog_id}.')
    source_url = catalog_ids.get(catalog_id) if isinstance(catalog_ids, dict) else None
    if source_url and url != source_url:
        raise ValueError(
            f'sourceCandidates[{index}].url no coincide con la URL canónica del catálogo para {catalog_id}.'
        )
    return {
        'catalogId': catalog_id,
        'url': url,
        'evidenceType': evidence_type,
        'supports': _require_text(source.get('supports'), f'sourceCandidates[{index}].supports'),
        'scope': _require_text(source.get('scope'), f'sourceCandidates[{index}].scope'),
        'limitation': _require_text(source.get('limitation'), f'sourceCandidates[{index}].limitation'),
    }


def validate_claim(claim: object, index: int) -> dict:
    if not isinstance(claim, dict):
        raise ValueError(f'claims[{index}] debe ser un objeto.')
    certainty = _require_text(claim.get('certainty'), f'claims[{index}].certainty')
    if certainty not in ALLOWED_CERTAINTY:
        raise ValueError(f'Nivel de certeza no permitido: {certainty}.')
    source_ids = _require_list(claim.get('sourceIds'), f'claims[{index}].sourceIds')
    if not all(isinstance(source_id, str) and source_id.strip() for source_id in source_ids):
        raise ValueError(f'claims[{index}].sourceIds debe contener identificadores de texto.')
    if claim.get('humanCheck', 'pending') != 'pending':
        raise ValueError('Cada afirmación nueva debe permanecer en humanCheck: pending.')
    return {
        'text': _require_text(claim.get('text'), f'claims[{index}].text'),
        'certainty': certainty,
        'sourceIds': source_ids,
    }


def validate_brief(raw: object, catalog_ids: set[str] | dict[str, str]) -> dict:
    if not isinstance(raw, dict):
        raise ValueError('Cada brief debe ser un objeto JSON.')
    slug = _require_text(raw.get('slug'), 'slug')
    if not SLUG_PATTERN.fullmatch(slug):
        raise ValueError(f'Slug no permitido: {slug}.')
    if raw.get('humanApproval', 'pending') != 'pending' or raw.get('publish', False) is not False:
        raise ValueError(f'{slug}: humanApproval debe ser pending y publish debe ser false.')
    for forbidden in ('reviewedDate', 'reviewedBy', 'sources'):
        if raw.get(forbidden) is not None:
            raise ValueError(f'{slug}: {forbidden} solo se añade después de una revisión humana.')

    category = _require_text(raw.get('category'), f'{slug}.category')
    if category not in {'fauna-fascinante', 'especies-marinas', 'fenomenos-naturales', 'ciencia-curiosa'}:
        raise ValueError(f'{slug}: categoría no reconocida.')
    image = _require_text(raw.get('image'), f'{slug}.image')
    if not image.startswith('/images/') or '..' in image:
        raise ValueError(f'{slug}: image debe ser un recurso local bajo /images/.')
    description = _require_text(raw.get('description'), f'{slug}.description')
    if not 80 <= len(description) <= 160:
        raise ValueError(f'{slug}: description debe tener entre 80 y 160 caracteres.')
    image_alt = _require_text(raw.get('imageAlt'), f'{slug}.imageAlt')
    draft_body = _require_text(raw.get('draftBody'), f'{slug}.draftBody')
    if '---' in draft_body:
        raise ValueError(f'{slug}: draftBody no puede introducir otro frontmatter.')
    image_plan = _require_text(raw.get('imagePlan'), f'{slug}.imagePlan')
    if image_plan not in ALLOWED_IMAGE_PLANS:
        raise ValueError(f'{slug}: imagePlan no reconocido.')
    if raw.get('imageRights', 'pending') != 'pending':
        raise ValueError(f'{slug}: imageRights debe permanecer pending.')
    if image_plan == 'original-illustration' and not re.search(r'\b(?:ilustraci[oó]n|diagrama|esquema)\b', image_alt, re.IGNORECASE):
        raise ValueError(f'{slug}: imageAlt debe identificar la imagen como ilustración, diagrama o esquema.')

    source_candidates = [validate_source(source, index, catalog_ids) for index, source in enumerate(_require_list(raw.get('sourceCandidates'), f'{slug}.sourceCandidates'))]
    if len(source_candidates) < 2:
        raise ValueError(f'{slug}: se requieren al menos dos fuentes candidatas.')
    source_ids = [source['catalogId'] for source in source_candidates]
    source_urls = [source['url'] for source in source_candidates]
    if len(source_ids) != len(set(source_ids)):
        raise ValueError(f'{slug}: sourceCandidates no puede repetir catalogId.')
    if len(source_urls) != len(set(source_urls)):
        raise ValueError(f'{slug}: sourceCandidates no puede repetir URL.')
    candidate_ids = {source['catalogId'] for source in source_candidates}
    claims = [validate_claim(claim, index) for index, claim in enumerate(_require_list(raw.get('claims'), f'{slug}.claims'))]
    for claim in claims:
        unknown = set(claim['sourceIds']) - candidate_ids
        if unknown:
            raise ValueError(f'{slug}: claim referencia fuentes inexistentes: {sorted(unknown)}.')

    author = raw.get('author', 'PENDIENTE DE AUTORÍA REAL')
    if author != 'PENDIENTE DE AUTORÍA REAL':
        raise ValueError(f'{slug}: el brief no puede inventar ni fijar autoría.')
    tags = raw.get('tags', [])
    if not isinstance(tags, list) or not all(isinstance(tag, str) and tag.strip() for tag in tags):
        raise ValueError(f'{slug}: tags debe ser una lista de texto.')
    internal_links = raw.get('internalLinks', [])
    if not isinstance(internal_links, list) or not all(isinstance(link, str) and link.startswith('/') and not link.startswith('//') for link in internal_links):
        raise ValueError(f'{slug}: internalLinks debe contener solo rutas internas que comiencen por /.')
    return {
        'slug': slug,
        'workingTitle': _require_text(raw.get('workingTitle'), f'{slug}.workingTitle'),
        'description': description,
        'category': category,
        'pubDate': _require_text(raw.get('pubDate'), f'{slug}.pubDate'),
        'image': image,
        'imageAlt': image_alt,
        'tags': tags,
        'readerQuestion': _require_text(raw.get('readerQuestion'), f'{slug}.readerQuestion'),
        'draftBody': draft_body,
        'sourceCandidates': source_candidates,
        'claims': claims,
        'originalContribution': _require_text(raw.get('originalContribution'), f'{slug}.originalContribution'),
        'imagePlan': image_plan,
        'internalLinks': internal_links,
    }


def load_briefs(input_path: Path) -> list[dict]:
    try:
        payload = json.loads(input_path.read_text(encoding='utf-8'))
    except json.JSONDecodeError as exc:
        raise ValueError(f'JSON inválido en {input_path}: {exc.msg}.') from exc
    raw_briefs = payload.get('briefs') if isinstance(payload, dict) else payload
    if not isinstance(raw_briefs, list) or not raw_briefs:
        raise ValueError('El archivo de entrada debe contener una lista no vacía de briefs o {"briefs": [...]}.')
    catalog_entries = load_catalog_entries()
    briefs = [validate_brief(raw, catalog_entries) for raw in raw_briefs]
    slugs = [brief['slug'] for brief in briefs]
    if len(slugs) != len(set(slugs)):
        raise ValueError('Hay slugs duplicados en el archivo de entrada.')
    return briefs


def generate_markdown(brief: dict) -> str:
    tags_formatted = '\n'.join(f'  - {yaml_string(tag)}' for tag in brief['tags']) or '  - "pendiente"'
    source_lines = []
    for source in brief['sourceCandidates']:
        source_lines.append(
            f"- **{source['catalogId']}** — {source['url']} ({source['evidenceType']})\n"
            f"  - Respaldaría: {source['supports']}\n"
            f"  - Alcance: {source['scope']}\n"
            f"  - Límite: {source['limitation']}"
        )
    claim_lines = []
    for index, claim in enumerate(brief['claims'], 1):
        claim_lines.append(
            f"{index}. **{claim['certainty']}** {claim['text']}\n"
            f"   - Fuentes candidatas: {', '.join(claim['sourceIds'])}\n"
            "- Comprobación humana: pendiente"
        )
    links = '\n'.join(f'- {link}' for link in brief['internalLinks']) or '- Pendiente de seleccionar durante la revisión.'
    return f"""---
status: draft
humanApproval: pending
publish: false
title: {yaml_string(brief['workingTitle'])}
description: {yaml_string(brief['description'])}
category: {yaml_string(brief['category'])}
pubDate: {brief['pubDate']}
author: "PENDIENTE DE AUTORÍA REAL"
image: {yaml_string(brief['image'])}
imageAlt: {yaml_string(brief['imageAlt'])}
tags:
{tags_formatted}
featured: false
sourceCandidates: []
---

> Borrador local: requiere abrir las fuentes, comprobar cada afirmación, revisar derechos de imagen y recibir aprobación humana antes de publicarse.

> Pregunta del lector: {brief['readerQuestion']}

{brief['draftBody']}

---

## Matriz de afirmaciones pendiente

{chr(10).join(claim_lines)}

## Fuentes candidatas (no verificadas)

{chr(10).join(source_lines)}

## Aportación propia propuesta

{brief['originalContribution']}

## Plan de imagen

- Opción: {brief['imagePlan']}
- Derechos: pendientes de comprobación humana.

## Enlaces internos propuestos

{links}

## Puerta de publicación

- [ ] Abrir y comprobar cada fuente; registrar alcance y limitación.
- [ ] Revisar cifras, fechas, salud, conservación y causalidad.
- [ ] Comprobar imagen, alt, crédito y licencia.
- [ ] Definir autoría real y añadir reviewedDate/reviewedBy solo tras la revisión.
- [ ] Ejecutar las auditorías del proyecto y solicitar aprobación del titular.
"""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='Genera borradores de Luna Max sin tocar artículos publicados.')
    parser.add_argument('--input', type=Path, required=True, help='JSON con uno o más briefs estructurados.')
    parser.add_argument('--output-dir', type=Path, default=DEFAULT_DRAFT_DIR, help='directorio de borradores.')
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    draft_dir = args.output_dir.expanduser().resolve()
    published_dir = PUBLISHED_DIR.resolve()
    if draft_dir == published_dir or published_dir in draft_dir.parents:
        raise SystemExit('Abortado: el directorio de salida no puede ser src/content/articles ni uno de sus subdirectorios.')

    input_path = args.input.expanduser().resolve()
    if not input_path.is_file():
        raise SystemExit(f'No existe el archivo de briefs: {input_path}')
    try:
        briefs = load_briefs(input_path)
    except ValueError as exc:
        raise SystemExit(f'Abortado: {exc}') from exc

    paths = [draft_dir / f"{brief['slug']}.md" for brief in briefs]
    collisions = [path for path in paths if path.exists()]
    published_collisions = [PUBLISHED_DIR / path.name for path in paths if (PUBLISHED_DIR / path.name).exists()]
    if collisions or published_collisions:
        names = ', '.join(path.name for path in collisions + published_collisions)
        raise SystemExit(f'Abortado: ya existen destinos y no se sobrescriben: {names}.')

    draft_dir.mkdir(parents=True, exist_ok=True)
    for brief, path in zip(briefs, paths):
        path.write_text(generate_markdown(brief), encoding='utf-8')
        print(f"✓ Borrador local: {path}")
    print(f'\nSe prepararon {len(briefs)} borradores. No se modificaron artículos publicados ni datos de AdSense.')


if __name__ == '__main__':
    main()
