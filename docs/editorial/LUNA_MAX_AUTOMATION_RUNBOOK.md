# Runbook de automatización editorial con Luna Max

**Versión:** 12 de septiembre de 2026  
**Estado:** diseño listo para revisión; no crea publicaciones ni modifica la cuenta de AdSense.

Este runbook complementa [`LUNA_MAX_PROTOCOL.md`](./LUNA_MAX_PROTOCOL.md), el [scorecard de crecimiento](../EDITORIAL_GROWTH_SCORECARD.md) y la [biblioteca de inspiración](./EDITORIAL_INSPIRATION_LIBRARY.md). Su objetivo es convertir señales reales de búsqueda en investigación y borradores revisables, manteniendo la decisión editorial y la publicación en manos de una persona.

## Resultado que debe producir cada ciclo

Luna Max recibe métricas agregadas y devuelve como máximo cinco oportunidades priorizadas. Para cada oportunidad crea un brief local con:

- consulta observada, intención y página interna que ya responde al tema;
- dos a seis fuentes candidatas del catálogo, con URL exacta, tipo de evidencia, alcance, fecha y limitación;
- tabla de afirmaciones separando hecho, inferencia e hipótesis;
- propuesta de aportación propia y enlaces internos, sin canibalizar artículos existentes;
- plan de imagen (`original-illustration`, `licensed-photo` o `commissioned-photo`), procedencia pendiente y texto alternativo;
- `humanApproval: pending` y `publish: false`.

El resultado no se copia automáticamente a un artículo, no marca `reviewedDate`/`reviewedBy` y no carga datos de pagos, impuestos, identidad o AdSense.

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

## Priorización con la señal actual

La instantánea del 12/09/2026 tiene 112 impresiones, 0 clics, CTR 0 % y posición media 14. Las primeras oportunidades son `geodinamo` (11), `pulpo mimo` (8), `geodinamo terrestre` (2), `architeuthis dux` (2) y `relampago de catatumbo` (2). La automatización debe tratar esas cifras como una muestra pequeña: prioriza mejorar título, respuesta inicial y recorrido interno antes de crear variantes.

Regla de decisión:

1. Si una consulta tiene impresiones y CTR bajo, mejorar la página existente y medir de nuevo.
2. Si la consulta no tiene una respuesta interna, crear un brief candidato, no un artículo en serie.
3. Si la consulta es una variante ortográfica (por ejemplo, “león de las nieves”), responderla dentro del artículo correcto antes de crear una URL nueva.
4. Si el tema es actual, médico, de conservación, climático o de seguridad, exigir una fuente primaria/institucional y revisión humana reciente.

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

## Decisión de imagen

| Necesidad | Acción | Evidencia antes de publicar |
| --- | --- | --- |
| Proceso, anatomía o mecanismo | Generar ilustración original SVG/WebP | Leyenda, `alt` y revisión de exactitud |
| Animal, lugar o evento real | Usar fotografía propia, encargada o licencia explícita | Autor, URL, licencia, fecha, cambios y crédito |
| Imagen encontrada en una web | No reutilizar por defecto | Permiso verificable del activo concreto |
| Imagen sintética de un animal | Apoyo didáctico, etiquetado como ilustración | Nunca presentarla como observación documental |

La automatización debe comprobar que cada SVG tenga una variante WebP, `imageAlt` y `imageCredit`; si falta cualquiera, se detiene.

## Puertas de calidad y detención

El ciclo se detiene y solicita intervención si ocurre cualquiera de estas condiciones:

- una URL candidata no abre o no permite verificar la afirmación;
- una frase depende de una cifra, récord, promesa médica o categoría de conservación sin alcance;
- aparecen fuentes duplicadas, texto replicado o una conclusión genérica;
- falta autor, licencia, alt, crédito, fecha real de revisión o enlace interno;
- `pnpm content:audit`, `pnpm content:source-audit`, `pnpm content:llms-audit`, `pnpm astro check`, `pnpm build` o `pnpm content:link-audit` falla;
- el borrador intenta publicar, crear un commit automáticamente o escribir en AdSense;
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
