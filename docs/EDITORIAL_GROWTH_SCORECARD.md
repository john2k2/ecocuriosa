# Scorecard de crecimiento, confianza y monetización — EcoCuriosa

**Versión:** 14 de septiembre de 2026
**Propósito:** convertir la auditoría GEO/SEO, la biblioteca de fuentes y el protocolo de Luna Max en un plan medible. Las metas son criterios internos de salida; no son promesas de posiciones, tráfico ni aprobación de AdSense.

## Estado actual y definición de éxito

| Área | Línea base observada | Meta operativa | Evidencia necesaria para marcarla como lograda |
| --- | ---: | ---: | --- |
| SEO técnico / infraestructura | 87/100 → 92/100 | 92/100 sostenido | Sitemap y feed RSS enviados/revisados cuando corresponda, cero enlaces internos rotos, canonical consistente, datos estructurados válidos y P75 de Core Web Vitals comprobado con usuarios reales |
| Diseño, navegación y móvil | Bueno | Excelente medible | Pruebas en móvil y escritorio de las rutas principales, teclado completo, contraste revisado y CLS estable antes/después de activar anuncios |
| Indexación | Sitemap correcto; cobertura aún procesándose | Cobertura controlada | Inspección de URL para portada, categorías, artículos y páginas legales; exclusiones explicadas y sin errores críticos |
| AdSense técnico | Preparado | Listo para monetizar tras aprobación | CMP publicada y probada, políticas enlazadas, `ads.txt` correcto, slots reales cargados desde AdSense y anuncios separados de la navegación |
| E-E-A-T / calidad editorial | 56/100 (44 inicial) | 75/100 antes de escalar | 32 revisiones humanas registradas, autoría verificable, relación afirmación → fuente visible, imágenes con procedencia y correcciones trazables |

Una prueba HTTP 200, un build correcto o una referencia en el frontmatter no demuestran por sí solos indexación, exactitud, audiencia humana ni aprobación de AdSense. El [snapshot de acceso a fuentes](editorial/SOURCE_ACCESS_SNAPSHOT_2026-09-12.md) documenta la instantánea histórica de 97 URLs (70 respuestas 200, 10 respuestas 203 y 17 respuestas 403); la ficha actual declara 103 URLs y los ocho enlaces abiertos añadidos después pasan los controles de catálogo, metadatos, cuerpo y HTML. Los estados restringidos requieren revisión manual.

El control de metadatos también exige ahora una `accessedDate` por cada fuente de una ficha que ya declara `reviewedDate` y `reviewedBy`. En la lectura del 14/09/2026 hay fechas de acceso en 68/103 fuentes; las 35 restantes pertenecen a fichas pendientes y se completarán durante su revisión humana. La única ficha revisada (leopardo de las nieves) conserva fechas para sus 2/2 fuentes. Esta puerta mejora la reproducibilidad del proceso, pero no convierte una fecha de acceso en prueba de exactitud ni marca revisiones por sí sola.

El sitemap generado incluye ahora una entrada de imagen WebP para cada una de las 32 páginas de artículo, con título y pie derivados del frontmatter. Las 32 WebP activas se sirven a un ancho mínimo de 1200 px desde las ilustraciones SVG originales, y el control `content:image-sitemap-audit` comprueba tanto la resolución como la alineación entre imagen declarada y URL cuando se agregue una ficha nueva.

La plantilla de artículo reserva ahora la proporción real de las láminas activas (1200×750, `8/5`) en lugar de declarar una altura 16:9 que recortaba la ilustración; la auditoría de imagen mantiene el umbral de 1200 px como puerta de publicación.

Cada artículo muestra también un estado editorial explícito: las fichas pendientes indican que sus fuentes están enlazadas pero la revisión humana aún no está registrada; las fichas revisadas muestran la revisión registrada. El mensaje enlaza la metodología y no altera la indexación ni la monetización.

