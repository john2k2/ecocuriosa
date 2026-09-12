# Scorecard de crecimiento, confianza y monetización — EcoCuriosa

**Versión:** 12 de septiembre de 2026  
**Propósito:** convertir la auditoría GEO/SEO, la biblioteca de fuentes y el protocolo de Luna Max en un plan medible. Las metas son criterios internos de salida; no son promesas de posiciones, tráfico ni aprobación de AdSense.

## Estado actual y definición de éxito

| Área | Línea base observada | Meta operativa | Evidencia necesaria para marcarla como lograda |
| --- | ---: | ---: | --- |
| SEO técnico / infraestructura | 87/100 | 92/100 | Sitemap enviado y revisado en Search Console, cero enlaces internos rotos, canonical consistente, datos estructurados válidos y P75 de Core Web Vitals comprobado con usuarios reales |
| Diseño, navegación y móvil | Bueno | Excelente medible | Pruebas en móvil y escritorio de las rutas principales, teclado completo, contraste revisado y CLS estable antes/después de activar anuncios |
| Indexación | Sitemap correcto; cobertura aún procesándose | Cobertura controlada | Inspección de URL para portada, categorías, artículos y páginas legales; exclusiones explicadas y sin errores críticos |
| AdSense técnico | Preparado | Listo para monetizar tras aprobación | CMP publicada y probada, políticas enlazadas, `ads.txt` correcto, slots reales cargados desde AdSense y anuncios separados de la navegación |
| E-E-A-T / calidad editorial | 44/100 | 75/100 antes de escalar | 32 revisiones humanas registradas, autoría verificable, relación afirmación → fuente visible, imágenes con procedencia y correcciones trazables |

Una prueba HTTP 200, un build correcto o una referencia en el frontmatter no demuestran por sí solos indexación, exactitud, audiencia humana ni aprobación de AdSense.

**Primera instantánea de Search Console (12/09/2026):** ventana de 3 meses, 112 impresiones, 0 clics, CTR medio 0 % y posición media 14. Países con más impresiones: México (36), España (24), Chile (8), Estados Unidos (6) y Colombia (6). Dispositivos: móvil 58 y ordenador 54. Los sitemaps `/sitemap-0.xml` y `/sitemap-index.xml` figuran correctos con 43 páginas descubiertas; el informe de indexación aún está procesando datos.

## Secuencia de 30 días

### Días 1–7 — cumplimiento y medición

- El titular termina en AdSense el perfil legal, fiscal y de pagos con datos verdaderos y una dirección postal donde pueda recibir el PIN. No se guardan documentos, identificaciones, datos bancarios ni contraseñas en el repositorio.
- Se publica y prueba el mensaje de Privacy & messaging para EEE, Reino Unido y Suiza en los tres estados: aceptar, rechazar y gestionar opciones. La política de privacidad y la de cookies deben describir exactamente las herramientas activas.
- Se confirma en Search Console el sitemap `https://ecocuriosa.com/sitemap-index.xml` (correcto, 43 páginas descubiertas) y se conserva una primera tabla con consulta, página, país, dispositivo, impresiones, clics, CTR y posición.
- Se conserva la línea base agregada de Cloudflare separando `requests`, `pageViews` y visitas RUM. No se usa una solicitud de bot como si fuera audiencia.

**Salida:** una captura o exportación fechada de Search Console, una comprobación CMP y un registro de decisión; si falta una de estas pruebas, no se declara “medición conectada”.

### Días 8–14 — revisión editorial prioritaria

- Revisar 8 artículos de la cola, empezando por salud, conservación, clima, récords y cifras experimentales.
- Abrir cada fuente; marcar qué afirmación respalda, con qué especie, muestra, fecha, lugar y método. Eliminar cifras que no tengan correspondencia concreta.
- Resolver cualquier advertencia heurística que aparezca solo después de confirmar el problema con lectura humana; el auditor actual devuelve 0 y no se debe silenciar una alerta con una cita genérica.
- Registrar `reviewedDate` y `reviewedBy` únicamente después de la comprobación real de texto, fuentes y activo visual.

