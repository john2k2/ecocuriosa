"""Comprueba el contrato del pipeline de briefs sin escribir en producción."""

from __future__ import annotations

import copy
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DRAFT_DIR = ROOT / 'docs' / 'editorial' / 'drafts'
CONTROL_BRIEF_PATH = DRAFT_DIR / 'gbif-sequence-search.json'
sys.path.insert(0, str(ROOT))

from pipeline.generate_articles import generate_markdown, load_briefs, load_catalog_entries, validate_brief


def expect_rejected(label: str, brief: dict, catalog_entries: dict[str, str], mutate) -> None:
    candidate = copy.deepcopy(brief)
    mutate(candidate)
    try:
        validate_brief(candidate, catalog_entries)
    except ValueError:
        print(f'{label}: rechazado')
    else:
        raise SystemExit(f'{label}: el brief inválido fue aceptado')


def main() -> None:
    brief_paths = sorted(DRAFT_DIR.glob('*.json'))
    if not brief_paths:
        raise SystemExit(f'No hay briefs JSON en {DRAFT_DIR}')
    if not CONTROL_BRIEF_PATH.is_file():
        raise SystemExit(f'No existe el brief de control: {CONTROL_BRIEF_PATH}')

    catalog_entries = load_catalog_entries()
    loaded = []
    for brief_path in brief_paths:
        briefs = load_briefs(brief_path)
        loaded.extend((brief_path, brief) for brief in briefs)
        for brief in briefs:
            markdown = generate_markdown(brief)
            required_markers = ('humanApproval: pending', 'publish: false', 'PENDIENTE DE AUTORÍA REAL')
            missing = [marker for marker in required_markers if marker not in markdown]
            if missing or 'reviewedDate:' in markdown or 'reviewedBy:' in markdown:
                raise SystemExit(f'{brief_path.name}/{brief["slug"]}: el borrador no conserva las puertas de publicación: {missing}')

    control_briefs = load_briefs(CONTROL_BRIEF_PATH)
    if len(control_briefs) != 1:
        raise SystemExit(f'Se esperaba un brief de control y se encontraron {len(control_briefs)}.')
    brief = control_briefs[0]
    raw = json.loads(CONTROL_BRIEF_PATH.read_text(encoding='utf-8'))['briefs'][0]
    expect_rejected(
        'catalogId inexistente',
        raw,
        catalog_entries,
        lambda candidate: candidate['sourceCandidates'][0].update(catalogId='not-in-catalog'),
    )
    expect_rejected(
        'URL de fuente duplicada',
        raw,
        catalog_entries,
        lambda candidate: candidate['sourceCandidates'][1].update(url=candidate['sourceCandidates'][0]['url']),
    )
    expect_rejected(
        'URL no coincide con catalogId',
        raw,
        catalog_entries,
        lambda candidate: candidate['sourceCandidates'][0].update(url='https://example.com/fuente-no-catalogada'),
    )
    expect_rejected(
        'ilustración sin etiqueta',
        raw,
        catalog_entries,
        lambda candidate: candidate.update(imageAlt='Animal en agua dulce'),
    )
    expect_rejected(
        'enlace externo en internalLinks',
        raw,
        catalog_entries,
        lambda candidate: candidate.update(internalLinks=['https://example.com']),
    )
    print(f'Briefs válidos: {len(loaded)} en {len(brief_paths)} archivos JSON')
    print(f'Brief de control: {brief["slug"]}; fuentes candidatas: {len(brief["sourceCandidates"])}')
    print('Puertas de publicación y rechazos adversariales: correctos')


if __name__ == '__main__':
    main()
