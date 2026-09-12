"""Genera borradores locales a partir del catálogo histórico.

Este script no es un publicador. Los artículos que ya viven en
``src/content/articles`` están curados y no deben ser reemplazados por una
fuente generativa o por datos sin URLs verificables.
"""

# -*- coding: utf-8 -*-
import argparse
import json
import os
import sys
from pathlib import Path

sys.path.append(os.path.dirname(__file__))

from data_fauna import FAUNA_ARTICLES
from data_marinas import MARINAS_ARTICLES
from data_fenomenos import FENOMENOS_ARTICLES
from data_ciencia import CIENCIA_ARTICLES


ROOT_DIR = Path(__file__).resolve().parents[1]
DEFAULT_DRAFT_DIR = ROOT_DIR / 'docs' / 'editorial' / 'drafts'
PUBLISHED_DIR = ROOT_DIR / 'src' / 'content' / 'articles'
ALL_ARTICLES = FAUNA_ARTICLES + MARINAS_ARTICLES + FENOMENOS_ARTICLES + CIENCIA_ARTICLES


def yaml_string(value):
    """Produce una cadena YAML doblemente entrecomillada y escapada."""
    return json.dumps(str(value), ensure_ascii=False)


def generate_markdown(art):
    tags_formatted = "\n".join([f"  - {yaml_string(tag)}" for tag in art['tags']])

    steps_formatted = []
    for num, (title, desc) in enumerate(art['section_2_steps'], 1):
        steps_formatted.append(f"{num}. **{title}** {desc}")
    steps_text = "\n\n".join(steps_formatted)

    headers = " | ".join(art['table_headers'])
    separator = " | ".join([":---" for _ in art['table_headers']])
    rows = ["| " + " | ".join(row) + " |" for row in art['table_rows']]
    table_text = f"| {headers} |\n| {separator} |\n" + "\n".join(rows)

    myths_formatted = []
    for i, (myth, reality) in enumerate(art['myths'], 1):
        myths_formatted.append(
            f"* **Mito {i}:** {myth}\n  * **Realidad científica contrastada:** {reality}"
        )
    myths_text = "\n\n".join(myths_formatted)

    faqs_formatted = [f"### {question}\n\n{answer}" for question, answer in art['faqs']]
    faqs_text = "\n\n".join(faqs_formatted)

    # Los nombres heredados no son citas: el catálogo histórico no contiene
    # URLs, alcance, tipo de evidencia ni fecha de comprobación.
    candidate_sources = "\n".join([f"- {source}" for source in art['sources']])

    return f"""---
status: draft
humanApproval: pending
publish: false
title: {yaml_string(art['title'])}
description: {yaml_string(art['description'])}
category: {yaml_string(art['category'])}
pubDate: {art['pubDate']}
author: \"PENDIENTE DE AUTORÍA REAL\"
image: {yaml_string(art['image'])}
imageAlt: {yaml_string(art['imageAlt'])}
tags:
{tags_formatted}
featured: {str(art.get('featured', False)).lower()}
sourceCandidates: []
---

> **Borrador local:** requiere abrir fuentes, aportar URLs exactas, comprobar cada afirmación, revisar la imagen y recibir aprobación humana antes de publicarse.

> **Respuesta rápida candidata:** {art['quick_answer']}

---

## {art['section_1_title']}

{art['section_1_text'].strip()}

---

## {art['section_2_title']}

{steps_text}

### {art['table_title']}

{table_text}

---

## 3. Desmintiendo mitos comunes

{myths_text}

---

## 4. Preguntas frecuentes

{faqs_text}

---

## Pendientes de verificación editorial

- [ ] Abrir cada fuente primaria o institucional y registrar URL, alcance, tipo y fecha.
- [ ] Separar hechos, inferencias e hipótesis y eliminar cualquier cifra sin respaldo.
- [ ] Aportar una explicación o visualización original y revisar sus derechos.
- [ ] Definir autoría real y registrar `reviewedDate`/`reviewedBy` solo tras la revisión.

### Nombres de fuentes heredados (no citables todavía)

{candidate_sources}
"""


def parse_args():
    parser = argparse.ArgumentParser(
        description='Genera borradores locales sin tocar artículos publicados.'
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=DEFAULT_DRAFT_DIR,
        help='directorio de borradores (por defecto: docs/editorial/drafts)',
    )
    return parser.parse_args()


def main():
    args = parse_args()
    draft_dir = args.output_dir.expanduser().resolve()
    published_dir = PUBLISHED_DIR.resolve()

    if draft_dir == published_dir or published_dir in draft_dir.parents:
        raise SystemExit(
            'Abortado: el directorio de salida no puede ser '
            'src/content/articles ni uno de sus subdirectorios.'
        )

    print(f"Total de borradores a preparar: {len(ALL_ARTICLES)}")
    if len(ALL_ARTICLES) != 32:
        raise SystemExit(f"Se esperaban 32 artículos, se encontraron {len(ALL_ARTICLES)}.")

    paths = []
    slugs = set()
    for art in ALL_ARTICLES:
        slug = art['slug']
        if slug in slugs:
            raise SystemExit(f"Slug duplicado: {slug}")
        slugs.add(slug)
        paths.append(draft_dir / f"{slug}.md")

    collisions = [path for path in paths if path.exists()]
    if collisions:
        names = ', '.join(path.name for path in collisions)
        raise SystemExit(
            f"Abortado: ya existen borradores y no se sobrescriben: {names}. "
            'Elige otro --output-dir o archiva esos archivos manualmente.'
        )

    draft_dir.mkdir(parents=True, exist_ok=True)
    for art, path in zip(ALL_ARTICLES, paths):
        content = generate_markdown(art)
        path.write_text(content, encoding='utf-8')
        print(f"✓ Borrador local: {path} ({len(content.split())} palabras)")

    print(
        '\nBorradores preparados. No se modificaron artículos publicados, '
        'fuentes, revisiones ni datos de AdSense.'
    )


if __name__ == '__main__':
    main()
