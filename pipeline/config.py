"""Configuración segura para la automatización visual de EcoCuriosa.

El frontmatter curado de ``src/content/articles`` es la única fuente de
verdad para títulos, categorías e imágenes. El catálogo histórico que antes
vivía aquí contenía autores y afirmaciones no verificadas y no debe alimentar
ningún borrador nuevo.
"""

from __future__ import annotations

import re
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
ARTICLES_DIR = ROOT_DIR / 'src' / 'content' / 'articles'

CATEGORIES = {
    'fauna-fascinante': {
        'name': 'Fauna Fascinante',
        'description': 'Adaptaciones evolutivas, etología y supervivencia animal.',
        'color': '#d97706',
    },
    'especies-marinas': {
        'name': 'Especies Marinas',
        'description': 'Secretos de los océanos, criaturas abisales y arrecifes.',
        'color': '#0284c7',
    },
    'fenomenos-naturales': {
        'name': 'Fenómenos Naturales',
        'description': 'Fuerzas geológicas, eventos atmosféricos y rarezas planetarias.',
        'color': '#059669',
    },
    'ciencia-curiosa': {
        'name': 'Ciencia Curiosa',
        'description': 'Respuestas científicas rigurosas a misterios cotidianos de la naturaleza.',
        'color': '#7c3aed',
    },
}


def _frontmatter_value(frontmatter: str, field: str) -> str:
    """Lee un escalar YAML sencillo sin interpretar contenido editorial."""

    match = re.search(
        rf"^{re.escape(field)}:\s*(?:\"([^\"]*)\"|'([^']*)'|([^\n]+))\s*$",
        frontmatter,
        flags=re.MULTILINE,
    )
    if not match:
        raise ValueError(f'Falta {field} en un artículo curado.')
    value = next((part for part in match.groups() if part is not None), '').strip()
    if not value:
        raise ValueError(f'{field} no puede estar vacío en un artículo curado.')
    return value


def load_articles_manifest() -> list[dict[str, str]]:
    """Devuelve solo los campos necesarios para crear una ilustración de borrador."""

    manifest = []
    for path in sorted(ARTICLES_DIR.glob('*.md')):
        article = path.read_text(encoding='utf-8')
        frontmatter_match = re.match(r'^---\n([\s\S]*?)\n---', article)
        if not frontmatter_match:
            raise ValueError(f'Frontmatter inválido: {path.name}')
        frontmatter = frontmatter_match.group(1)
        category = _frontmatter_value(frontmatter, 'category')
        if category not in CATEGORIES:
            raise ValueError(f'Categoría no reconocida en {path.name}: {category}')
        manifest.append(
            {
                'slug': path.stem,
                'category': category,
                'title': _frontmatter_value(frontmatter, 'title'),
                'image': _frontmatter_value(frontmatter, 'image'),
                'imageAlt': _frontmatter_value(frontmatter, 'imageAlt'),
            }
        )
    if not manifest:
        raise ValueError('No se encontraron artículos curados.')
    return manifest


# Compatibilidad con el generador existente, ahora derivada del contenido real.
ARTICLES_DATA = load_articles_manifest()
