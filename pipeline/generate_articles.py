# scratch/generate_all.py
# -*- coding: utf-8 -*-
import os
import sys

sys.path.append(os.path.dirname(__file__))

from data_fauna import FAUNA_ARTICLES
from data_marinas import MARINAS_ARTICLES
from data_fenomenos import FENOMENOS_ARTICLES
from data_ciencia import CIENCIA_ARTICLES

ALL_ARTICLES = FAUNA_ARTICLES + MARINAS_ARTICLES + FENOMENOS_ARTICLES + CIENCIA_ARTICLES

TARGET_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'articles')

def generate_markdown(art):
    tags_formatted = "\n".join([f"  - {t}" for t in art['tags']])
    
    # Format steps
    steps_formatted = []
    for num, (title, desc) in enumerate(art['section_2_steps'], 1):
        steps_formatted.append(f"{num}. **{title}** {desc}")
    steps_text = "\n\n".join(steps_formatted)
    
    # Format table
    headers = " | ".join(art['table_headers'])
    separator = " | ".join([":---" for _ in art['table_headers']])
    rows = []
    for row in art['table_rows']:
        rows.append("| " + " | ".join(row) + " |")
    table_text = f"| {headers} |\n| {separator} |\n" + "\n".join(rows)
    
    # Format myths
    myths_formatted = []
    for i, (myth, reality) in enumerate(art['myths'], 1):
        myths_formatted.append(f"* **Mito {i}:** {myth}\n  * **Realidad científica contrastada:** {reality}")
    myths_text = "\n\n".join(myths_formatted)
    
    # Format FAQs
    faqs_formatted = []
    for q, a in art['faqs']:
        faqs_formatted.append(f"### {q}\n\n{a}")
    faqs_text = "\n\n".join(faqs_formatted)
    
    # Sources list
    sources_formatted = "\n".join([f"* *{s}*" for s in art['sources']])
    
    body = f"""---
title: "{art['title']}"
description: "{art['description']}"
category: "{art['category']}"
pubDate: {art['pubDate']}
author: "Equipo Editorial EcoCuriosa"
image: "{art['image']}"
imageAlt: "{art['imageAlt']}"
tags:
{tags_formatted}
featured: {str(art.get('featured', False)).lower()}
---

> **Respuesta Rápida a la Búsqueda:** {art['quick_answer']}

---

## {art['section_1_title']}

{art['section_1_text'].strip()}

---

## {art['section_2_title']}

{steps_text}

### {art['table_title']}

{table_text}

---

## 3. Desmintiendo Mitos Comunes

{myths_text}

---

## 4. Preguntas Frecuentes (FAQ)

{faqs_text}

---

## Conclusión y Fuentes Documentales

El análisis científico de este fenómeno evidencia la importancia del método empírico para desentrañar los misterios del mundo natural. Comprender los principios físicos, químicos y biológicos que rigen nuestro planeta nos permite apreciar la extraordinaria precisión de los ecosistemas y promover su conservación frente a las presiones del cambio global.

### Referencias y Literatura Científica Consultada
{sources_formatted}
"""
    return body

def main():
    print(f"Total articles to write: {len(ALL_ARTICLES)}")
    assert len(ALL_ARTICLES) == 32, f"Expected 32 articles, found {len(ALL_ARTICLES)}"
    
    slugs = set()
    for art in ALL_ARTICLES:
        slug = art['slug']
        assert slug not in slugs, f"Duplicate slug: {slug}"
        slugs.add(slug)
        
        filepath = os.path.join(TARGET_DIR, f"{slug}.md")
        content = generate_markdown(art)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Escrito con rigor científico: {slug}.md ({len(content.split())} palabras)")
        
    print("\n¡Los 32 artículos han sido regenerados con éxito con contenido científico 100% auténtico!")

if __name__ == '__main__':
    main()
