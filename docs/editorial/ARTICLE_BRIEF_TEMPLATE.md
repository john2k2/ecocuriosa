# Brief editorial — [tema]

> Estado: `research` → `draft` → `fact-check` → `approved` → `published`  
> Propietario editorial: [persona/equipo real]  
> Fecha de creación: [AAAA-MM-DD]

## Decisión de publicación

- **Consulta o necesidad del lector:**
- **Consulta validada en Search Console (si existe):**
- **Impresiones/clics/CTR/posición y país/dispositivo:**
- **Intención:** informativa / comparativa / actualización / explicación práctica.
- **Por qué EcoCuriosa puede aportar algo propio:** explicación, comparación, diagrama, ejemplo, datos o experiencia concreta que no sea una reescritura.
- **Artículo pilar y enlaces internos previstos:**
- **Riesgo de salud, seguridad, conservación o actualidad:** bajo / medio / alto.
- **Fuente de inspiración del catálogo:** `SOURCE_CATALOG.yml` → [id]

## Evidencia antes de redactar

| Afirmación que se quiere hacer | Tipo (primaria/revisión/datos/institucional) | Fuente primaria o institucional | URL/DOI | Alcance y límite | Fecha comprobada | Editor que la comprobó |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

No se redacta una cifra, causalidad, límite fisiológico, recomendación médica ni estado de conservación sin una fila verificable.

## Ángulo y estructura únicos

1. Respuesta breve y prudente a la pregunta del lector.
2. Explicación central con evidencia enlazada y relación afirmación → fuente.
3. Ejemplo, diagrama original o comparación que añada valor propio.
4. Límites, incertidumbres y qué puede cambiar.
5. Preguntas frecuentes solo si responden dudas reales y distintas.
6. Fuentes, revisión y enlaces relacionados.

## Activos visuales

| Activo | Procedencia | Licencia/crédito | Alt text | Aprobado por |
| --- | --- | --- | --- | --- |
| | | | | |

Cuando exista una licencia reutilizable, conservarla en frontmatter con `imageCredit`, `imageCreator`, `imageLicense` y `imageLicensePage`; no rellenar ningún campo sin comprobar el activo concreto.

## Control de salida

- [ ] Tres o más fuentes directas y pertinentes, con URL estable.
- [ ] Las fuentes respaldan las afirmaciones concretas, no solo el tema general.
- [ ] La fuente de inspiración se convirtió en una pregunta propia; no se reescribió su artículo.
- [ ] Se eliminaron frases absolutas no demostrables y conclusiones reutilizadas.
- [ ] Existe una contribución editorial diferenciada.
- [ ] Hechos, inferencias, hipótesis y límites están separados.
- [ ] El autor/revisor mostrado es real y su fecha de revisión es real.
- [ ] Se verificaron licencia, crédito y procedencia de cada imagen; las imágenes sintéticas están identificadas.
- [ ] Se ejecutaron `pnpm content:audit -- --strict`, `pnpm build` y `pnpm astro check`.
