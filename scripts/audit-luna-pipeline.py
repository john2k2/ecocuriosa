"""Comprueba el contrato del pipeline de briefs sin escribir en producción."""

from __future__ import annotations

import copy
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BRIEF_PATH = ROOT / 'docs' / 'editorial' / 'drafts' / 'gbif-sequence-search.json'
sys.path.insert(0, str(ROOT))

from pipeline.generate_articles import generate_markdown, load_briefs, load_catalog_ids, validate_brief


def expect_rejected(label: str, brief: dict, catalog_ids: set[str], mutate) -> None:
    candidate = copy.deepcopy(brief)
    mutate(candidate)
    try:
        validate_brief(candidate, catalog_ids)
    except ValueError:
        print(f'{label}: rechazado')
    else:
        raise SystemExit(f'{label}: el brief inválido fue aceptado')


def main() -> None:
    if not BRIEF_PATH.is_file():
        raise SystemExit(f'No existe el brief de control: {BRIEF_PATH}')

    catalog_ids = load_catalog_ids()
    briefs = load_briefs(BRIEF_PATH)
    if len(briefs) != 1:
        raise SystemExit(f'Se esperaba un brief de control y se encontraron {len(briefs)}.')

    brief = briefs[0]
    markdown = generate_markdown(brief)
    required_markers = ('humanApproval: pending', 'publish: false', 'PENDIENTE DE AUTORÍA REAL')
    missing = [marker for marker in required_markers if marker not in markdown]
    if missing or 'reviewedDate:' in markdown or 'reviewedBy:' in markdown:
        raise SystemExit(f'El borrador no conserva las puertas de publicación: {missing}')

    raw = json.loads(BRIEF_PATH.read_text(encoding='utf-8'))['briefs'][0]
    expect_rejected(
        'catalogId inexistente',
        raw,
        catalog_ids,
        lambda candidate: candidate['sourceCandidates'][0].update(catalogId='not-in-catalog'),
    )
    expect_rejected(
        'URL de fuente duplicada',
        raw,
        catalog_ids,
        lambda candidate: candidate['sourceCandidates'][1].update(url=candidate['sourceCandidates'][0]['url']),
    )
    expect_rejected(
        'ilustración sin etiqueta',
        raw,
        catalog_ids,
        lambda candidate: candidate.update(imageAlt='Animal en agua dulce'),
    )
    expect_rejected(
        'enlace externo en internalLinks',
        raw,
        catalog_ids,
        lambda candidate: candidate.update(internalLinks=['https://example.com']),
    )
    print(f'Brief válido: {brief["slug"]}; fuentes candidatas: {len(brief["sourceCandidates"])}')
    print('Puertas de publicación y rechazos adversariales: correctos')


if __name__ == '__main__':
    main()