El control `content:generated-metadata-audit` recorre el HTML de `dist` después del build y exige, para las páginas indexables, idioma español, título, descripción de 50–160 caracteres, canonical HTTPS único, Open Graph y JSON-LD; excluye únicamente el archivo de verificación de Search Console. `content:navigation-audit` añade una comprobación estática del menú principal y móvil: nombres semánticos, `aria-controls`, `aria-hidden` inicial, sincronización del estado, foco al abrir y IDs únicos.

El control `content:indexation-audit` verifica que cada uno de los 32 artículos publicados tenga HTML y canonical propios, aparezca exactamente una vez en el sitemap, y que búsqueda/404 permanezcan con `noindex`; también comprueba `Allow: /` y el sitemap canónico en `robots.txt`. El build actual pasa 32/32 artículos y 44 URLs totales sin incidencias; la página pública de [correcciones editoriales](https://ecocuriosa.com/correcciones/) añade el protocolo de avisos sin inventar un historial de cambios.

La página pública «Sobre nosotros» declara además un `ProfilePage` enlazado a la misma entidad `Organization` del sitio. No se añaden personas, credenciales ni perfiles externos que no estén verificados.

El feed RSS público está cacheado en el borde únicamente para la ruta canónica `/rss.xml` (TTL de dos horas); la prueba posterior a la activación confirmó `MISS` seguido de `HIT`, sin ampliar la caché a páginas con consentimiento o anuncios.

**Refresco de entrega (14/09/2026):** Cloudflare Edge registró 11.626 solicitudes y 165.859.122 bytes del 8–14/09 (el día 14 incompleto), con 1.998 solicitudes en caché (17,2 %) y 53.334.804 bytes en caché (32,2 %). Es una señal de edge que mezcla bots, recursos y redirecciones; el detalle diario está en [`CLOUDFLARE_EDGE_SNAPSHOT_2026-09-14.md`](editorial/CLOUDFLARE_EDGE_SNAPSHOT_2026-09-14.md) y no se presenta como audiencia humana.

El auditor de contenido también bloquea activos que no estén declarados como originales o creados para EcoCuriosa cuando les falten creador, licencia y página de licencia HTTPS. Las ilustraciones actuales conservan su crédito editorial; una fotografía o imagen de terceros debe completar esos tres campos antes de entrar en producción.

Las siete piezas actualizadas el 12/09/2026 (`geodinamo`, `geosmina`, `tiburón de Groenlandia`, `pulpo mimo`, `manta raya`, `memoria del elefante` y `ebullición en altura`) muestran ahora `updatedDate` y `dateModified` porque tuvieron cambios sustanciales de texto y fuentes. Ese campo no equivale a `reviewedDate`: la revisión humana del archivo sigue siendo una puerta independiente.

El 13/09/2026 se actualizaron tres piezas más (`tardígrados`, `peces linterna` y `vuelo silencioso de los búhos`) para enlazar textos completos abiertos de estudios primarios. También muestran `updatedDate` y `dateModified`; ninguna recibió una fecha de revisión humana por ese cambio.

El 12/09/2026 se acortaron quince títulos que superaban la longitud editorial recomendada, conservando la entidad y la intención de búsqueda. Se medirá su efecto en Search Console después del siguiente rastreo; el cambio no implica que Google vaya a mostrar exactamente el mismo título.

**Primera instantánea de Search Console (12/09/2026):** ventana de 3 meses, 112 impresiones, 0 clics, CTR medio 0 % y posición media 14. Países con más impresiones: México (36), España (24), Chile (8), Estados Unidos (6) y Colombia (6). Dispositivos: móvil 58 y ordenador 54. Los sitemaps `/sitemap-0.xml` y `/sitemap-index.xml` figuran correctos con 43 páginas descubiertas; el informe de indexación aún está procesando datos.

**Refresco autenticado de Search Console (13/09/2026):** la ventana nominal de 3 meses muestra 179 impresiones, 1 clic, CTR 0,6 % y posición media 15,1; el detalle de consultas, páginas, países, dispositivos y sitemaps está en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md`](editorial/SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md). Es una muestra pequeña y no permite atribuir el clic ni inferir RPM.

**Reenvío autenticado (14/09/2026):** después de publicar `/correcciones/`, se reenvió `https://ecocuriosa.com/sitemap-index.xml`; Search Console lo muestra enviado y leído el 14/09, con estado **Correcto** y 43 URL descubiertas. El XML público ya contiene 44 URL, pero Google aún no refleja la nueva página en el conteo ni en la cobertura; no se presenta como 44 indexadas.

**Muestreo de inspección de URL (13/09/2026):** portada y cinco artículos prioritarios inspeccionados en Search Console; 6/6 aparecen «en Google» y «la página está indexada». La cobertura agregada continúa procesándose, por lo que esta muestra no se extrapola a las 43 URL descubiertas. Core Web Vitals de campo sigue sin datos suficientes en móvil y escritorio.

La lectura autenticada más reciente (13/09/2026) muestra como consultas con mayor exposición `architeuthis dux` (16 impresiones), `geodinamo` (14), `pulpo mimo` (13), `neuronas espejo bostezo` (3), `geodinamo terrestre` (2), `pez luciernaga` (2) y `relampago de catatumbo` (2). Por página, lideran la URL de geodinamo (27 impresiones), el calamar gigante (18), la guía de ebullición en altura (22 sumando sus variantes con y sin barra), el pulpo mimo (15) y el leopardo de las nieves (8). Las variantes sin barra devuelven 308 hacia la URL canónica; no se deben crear duplicados para ellas. El corte completo está fechado en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md`](editorial/SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md).

**Rendimiento de laboratorio (12/09/2026):** Lighthouse móvil contra producción pasó de 41/100 (FCP 4,4 s, LCP 7,8 s, TBT 670 ms) a una mediana actualizada de 98/100 en tres ejecuciones (92, 98 y 99; FCP mediano 1,1 s, LCP 1,9 s, CLS 0, TBT 130 ms), al evitar el runtime de AdSense cuando no hay slots, alojar las tipografías localmente y versionar sus nombres para invalidar la caché. SEO y accesibilidad quedaron en 100/100; Best Practices en 81/100 por tres avisos de APIs obsoletas emitidos por JavaScript Detections de Cloudflare. El control local alcanzó una mediana de 99/100 (FCP 1,5 s, LCP 2,1 s, CLS 0, TBT 0 ms). Son mediciones de laboratorio; el criterio de salida sigue siendo P75 de usuarios reales y no se desactivó ninguna protección de Cloudflare.

La verificación posterior al refuerzo de procedencia (tres ejecuciones nuevas: 95, 98 y 96, mediana 96; FCP mediano 1,7 s, LCP 2,4 s, CLS 0 y TBT 126 ms) no mostró regresión material. Se conserva como una lectura puntual separada de la línea histórica y no sustituye los datos de campo.

Una lectura temporal adicional contra la portada pública (12/09/2026) dio 99/100 en rendimiento, 100 en accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP 0,9 s, LCP 1,8 s, CLS 0 y TBT 70 ms. Las advertencias de buenas prácticas siguen siendo las APIs obsoletas detectadas por JavaScript Detections de Cloudflare, junto con recomendaciones de caché/JavaScript de laboratorio; no se desactivó la protección.

La lectura Lighthouse final de esta iteración (12/09/2026, móvil, portada pública) dio 98/100 en rendimiento, 100 en accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP 0,9 s, LCP 1,8 s, CLS 0 y TBT 140 ms. La variación frente a 99/100 es de laboratorio y no cambia el criterio de salida: validar P75 con usuarios reales antes de añadir anuncios.

Tras publicar las WebP de 1200 px y purgar sus 11 objetos antiguos en Cloudflare, una lectura Lighthouse móvil contra producción (12/09/2026) dio 99/100 en rendimiento, 100 en accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP 0,9 s, LCP 1,8 s, CLS 0 y TBT 70 ms. La muestra sigue siendo de laboratorio y no sustituye un P75 de campo.

La lectura pública posterior al ajuste de proporción de las láminas (12/09/2026) dio 98/100 en rendimiento, 100 en accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP 1,2 s, LCP 2,1 s, CLS 0 y TBT 140 ms. La variación es de laboratorio; las advertencias siguen concentradas en APIs obsoletas y recomendaciones de red/renderizado, no en contenido bloqueado.

La verificación móvil posterior al despliegue de las correcciones editoriales
(13/09/2026, una ejecución pública) dio 99/100 en rendimiento, 100 en
accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP y LCP de 1,5 s, CLS
0,001 y TBT 120 ms. Es una lectura puntual de laboratorio: no sustituye el
P75 de usuarios reales ni justifica desactivar la protección de Cloudflare.

La tanda de Luna Max del 12/09/2026 dejó dos briefs estructurados y dos
borradores Markdown locales (`elephant-social-knowledge` y
`manta-survey-recovery`) con ilustraciones SVG originales. Ambos conservan
`humanApproval: pending` y `publish: false`; no son artículos publicados ni
cuentan como revisiones humanas.

**Decisión de contenido:** mejorar primero esas páginas con una respuesta de 40–80 palabras, una fuente primaria visible y un siguiente enlace interno. Los títulos largos ya fueron ajustados; los extractos se cambiarán solo con una hipótesis basada en datos. Solo abrir una URL nueva si, después de la revisión y una nueva lectura de Search Console, la pregunta sigue sin respuesta. Con 1 clic y una muestra de 179 impresiones, no es válido prometer crecimiento ni inferir RPM.

Las siete páginas prioritarias también tienen ahora dos enlaces contextuales dentro del cuerpo, además de las tarjetas relacionadas; los 31 artículos pendientes acercan al menos un enlace directo a una afirmación concreta. El enlazado interno adicional se añadirá solo cuando el editor confirme que el destino aporta contexto y no canibaliza la consulta.

El prechequeo [`CONTENT_REVIEW_PRECHECK_2026-09-12.md`](editorial/CONTENT_REVIEW_PRECHECK_2026-09-12.md), regenerable con `pnpm content:review-precheck -- --write`, ordena las 31 revisiones pendientes por riesgo y muestra fuentes, citas dentro del cuerpo, enlaces propios, señales de cifras/salud/conservación y procedencia visual. El control es estático y no marca revisiones: la cola solo se cierra con comprobación humana.

Desde el 14/09/2026 el prechequeo también muestra la cobertura de `accessedDate` por artículo y añade esa fecha como acción explícita cuando falta. En la lectura actual, 16/31 fichas pendientes tienen fechas completas; el resto las completará la persona que abra y contraste sus fuentes.

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
- Usar la [ficha de revisión editorial](editorial/ARTICLE_REVIEW_TEMPLATE.md) para conservar la relación afirmación → fuente y dejar explícitos los límites antes de aprobar.

**Salida:** 8 artículos revisados de verdad, auditoría local sin imágenes/fuentes faltantes, 100% de fuentes trazables en el HTML y en el cuerpo, y una cola que conserva pendientes explícitos.

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

El catálogo actual contiene 472 entradas y la biblioteca 130 briefs u oportunidades candidatas. La segunda búsqueda enfocada de Luna añadió 25 fuentes no duplicadas y priorizó siete oportunidades conectadas a las consultas observadas; las tandas siguientes ampliaron clústeres de revisión y la verificación en navegador del 12/09 añadió tres registros abiertos para geodinamo, pulpo mimo y geosmina, además de controles oficiales de Google sobre IA, imágenes, títulos/snippets, spam de contenido escalado, inspección de URL, CrUX, favicon, nombres de sitio, `ImageObject`, SEO técnico, accesibilidad, compresión, redirects, autoría, procedencia, correcciones, preparación de AdSense, fuentes preferidas, informes de Search generative AI, integridad de investigación, citación de datasets, afiliaciones y responsabilidad de autores. La última ronda añadió cuatro candidatos comprobados para elefantes y manta raya, once fuentes oficiales para SEO, medición, móvil, accesibilidad y AdSense, cinco controles institucionales para autoría, correcciones, conflictos y gobernanza editorial, doce fuentes primarias/institucionales para actualizar siete clústeres con impresiones observadas y 18 fuentes para cuatro actualizaciones prioritarias y dos guías nuevas (olas de calor marinas y microplásticos). Esta revisión añadió una fuente primaria de PubMed para acotar la emisión rojo lejano de *Malacosteus niger*. La búsqueda dirigida de brechas de Luna investigó veinte referencias oficiales, añadió cinco URLs no duplicadas al catálogo y dejó ocho oportunidades medibles para indexación, Discover, autoría, actualizaciones, móvil, anuncios, evidencia y enlazado interno. La ronda del 13/09 añadió 20 candidatas para gobernanza, distribución, News y medición de marca, y ocho oportunidades de colaboración/atribución; la revisión P0/P1 posterior añadió nueve URLs no duplicadas para fuentes primarias e institucionales. El 14/09 se añadieron cinco guías oficiales de Bing/IndexNow y Google para descubrimiento y medición, tres referencias para consentimiento/medición responsable y doce referencias nuevas de Luna Max para autoría, correcciones, auditoría Bing, P75, Trends, tráfico y visibilidad publicitaria. La revisión P0 añadió tres fuentes nuevas con correcciones de alcance y la búsqueda de brechas añadió once referencias nuevas para autoridad, medición y actualizaciones científicas. Se generaron además tres ideas de brief para borradores locales y la página pública de correcciones, sin publicación de artículos nuevos. Todas siguen siendo candidatas hasta la comprobación humana. Las familias nuevas más útiles son:

- Google Search Central: contenido útil, datos estructurados, Discover, News y guía de evaluadores.
- Google AdSense: CMP europea, perfil de pagos, dirección/PIN, retenciones y exportaciones de Search Console.
- NOAA, NASA, USGS, IUCN, GBIF, Smithsonian, CITES, TRAFFIC, PubMed Central y revistas científicas para nuevas investigaciones.
- Creative Commons, NASA, NOAA, USGS, IPTC, C2PA, NISO CRediT y COPE para derechos, procedencia y transparencia.

Cada entrada sigue siendo una pista de investigación, no una cita aprobada. La URL exacta, su alcance y la fecha de comprobación deben quedar en el artículo cuando una persona la haya verificado.

Google aclara que `llms.txt` puede mantenerse para otros sistemas, pero Google Search no lo usa como una señal especial de posicionamiento. Por eso el archivo se conserva como índice auxiliar para lectores y herramientas, mientras la prioridad de descubrimiento sigue siendo HTML indexable, enlaces rastreables, sitemap y contenido útil.

## Condiciones que detienen la automatización

- La revisión humana cae por debajo de 100% del artículo candidato.
- Aparecen fuentes duplicadas, enlaces inaccesibles o datos sin alcance definido.
- La imagen no tiene licencia o se parece a una fotografía documental sin serlo.
- El artículo añade una promesa médica, un récord o una cifra universal sin evidencia primaria/institucional.
- El rendimiento móvil o la experiencia de lectura empeora después de añadir anuncios.

Este scorecard complementa [`GEO-AUDIT-REPORT.md`](../GEO-AUDIT-REPORT.md), [`EDITORIAL_GROWTH_ROADMAP.md`](./EDITORIAL_GROWTH_ROADMAP.md), [`EDITORIAL_INSPIRATION_LIBRARY.md`](./editorial/EDITORIAL_INSPIRATION_LIBRARY.md), [`LUNA_MAX_PROTOCOL.md`](./editorial/LUNA_MAX_PROTOCOL.md) y el [`LUNA_MAX_AUTOMATION_RUNBOOK.md`](./editorial/LUNA_MAX_AUTOMATION_RUNBOOK.md).
