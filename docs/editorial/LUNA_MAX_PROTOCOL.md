# Protocolo de Luna Max: investigación editorial sin publicación automática

Luna consulta [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml) y la [biblioteca de inspiración](./EDITORIAL_INSPIRATION_LIBRARY.md) únicamente para descubrir oportunidades. El catálogo no es una lista de citas aprobadas: la persona responsable abre la fuente concreta antes de aceptar cualquier afirmación.

## Roles separados

| Paso | Puede hacerlo Luna Max | Requiere una persona responsable |
| --- | --- | --- |
| Detectar oportunidades desde métricas de solo lectura | Sí | Validar prioridad y propósito |
| Encontrar fuentes candidatas | Sí | Abrirlas y confirmar pertinencia, licencia y actualidad |
| Proponer brief, esquema, enlaces y borrador | Sí | Aprobar ángulo y aportación original |
| Extraer afirmaciones comprobables | Sí | Corregir, citar y decidir qué se publica |
| Generar un diagrama original y alt text | Sí | Revisar precisión, accesibilidad y derechos |
| Añadir `sources`, `reviewedBy` y publicar | No | Sí, después de verificar |

## Prompt operativo por brief

```text
Actúa como investigador editorial, no como autor que publica.
Tema: [tema]. Audiencia: [lector]. Consulta objetivo: [consulta].
Artículos internos que no debes canibalizar: [URLs].
Fuente de inspiración candidata: [id del catálogo].

1. Propón un ángulo que añada análisis, ejemplo o visual original.
2. Devuelve 3–6 fuentes candidatas de nivel 1–3. Para cada una: título,
   entidad/autores, URL o DOI, tipo de evidencia, fecha si aparece, alcance,
   límite y la afirmación exacta que podría respaldar. Si no puedes comprobarlo,
   márcalo "pendiente"; nunca lo copies al frontmatter.
3. Separa hechos, inferencias e hipótesis. No inventes datos ni referencias.
4. Propón un esquema, límites de la evidencia, enlaces internos y un activo
   visual original. Identifica cualquier imagen sintética y no la presentes como
   fotografía documental.
5. No marques autor, revisión, licencia, cita o aprobación. No redactes el
   artículo final ni modifiques archivos.
```

## Puertas de automatización

1. **Research:** Luna entrega un brief basado en métricas de Search Console/Cloudflare de solo lectura.
2. **Fact-check:** una persona abre y aprueba cada fuente de la tabla del brief.
3. **Draft:** Luna prepara un cambio local con estado `draft`; cada afirmación de riesgo mantiene su cita.
4. **Quality gate:** `pnpm content:audit -- --strict`, compilación, chequeo de enlaces y revisión visual. Los avisos de promesas de salud, absolutos o récords se revisan uno por uno; no se silencian añadiendo una cita genérica. Las páginas con contenido replicado, de bajo valor o sin curación humana no pasan a anuncios.
5. **Approval:** una persona asigna revisor, fecha real y decide publicar.
6. **Monitor:** Luna compara impresiones, CTR, scroll, retorno y RPM solo después de acumular datos; recomienda actualizaciones, no publica en lote.

## Límites de volumen

- Máximo dos briefs aprobados y un artículo publicado por semana hasta que el archivo existente esté completamente documentado.
- No crear variantes mínimas de una misma consulta, páginas de tendencias sin especialidad ni páginas destinadas solo a anuncios.
- Si una fuente no se puede comprobar, la afirmación se elimina o se expresa como una incertidumbre claramente atribuida.