**Salida:** 8 artículos revisados de verdad, auditoría local sin imágenes/fuentes faltantes y una cola que conserva pendientes explícitos.

### Días 15–21 — autoridad y recorrido

- Crear o completar un perfil de autor real con nombre, experiencia y enlace externo solo si la persona responsable autoriza esos datos.
- Elegir 3–5 artículos relacionados por categoría y enlazarlos desde cada pieza revisada; consolidar URLs similares antes de crear variantes nuevas.
- Preparar una guía pilar solo si Search Console muestra una consulta y una necesidad que el archivo actual no resuelve.
- Para Discover, priorizar titulares claros, imágenes relevantes y contenido útil; no crear un sitemap de News mientras el sitio siga siendo principalmente evergreen.

**Salida:** menos páginas aisladas, un mapa de enlaces internos y una guía pilar aprobada, no una colección de artículos generados por volumen.

### Días 22–30 — monetización controlada

- Si AdSense aprueba la cuenta, copiar los cinco IDs de bloque desde el panel y cargarlos en la configuración de producción. Nunca inventar slots.
- Activar primero una unidad después de la respuesta inicial y otra al final de artículos largos; reservar altura y comprobar lectura móvil, navegación y CLS.
- Medir durante 14 días cobertura, RPM, viewability, páginas por sesión, retorno y Core Web Vitals antes de cambiar densidad.
- No hacer clic en anuncios propios ni pedir clics; investigar rendimiento con informes de AdSense/Analytics.

**Salida:** una comparación antes/después con fecha, plantilla, dispositivo y decisión de mantener, mover o retirar cada unidad.

## Rutina de revisión del archivo existente

La cola contiene 31 artículos pendientes y un artículo ya revisado. Para cerrar la deuda sin convertirla en publicación automática:

| Semana | Artículos que se revisan | Enfoque | Publicación nueva |
| --- | ---: | --- | ---: |
| 1 | 8 | salud, conservación, clima y números de alto riesgo | 0–1, solo si está aprobado |
| 2 | 8 | especies y experimentos con posible extrapolación | 0–1, solo si está aprobado |
| 3 | 8 | fenómenos naturales y comparaciones de récord | 0–1, solo si está aprobado |
| 4 | 7 | preguntas cotidianas, enlaces internos y QA final | 0–1, solo si está aprobado |

Si no se puede revisar un artículo completo, queda pendiente y no se le añade fecha ficticia. El objetivo de las cuatro semanas es cerrar el control de calidad, no fabricar una señal de frescura.

## Contrato de Luna Max en modo `max`

Luna trabaja como asistente de investigación y borrador local. Cada ejecución recibe únicamente datos agregados y devuelve un artefacto revisable:

```yaml
status: research
sourceQuery: "consulta o página de Search Console que originó la oportunidad"
workingTitle: "pregunta concreta, sin superlativo no demostrado"
readerQuestion: "qué quiere resolver el lector"
sourceCandidates:
  - catalogId: "id existente en SOURCE_CATALOG.yml"
    url: "https://..."
    evidenceType: "primary|review|dataset|institutional|secondary"
    supports: "afirmación exacta y acotada"
    scope: "especie, muestra, fecha, ubicación o método"
    limitation: "qué no permite concluir"
    checkedBy: null
    checkedDate: null
claims:
  - text: "afirmación candidata"
    certainty: "fact|inference|hypothesis"
    sourceIds: []
    humanCheck: pending
originalContribution: "diagrama, comparación, cálculo reproducible o experiencia atribuida"
imagePlan: "original-illustration|licensed-photo|commissioned-photo"
imageRights: pending
internalLinks: []
humanApproval: pending
publish: false
```

### Reglas del contrato

