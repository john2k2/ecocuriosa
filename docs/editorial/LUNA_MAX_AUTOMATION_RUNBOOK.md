# Runbook de automatización editorial con Luna Max

**Versión:** 20 de septiembre de 2026
**Estado:** diseño listo para revisión; no crea publicaciones ni modifica la cuenta de AdSense.

Este runbook complementa [`LUNA_MAX_PROTOCOL.md`](./LUNA_MAX_PROTOCOL.md), el [scorecard de crecimiento](../EDITORIAL_GROWTH_SCORECARD.md) y la [biblioteca de inspiración](./EDITORIAL_INSPIRATION_LIBRARY.md). Su objetivo es convertir señales reales de búsqueda en investigación y borradores revisables, manteniendo la decisión editorial y la publicación en manos de una persona. Los estados `203` y `403` de una comprobación automática se interpretan según el [snapshot de acceso a fuentes](./SOURCE_ACCESS_SNAPSHOT_2026-09-12.md) y requieren apertura manual, no descarte automático.

## Resultado que debe producir cada ciclo

Luna Max recibe métricas agregadas y devuelve como máximo cinco oportunidades priorizadas. Para cada oportunidad crea un brief local con:

- consulta observada, intención y página interna que ya responde al tema;
- dos a seis fuentes candidatas del catálogo, con URL exacta, tipo de evidencia, alcance, fecha y limitación;
- tabla de afirmaciones separando hecho, inferencia e hipótesis;
- propuesta de aportación propia y enlaces internos, sin canibalizar artículos existentes;
- `uniqueContribution`, `firstHandEvidence` y `notCommodity`, con una explicación de por qué la pieza no es una reescritura ni una variante de palabras clave;
- `authorRoles`, `reportingGuideline` y `referenceIntegrityLog` solo cuando haya identidad, guía y estado bibliográfico comprobables; en caso contrario, `not-applicable` o `pending`;
- plan de imagen (`original-illustration`, `licensed-photo` o `commissioned-photo`), procedencia pendiente y texto alternativo;
- `humanApproval: pending` y `publish: false`.

El resultado no se copia automáticamente a un artículo, no marca `reviewedDate`/`reviewedBy` y no carga datos de pagos, impuestos, identidad o AdSense.

## Gobernanza de autoría y correcciones