1. Luna puede descubrir oportunidades, comparar fuentes candidatas, proponer un esquema, generar un borrador local y crear diagramas originales.
2. Luna no puede inventar una URL, autor, dato, licencia, experiencia, `reviewedBy`, fecha de revisión ni resultado de Search Console.
3. Una fuente candidata nunca se copia automáticamente al frontmatter: una persona abre la fuente y decide si respalda la frase.
4. Los hechos, inferencias e hipótesis deben aparecer separados. Si falta evidencia, se elimina la frase o se conserva como incertidumbre atribuida.
5. La imagen generada se etiqueta como ilustración. Para una especie, lugar o evento real se usa fotografía propia, encargada, de dominio público o con licencia comprobada.
6. El flujo termina en un cambio local `draft`. Solo una persona responsable puede aprobar, registrar revisión y publicar.

## Decisión para imágenes

| Necesidad | Opción recomendada | Control obligatorio |
| --- | --- | --- |
| Anatomía, mecanismo o proceso | Ilustración SVG/raster original de EcoCuriosa | Leyenda y `alt` describen que es una ilustración; revisar precisión |
| Animal o lugar real | Fotografía propia, encargada o licencia explícita | Autor, URL, licencia, fecha, cambios y crédito del activo concreto |
| Imagen encontrada en una web | No reutilizar por defecto | Verificar permiso antes de descargar, transformar o publicar |
| Imagen IA de un animal | Solo como apoyo didáctico | No presentarla como observación documental ni como prueba de conducta |

## Tablero mensual mínimo

Guardar fuera del repositorio los datos de cuenta y exportaciones que puedan identificar a personas. En el tablero solo conservar agregados y decisiones:

| Dimensión | Campos | Umbral/decisión |
| --- | --- | --- |
| Search | clics, impresiones, CTR, posición, consulta, página, país, dispositivo | Mejorar primero páginas con impresiones altas y CTR bajo |
| Indexación | URLs inspeccionadas, estado canónico, cobertura, fecha | Investigar cualquier exclusión no explicada |
| Cloudflare | requests, 200/404/3xx, RUM visits, LCP, INP, CLS | Separar bots, entrega y experiencia real |
| Contenido | artículos revisados, fuentes granulares, advertencias, enlaces internos | Bloquear nuevos briefs si la deuda crece |
| AdSense | cobertura, RPM, viewability, CLS por plantilla | Mantener o retirar unidades; no optimizar por clics propios |

## Fuentes de trabajo incorporadas

El catálogo actual contiene 227 entradas y la biblioteca 64 briefs. Las familias nuevas más útiles son:

- Google Search Central: contenido útil, datos estructurados, Discover, News y guía de evaluadores.
- Google AdSense: CMP europea, perfil de pagos, dirección/PIN, retenciones y exportaciones de Search Console.
- NOAA, NASA, USGS, IUCN, GBIF, Smithsonian, CITES, TRAFFIC, PubMed Central y revistas científicas para nuevas investigaciones.
- Creative Commons, NASA, NOAA, USGS, IPTC, C2PA, NISO CRediT y COPE para derechos, procedencia y transparencia.

Cada entrada sigue siendo una pista de investigación, no una cita aprobada. La URL exacta, su alcance y la fecha de comprobación deben quedar en el artículo cuando una persona la haya verificado.

## Condiciones que detienen la automatización

- La revisión humana cae por debajo de 100% del artículo candidato.
- Aparecen fuentes duplicadas, enlaces inaccesibles o datos sin alcance definido.
- La imagen no tiene licencia o se parece a una fotografía documental sin serlo.
- El artículo añade una promesa médica, un récord o una cifra universal sin evidencia primaria/institucional.
- El rendimiento móvil o la experiencia de lectura empeora después de añadir anuncios.

Este scorecard complementa [`GEO-AUDIT-REPORT.md`](../GEO-AUDIT-REPORT.md), [`EDITORIAL_GROWTH_ROADMAP.md`](./EDITORIAL_GROWTH_ROADMAP.md) y [`LUNA_MAX_PROTOCOL.md`](./editorial/LUNA_MAX_PROTOCOL.md).