La página pública de [correcciones editoriales](https://ecocuriosa.com/correcciones/)
define cómo informar una afirmación, qué comprobar y cuándo distinguir
corrección, actualización o retirada. Luna puede ordenar un aviso y proponer un
registro local, pero no puede decidir su validez ni publicar un historial.

El contrato de cada borrador debe conservar una responsabilidad humana explícita:
la herramienta utilizada, el propósito de la asistencia, la persona que verifica
las fuentes y la aprobación final. Las referencias candidatas `icmje-ai-publishing`,
`cope-retraction-guidelines` y `unesco-open-science-recommendation` sirven para
revisar esa política; una guía externa no sustituye la comprobación del texto ni
crea credenciales para el equipo.

## Flujo por etapas

| Etapa | Entrada | Acción de Luna Max | Salida verificable | Responsable |
| --- | --- | --- | --- | --- |
| 1. Señal | Exportación agregada de Search Console y Cloudflare | Detectar consultas, páginas con impresiones y problemas de recorrido | Tabla fechada, sin datos personales | Automatización |
| 2. Investigación | Consulta + IDs del catálogo | Comparar fuentes primarias/institucionales y declarar límites | Brief local, sin publicación | Luna Max |
| 3. Verificación | Brief y URLs candidatas | — | Cada fuente abierta y cada afirmación comprobada | Editor humano |
| 4. Borrador | Brief aprobado | Redactar una versión local y crear ilustración original si corresponde | Cambio marcado `draft` | Luna Max + editor |
| 5. Control | Borrador y activos | Ejecutar auditorías, revisar enlaces, alt, derechos y móvil | Evidencia de checks y revisión | Editor humano |
| 6. Publicación | Cambio aprobado | — | Merge/despliegue autorizado y fecha real | Titular del sitio |
| 7. Medición | Datos posteriores | Comparar clics, impresiones, CTR, posición, visitas RUM y RPM | Decisión de mantener, corregir o retirar | Editor humano |

## Configuración recomendada para una futura automatización

- **Frecuencia:** una ejecución semanal de investigación y una revisión mensual de resultados. El horario y la zona horaria deben seleccionarse en el editor de automatizaciones; no se debe asumir que un cron genérico representa la hora local de Chile.
- **Modelo:** Luna Max para descubrimiento, comparación de fuentes, briefs y borradores locales. No se usa un modelo rápido para decidir riesgos de salud, conservación, récords, derechos o cumplimiento.
- **Herramientas:** solo lectura para métricas; acceso al repositorio para crear artefactos locales; ningún envío público, publicación, modificación de AdSense ni cambio de datos personales.
- **Límite:** cinco oportunidades por ciclo, dos briefs aprobados por semana y un artículo como máximo después de revisar todo el archivo existente.
- **Persistencia:** guardar únicamente agregados y decisiones editoriales. Las exportaciones de Search Console, Cloudflare, AdSense y cualquier dato identificable quedan fuera del repositorio.

## Priorización con la señal actualizada

La lectura autenticada del 14/09/2026 tiene 340 impresiones, 2 clics, CTR 0,6 % y posición media 12 (selector de 3 meses; datos visibles del 5–12/09). Las primeras oportunidades son `architeuthis dux` (26), `pulpo mimo` (15) y `geodinamo` (14), seguidas por `neuronas espejo bostezo` (3), `que es el geodinamo` (2), `geodinamo terrestre` (2), `leopardo de nieve` (2), `león de las nieves` (2) y `diente de narval` (2). La automatización debe tratar esas cifras como una muestra pequeña: prioriza mejorar título, respuesta inicial y recorrido interno antes de crear variantes. El detalle reproducible está en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-14.md`](SEARCH_CONSOLE_SNAPSHOT_2026-09-14.md).

Regla de decisión:

1. Si una consulta tiene impresiones y CTR bajo, mejorar la página existente y medir de nuevo.
2. Si la consulta no tiene una respuesta interna, crear un brief candidato, no un artículo en serie.
3. Si la consulta es una variante ortográfica (por ejemplo, “león de las nieves”), responderla dentro del artículo correcto antes de crear una URL nueva.
4. Si el tema es actual, médico, de conservación, climático o de seguridad, exigir una fuente primaria/institucional y revisión humana reciente.
5. No crear una serie de páginas para variantes de una misma consulta: comprobar que cada brief resuelva una necesidad distinta y no incurra en abuso de contenido escalado según las [políticas de spam de Google](https://developers.google.com/search/docs/essentials/spam-policies).

### Prioridad de investigación actualizada por Luna Max

Con la misma muestra pequeña de Search Console, la siguiente tanda queda ordenada por utilidad probable para responder la consulta existente y por capacidad de aportar una visualización propia. Es un orden de investigación, no una promesa de tráfico:

| Orden | Consulta | Acción antes de crear una URL | Fuentes candidatas principales |
| ---: | --- | --- | --- |
| 1 | `geosmina`, `petricor` | Mejorar primero la respuesta del artículo actual con la ruta suelo → aerosol → receptor | `geosmin-or11a1-acs-2024`, `geosmin-or11a1-pmc11261619`, `leibniz-geosmin-receptor-2024` |
| 2 | `tiburón de Groenlandia` | Actualizar el artículo existente con el genoma 2026, sin convertir genes candidatos en causalidad | `greenland-shark-genome-pnas-2026`, `greenland-shark-genome-pubmed-42154556`, `noaa-greenland-shark-longevity` |
| 3 | `geodinamo`, `geodinamo terrestre` | Añadir una explicación directa de ondas y flujos antes de abrir una URL nueva | `pnas-core-magnetocoriolis-waves-pmc9060525`, `esa-swarm-magnetic-waves` |
| 4 | `pulpo mimo` | Sustituir la lista viral por una comparación de color, postura y control neural | `cephalopod-neural-camouflage-cub-2023`, `cephalopod-dynamic-skin-behaviors-2024`, `cephalopod-chromatophore-color-pmc6397165` |
| 5 | `león de las nieves` | Resolver la entidad como leopardo de las nieves dentro de la URL actual | `snow-leopard-high-altitude-evolution-2025`, `snow-leopard-territorial-marking-baltistan`, `snow-leopard-ladakh-population-plos-2025` |
| 6 | `pangolín gigante` | Explicar detectabilidad y límites de cámaras antes de ampliar el rango | `giant-pangolin-kenya-range-extension`, `giant-pangolin-senegal-rediscovery-kent`, `giant-pangolin-congo-population-structure-2024` |
| 7 | `relámpago de Catatumbo` | Separar densidad, frecuencia, sensor y periodo en la pieza existente | `nasa-bams-lightning-hotspots`, `nasa-earthdata-maracaibo-beacon`, `luz-catatumbo-electroatmospheric-model` |

Para cada orden, Luna produce primero un brief de actualización local. Solo si la página existente no resuelve la pregunta después de la revisión y la medición siguiente se considera una URL nueva; el límite sigue siendo un artículo aprobado por semana.

La tanda de clústeres del 12/09/2026 usa doce nuevos IDs del catálogo como
insumos de actualización para las siete URLs que ya reciben impresiones
(`geosmina`, tiburón de Groenlandia, geodinamo, pulpo mimo, leopardo de las
nieves, pangolín gigante y Catatumbo). El flujo debe conservar el orden
actualizar → medir → decidir: una variante de consulta no abre una URL nueva,
una fuente candidata no se copia automáticamente al frontmatter y ningún
brief generado por Luna se publica sin revisión humana.

## Decisión de imagen

| Necesidad | Acción | Evidencia antes de publicar |
| --- | --- | --- |
| Proceso, anatomía o mecanismo | Generar ilustración original SVG/WebP | Leyenda, `alt` y revisión de exactitud |
| Animal, lugar o evento real | Usar fotografía propia, encargada o licencia explícita | Autor, URL, licencia, fecha, cambios y crédito |
| Imagen encontrada en una web | No reutilizar por defecto | Permiso verificable del activo concreto |
| Imagen sintética de un animal | Apoyo didáctico, etiquetado como ilustración | Nunca presentarla como observación documental |

La automatización debe comprobar que cada SVG tenga una variante WebP, `imageAlt` y `imageCredit`; si falta cualquiera, se detiene.

### Salvaguarda del pipeline histórico

El catálogo histórico de temas y autores fue retirado del flujo para que no
pueda reintroducir afirmaciones no verificadas. `generate_articles.py` exige
un JSON de briefs de Luna Max mediante `--input`, valida que cada `catalogId`
exista en `SOURCE_CATALOG.yml` y que su URL coincida exactamente con la URL
canónica del catálogo, evita IDs y URLs de fuente duplicados,
comprueba HTTPS, tipo de evidencia, alcance, límites, niveles de certeza y
`humanCheck: pending`, y exige que una ilustración propuesta esté identificada
en su `imageAlt`. También limita `internalLinks` a rutas del sitio y escribe
únicamente en `docs/editorial/drafts/`. Se detiene ante colisiones y nunca
acepta `src/content/articles` como destino ni permite `sources`,
`reviewedDate`, `reviewedBy` o `publish: true` en un brief nuevo.

Ejemplo de ejecución después de que Luna entregue un archivo revisable:

```text
python3 pipeline/generate_articles.py --input /ruta/briefs.json --output-dir docs/editorial/drafts
```

`generate_images.py` deriva títulos, categorías, imágenes y `imageAlt` del
frontmatter curado actual; crea SVG solo en `docs/editorial/drafts/assets/`,
nunca sobrescribe `public/images/articles` ni activos existentes y exige
`imageAlt`. Antes de llevar un borrador al sitio, el editor debe añadir
fuentes estructuradas, procedencia/licencia de imagen, variante WebP y
revisión humana.

La ejecución del 12/09/2026 dejó dos briefs de prueba de extremo a extremo
(`elephant-social-knowledge` y `manta-survey-recovery`) y sus Markdown locales.
El auditor `content:luna-audit` recorre ahora todos los JSON de
`docs/editorial/drafts/`, además del control adversarial GBIF, para evitar que
un brief nuevo quede fuera de las puertas de publicación.

### Verificación del pipeline — 20 de septiembre de 2026

La ejecución reproducible de `pnpm content:luna-audit` encontró **7 briefs
válidos en 7 archivos JSON**. También rechazó correctamente seis mutaciones
adversariales: `catalogId` inexistente, URL duplicada, URL distinta de la
canónica del catálogo, ilustración sin etiqueta, enlace externo en
`internalLinks` y ausencia de `uniqueContribution`. El resultado solo prueba
el contrato local; no prueba la exactitud de las fuentes, la licencia de una
imagen, la autoría ni la aprobación para publicar.

La cola de revisión asistida también quedó cubierta: `pnpm
content:assisted-review-audit` comprueba **31 paquetes**, uno por cada artículo
que sigue pendiente, todos con `decision: pending` y sin `reviewedDate` ni
`reviewedBy`. El generador `pnpm content:review-packets` es idempotente,
omite artículos ya revisados o con paquete existente y escribe únicamente en
`docs/editorial/reviews/`; sus filas siguen pendientes hasta que una persona
abra la fuente, examine la imagen y confirme el artículo.

La ronda E‑E‑A‑T añadió controles de autoría, método, correcciones, conflictos y
gobernanza basados en CSIC, ICMJE y COPE. Se guardan en el catálogo como fuentes
candidatas: Luna puede proponer una matriz de responsabilidades, pero una persona
debe confirmar su aplicación y aportar los nombres, fechas y decisiones reales.

Para briefs de autoridad o distribución, los IDs `google-ai-features`,
`google-preferred-sources`, `google-discover-core-update-2026`,
`google-gen-ai-performance-reports-2026` y `google-ranking-systems-guide`
permiten separar visibilidad de calidad. Si el artículo usa datos, código o
afiliaciones, se pueden proponer `crossref-data-software-citation`,
`datacite-metadata-schema-47`, `ror-registry` e
`icmje-authors-contributors`; siguen siendo patrones condicionales y no
autorizan a inventar credenciales, DOI ni experiencia.

La tanda de Luna Max del 14/09 añade controles para cerrar las brechas actuales:
`google-e-e-a-t-experience`, `nature-authorship-policy`,
`nature-correction-retraction-policy` y `nature-competing-interests-policy`
para transparencia; `google-search-console-recommendations`,
`search-console-insights-report`, `search-console-advanced-filtering-comparison`
 y `search-console-impressions-position-clicks` para el ledger de medición; y
`worms-architeuthis-dux-taxdetails`, `nasa-gsfc-geodynamo-research` y
`greenland-shark-visual-system-ncomms-2026` para actualizar piezas existentes.
Son candidatos del catálogo: no se copian al frontmatter ni se publican sin
abrir la fuente y comprobar la afirmación concreta.

## Puertas de calidad y detención

El ciclo se detiene y solicita intervención si ocurre cualquiera de estas condiciones:

- una URL candidata no abre o no permite verificar la afirmación;
- una frase depende de una cifra, récord, promesa médica o categoría de conservación sin alcance;
- aparecen fuentes duplicadas, texto replicado o una conclusión genérica;
- falta autor, licencia, alt, crédito, fecha real de revisión o enlace interno;
- falta `uniqueContribution`, `notCommodity` o el registro de integridad de referencias en una pieza de alto riesgo;
- `pnpm content:audit`, `pnpm content:source-audit`, `pnpm content:source-metadata-audit`, `pnpm content:llms-audit`, `pnpm astro check`, `pnpm build`, `pnpm content:generated-metadata-audit`, `pnpm content:source-render-audit`, `pnpm content:reference-audit` o `pnpm content:link-audit` falla;
- el borrador intenta publicar, crear un commit automáticamente o escribir en AdSense;
- una tanda propone páginas casi equivalentes cuyo valor principal sea capturar variaciones de palabras clave;
- la experiencia móvil o el CLS empeoran al probar anuncios.

Los checks locales prueban estructura y regresiones; no sustituyen abrir fuentes, revisar el texto ni confirmar Core Web Vitals con usuarios reales.

## Prompt operativo

```text
Actúa como investigador editorial y asistente de borrador local para EcoCuriosa.
No publiques, no hagas commit, no envíes mensajes y no modifiques AdSense.

Consulta y página de origen: [consulta y URL]
Artículos internos relacionados: [URLs]
IDs de SOURCE_CATALOG.yml permitidos: [IDs]

Devuelve como máximo cinco oportunidades. Para cada una incluye intención,
ángulo original, 3–6 fuentes candidatas con URL exacta, evidencia, alcance,
fecha y limitación, y una tabla de afirmaciones (hecho/inferencia/hipótesis).
Propón un diagrama o una imagen con licencia documentada. Marca todo lo que
requiera comprobación humana como pendiente. El artefacto debe conservar
humanApproval: pending y publish: false.
```

## Evidencia de éxito del ciclo

Un ciclo solo se considera útil cuando existe un brief fechado, sus fuentes están en el catálogo o se proponen como candidatas explícitas, las consultas se pueden rastrear a Search Console, el activo tiene un plan de derechos y las auditorías pasan. El crecimiento se evalúa después con una nueva instantánea; no se atribuye una subida a Luna con una sola métrica ni se promete aprobación o ingresos de AdSense.

### Última prueba controlada — 20 de septiembre de 2026

Se añadió el brief local
[`coral-recovery-trajectories.json`](./drafts/coral-recovery-trajectories.json)
con tres candidatas del nuevo lote (`ec-coral-heatcrd-2024`,
`ec-coral-decade-heatwaves-2024` y `ec-coral-heatwave-memory-2024`). El brief
propone una visualización original de trayectorias y mantiene cuatro claims
separados como hecho, inferencia o hipótesis. El auditor encontró **4 briefs
válidos en 4 archivos JSON en esa prueba inicial**, rechazó correctamente los casos adversariales y
confirmó que todos conservan `humanApproval: pending` y `publish: false`.

Esta prueba demuestra que el pipeline puede transformar una fuente candidata en
un artefacto revisable, no que el artículo esté listo para publicar. La persona
responsable todavía debe abrir las tres fuentes, confirmar alcance y licencia,
revisar el texto y decidir si el brief aporta algo que no resuelva ya la
monografía de coral existente.

### Ampliación controlada de inspiración — 20 de septiembre de 2026

Se añadieron tres briefs locales de actualización, todos con fuentes ya
catalogadas y sin crear URLs públicas nuevas:

- [`geodynamo-waves-and-inference.json`](./drafts/geodynamo-waves-and-inference.json): separa medición, modelo e inferencia para el artículo de geodinamo.
- [`pangolin-detection-not-abundance.json`](./drafts/pangolin-detection-not-abundance.json): explica por qué una detección de pangolín no equivale a abundancia.
- [`greenland-shark-genome-limits.json`](./drafts/greenland-shark-genome-limits.json): conecta el genoma reciente con la longevidad estimada sin convertir candidatos moleculares en causalidad.

La nueva ejecución de `pnpm content:luna-audit` encontró **7 briefs válidos en
7 archivos JSON** y volvió a rechazar los seis casos adversariales. El pipeline
generó también los tres Markdown locales correspondientes bajo
`drafts/generated/`. Los siete briefs conservan `humanApproval: pending`,
`publish: false`, imagen original propuesta y comprobación humana pendiente.
Esto aumenta la capacidad de investigación, no la cantidad de artículos
publicados ni la puntuación de E‑E‑A‑T hasta que una persona abra las fuentes,
revise los textos y apruebe cada decisión.
