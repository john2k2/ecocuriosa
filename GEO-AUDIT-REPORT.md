# GEO Audit Report: EcoCuriosa

**Audit date:** 12 de septiembre de 2026  
**Última actualización documental:** 14 de septiembre de 2026 (investigación, métricas y planificación; no cambia las métricas privadas ni la revisión de AdSense)
**URL:** https://ecocuriosa.com  
**Tipo de sitio:** Publisher / enciclopedia editorial de divulgación científica  
**Páginas analizadas:** 46 rutas estáticas construidas; 44 indexables en el sitemap y 2 `noindex` (búsqueda y 404)

> Este GEO Score es una línea base operativa, no una predicción de posiciones ni una aprobación de AdSense. Las categorías que necesitan datos de terceros se puntúan de forma conservadora porque las menciones de marca y los Core Web Vitals de campo siguen sin conexión; ahora se incorporaron instantáneas autenticadas de Search Console y Cloudflare.

El plan ejecutable con responsables, umbrales, contrato de Luna Max y criterios de detención está en [`docs/EDITORIAL_GROWTH_SCORECARD.md`](docs/EDITORIAL_GROWTH_SCORECARD.md) y el runbook operativo en [`docs/editorial/LUNA_MAX_AUTOMATION_RUNBOOK.md`](docs/editorial/LUNA_MAX_AUTOMATION_RUNBOOK.md).

## Resumen ejecutivo

EcoCuriosa tiene una base técnica sólida: HTML generado en servidor, navegación clara, canonicales, sitemap, `robots.txt`, `llms.txt`, JSON-LD y HTTPS funcionan en producción. El principal riesgo no es la plantilla sino la confianza editorial: 32 artículos registran al menos dos referencias HTTPS en el frontmatter, pero solo 1 de 32 tiene una revisión humana registrada. Tras la corrección textual preliminar, el auditor no detecta advertencias heurísticas; esa señal no sustituye abrir cada fuente y comprobar su correspondencia con la afirmación.

La auditoría visual también detectó activos que no correspondían con su artículo (por ejemplo, un tigre en la ficha del axolote). Se reemplazaron 20 referencias problemáticas por ilustraciones SVG originales del proyecto, se generó una ilustración correcta para el axolote y se registró crédito explícito en las 32 fichas. Las 11 referencias raster heredadas sin crédito también se sustituyeron por ilustraciones SVG originales; las 32 fichas usan ahora ilustraciones con procedencia editorial explícita. Los 32 JPG originales se conservaron además como respaldo, sin activarlos como fotografía documental hasta verificar derechos y correspondencia. El sitemap de contenido ahora declara también una imagen WebP contextual para cada una de las 32 páginas de artículo. Las WebP activas se regeneraron desde esos SVG a un ancho mínimo de 1200 px y el auditor de imagen-sitemap verifica ese umbral.

La nueva página pública de [correcciones editoriales](https://ecocuriosa.com/correcciones/) explica cómo informar una afirmación, cómo se comprueba y cómo se diferencia una corrección de una actualización o retirada. No inventa un historial de cambios: solo se registran fechas y responsables cuando una persona ha realizado la comprobación.

Siete artículos prioritarios (`geodinamo`, `geosmina`, `tiburón de Groenlandia`, `pulpo mimo`, `manta raya`, `memoria del elefante` y `ebullición en altura`) recibieron cambios sustanciales de texto y fuentes el 12 de septiembre y ahora muestran una fecha de «Actualizado» independiente de la revisión humana. No se modificaron las fechas de los otros artículos ni se marcó ninguna revisión no realizada.

El 13 de septiembre se actualizaron tres fichas adicionales (`tardígrados`, `peces linterna` y `vuelo silencioso de los búhos`) para enlazar copias abiertas de estudios primarios. También muestran «Actualizado», mientras `reviewedDate` y `reviewedBy` siguen pendientes de una comprobación humana.

Se acortaron quince títulos que superaban la longitud editorial recomendada para conservar la pregunta y la entidad principal en pantallas móviles. El cambio sigue las [buenas prácticas de Google para title links](https://developers.google.com/search/docs/appearance/title-link): texto descriptivo y conciso, sin keyword stuffing ni boilerplate. Afecta solo al texto de `<title>`/H1 derivado del frontmatter; no altera URLs, fechas ni afirmaciones del artículo. Google puede reescribir un title link y debe volver a rastrear la página antes de que se observe el efecto.

La política de privacidad también distingue ahora entre Web Analytics sin datos personales y los registros técnicos que puede procesar la infraestructura. No se declara que una dirección IP sea automáticamente anónima ni se atribuyen prácticas de retención que no estén verificadas; el titular puede solicitar información por el canal de privacidad.

### Desglose de puntuación

| Categoría | Puntuación | Peso | Aporte ponderado |
|---|---:|---:|---:|
| Citabilidad para IA | 72/100 | 25% | 18,0 |
| Autoridad de marca | 20/100 | 20% | 4,0 |
| Contenido y E-E-A-T | 56/100 | 20% | 11,2 |
| GEO técnico | 92/100 | 15% | 13,8 |
| Schema y datos estructurados | 82/100 | 10% | 8,2 |
| Optimización por plataforma | 25/100 | 10% | 2,5 |
| **GEO Score provisional** |  |  | **57,7 → 58/100** |

## Objetivos de puntuación y evidencia de salida

Las metas siguientes son umbrales operativos para mejorar el sitio, no promesas de posiciones ni de aprobación. Cada aumento exige evidencia nueva y no se obtiene solo cambiando una etiqueta.

| Área prioritaria | Línea base observada | Meta operativa | Evidencia que permite marcarla |
| --- | ---: | ---: | --- |
| SEO técnico / infraestructura | 87/100 | 92/100 | CWV reales medidos, enlaces internos sin huérfanas, sitemap/redirects estables y cero regresiones en CI |
| Diseño, navegación y móvil | Bueno | Excelente medible | prueba móvil de rutas clave, navegación de teclado, contraste y CLS sin deterioro al activar anuncios |
| Indexación | Google ya encuentra el sitio | Cobertura controlada | Search Console con sitemap enviado, exclusiones justificadas y cero errores críticos de indexación |
| AdSense técnico | Preparado | Aprobado y medido | aprobación de la cuenta, CMP probado, slots reales y RPM/visibilidad/CLS documentados |
| E-E-A-T / calidad editorial | 56/100 (44 inicial) | 75/100 antes de escalar | 32 revisiones humanas reales, autoría/perfil verificable, fuentes específicas, correcciones trazables y derechos de imagen documentados |

El cuello de botella para acercarse a estas metas es E-E-A-T, no agregar más volumen. Las políticas de Google recomiendan contenido original y centrado en personas, y las políticas de Publisher restringen páginas copiadas, reescritas o generadas sin revisión/curación humana.

## Problemas críticos

No se encontró un bloqueo crítico confirmado. El sitio devuelve HTTP 200 en las rutas clave, `www` redirige al dominio canónico, los rastreadores no están bloqueados y el build no tiene errores.

## Alta prioridad

1. **Cerrar la revisión editorial antes de escalar.** `pnpm content:audit` registra 31 artículos sin `reviewedDate`/`reviewedBy`; el auditor no detecta advertencias heurísticas después de la corrección preliminar, pero eso no reemplaza la lectura humana. Abrir la cola en [`docs/editorial/CONTENT_REVIEW_QUEUE.md`](docs/editorial/CONTENT_REVIEW_QUEUE.md), comprobar cada afirmación cuantitativa y rellenar la fecha solo después de una revisión real.
2. **Completar la configuración de privacidad de AdSense.** En AdSense hay que confirmar Privacy & messaging, seleccionar la CMP de Google de tres opciones, enlazar `/politica-de-privacidad/` y `/politica-de-cookies/` y probar el flujo desde una ubicación EEE/Reino Unido/Suiza. El código de anuncios ya no se carga en las páginas de política.
3. **Completar el perfil de pagos solo con datos reales del titular.** El nombre legal, país, dirección postal, información fiscal y beneficiario deben coincidir con la cuenta y poder verificarse. Esta operación es manual y no debe pasar por el repositorio ni por Luna; consultar [perfil de pagos](https://support.google.com/adsense/answer/7363450?hl=es), [dirección válida](https://support.google.com/adsense/answer/13863682?hl=es) y [PIN](https://support.google.com/adsense/answer/157667?hl=es). Completarlo no garantiza aprobación editorial ni ingresos.
4. **Configurar los bloques publicitarios después de la aprobación.** Los cinco `PUBLIC_ADSENSE_SLOT_*` están vacíos; por eso hoy se renderizan placeholders ocultos y no unidades de anuncio. El publisher ID se conserva en `ads.txt` y en el meta de verificación, mientras el runtime pesado de AdSense no se descarga sin un slot real. No inventar IDs: copiarlos desde AdSense y redeplegar.
5. **Usar la medición sin sobreinterpretarla.** Search Console ya está conectado y la lectura más reciente (13/09, selector de 3 meses) muestra 179 impresiones, 1 clic, CTR 0,6 % y posición media 15,1; el volumen es todavía demasiado pequeño para prometer crecimiento. Cloudflare aporta señales de entrega y experiencia, pero no sustituye Search Console, Analytics ni RPM. El detalle reproducible está en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md`](docs/editorial/SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md).
6. **Reducir ruido de escaneo sin tocar contenido.** En la misma ventana aparecieron 337 solicitudes a `/wp-admin/install.php` y numerosos `wp-includes`, `xmlrpc.php` y `/.env.live`, todos inexistentes en este sitio Astro. El 12/09/2026 se validó en modo seco y se creó en el ruleset WAF personalizado de zona `1ca747d3ba174ff6b0208f21dc3df446` una regla de bloqueo estándar para cinco rutas exactas (`/wp-admin/install.php`, `/wp-login.php`, `/xmlrpc.php`, `/.env` y `/.env.live`). No afecta artículos, categorías, recursos ni imágenes; las cinco rutas responden 403 en producción. El ruleset administrado gratuito sigue activo.
7. **Revisar JavaScript Detections de Cloudflare antes de cerrar el rendimiento.** La zona gratuita tiene `enable_js: true` y `fight_mode: false`; el script invisible de detección aparece en el laboratorio y añade latencia. Desactivarlo podría mejorar el primer render, pero es un cambio de seguridad que requiere decisión explícita y una nueva medición antes/después.

### Línea base de Cloudflare — 6–12 de septiembre de 2026

La consulta se hizo con [Cloudflare GraphQL Analytics](https://developers.cloudflare.com/analytics/graphql-api/) y se conserva aquí solo como agregado. Cloudflare retiene siete días útiles en esta cuenta; `requests` incluye bots, redirecciones y recursos, por lo que no equivale a usuarios ni a visitas orgánicas.

| Señal | Agregado | Lectura operativa |
| --- | ---: | --- |
| Solicitudes en el edge | 11.230 | Volumen total, no audiencia humana |
| `pageViews` de Edge Analytics | 3.845 | Indicador aproximado; incluye automatización |
| Respuestas 200 | 5.614 (50,0%) | La mitad del volumen terminó en contenido/recursos correctos |
| Respuestas 404 | 2.497 (22,2%) | Predominan escaneos WordPress y `.env`, no enlaces internos rotos |
| Redirecciones 301/308 | 2.840 (25,3%) | Revisar patrones de barra final y host; `www` ya llega al apex |
| Países con más solicitudes | US, HK, SG, DE, AU | Mezcla de bots y usuarios; no orientar contenido por país todavía |
| Eventos RUM de la configuración Pages | 81 `pageloads`, 44 `visits` | Señal pequeña; 73 eventos desktop y 8 mobile |

**Actualización de edge por GraphQL — 12 de septiembre de 2026.** Una consulta de `httpRequests1dGroups` para la misma ventana devolvió 12.182 solicitudes y 385.210.662 bytes; 684 solicitudes y 187.040.316 bytes fueron servidos desde caché (5,6 % y 48,6 %, respectivamente). Esta consulta tiene un alcance distinto al panel histórico de `pageViews`/códigos de respuesta, por lo que se conserva como refresco de entrega y no reemplaza la línea base anterior ni se interpreta como audiencia humana.

**Refresco de edge por GraphQL — 13 de septiembre de 2026.** La consulta `httpRequests1dGroups` para el intervalo 7–13/09 (el último día está incompleto al momento de la lectura) devolvió 13.351 solicitudes y 288.611.163 bytes; 1.981 solicitudes y 133.020.231 bytes fueron servidos desde caché (14,8 % y 46,1 %). Es una señal de entrega que incluye bots, redirecciones y recursos; no se interpreta como usuarios, sesiones, clics ni RPM y no sustituye Search Console, Web Analytics ni AdSense.

**Refresco de edge por GraphQL — 14 de septiembre de 2026.** La consulta comparable del intervalo 8–14/09 (14/09 incompleto) devolvió 11.626 solicitudes y 165.859.122 bytes; 1.998 solicitudes y 53.334.804 bytes fueron servidos desde caché (17,2 % y 32,2 %). La tabla diaria reproducible está en [`CLOUDFLARE_EDGE_SNAPSHOT_2026-09-14.md`](docs/editorial/CLOUDFLARE_EDGE_SNAPSHOT_2026-09-14.md). El alcance sigue incluyendo bots, redirecciones y recursos, por lo que no se interpreta como audiencia humana.

**Regla de caché segura — 12 de septiembre de 2026.** Se creó la regla de zona `EcoCuriosa - cache RSS` (referencia `ecocuriosa-cache-rss`) en la fase `http_request_cache_settings`, limitada a `ecocuriosa.com/rss.xml`. Usa dos horas de TTL en el borde y respeta el `Cache-Control` del origen en el navegador; no coincide con HTML, anuncios ni imágenes. La comprobación inmediata devolvió `MISS` en la primera solicitud y `HIT` en la segunda. La variante `www` continúa con redirección 301 al host canónico.

### Línea base de Google Search Console — 13 de septiembre de 2026

La propiedad autenticada `https://ecocuriosa.com/` ya está disponible. En el informe de rendimiento web, con ventana de 3 meses y datos visibles del 5–11/09, aparecen 179 impresiones, 1 clic, CTR medio de 0,6 % y posición media 15,1. Las consultas con más impresiones fueron `architeuthis dux` (16), `geodinamo` (14), `pulpo mimo` (13), `neuronas espejo bostezo` (3), `geodinamo terrestre` (2), `pez luciernaga` (2) y `relampago de catatumbo` (2). La pestaña de países concentra impresiones en México (50), España (49), Chile (11), Estados Unidos (9) y Argentina (9); los dispositivos se reparten entre móvil (93), ordenador (85) y tablet (1). El detalle y las páginas observadas están en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md`](docs/editorial/SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md).

Search Console registra 32 páginas en la tabla de páginas; algunas impresiones todavía apuntan a variantes sin barra final, que deben seguir redirigiendo una sola vez al canonical con barra. Los dos sitemaps enviados (`/sitemap-0.xml` y `/sitemap-index.xml`) figuran como **Correcto** y con 43 páginas descubiertas. El informe de indexación aún indica que está procesando datos; no se debe traducir “43 descubiertas” en “43 indexadas”. HTTPS muestra 29 válidas y 0 no válidas; Breadcrumbs, 16 válidas y 0 no válidas; Core Web Vitals todavía no tiene datos.

**Reenvío autenticado — 14 de septiembre de 2026.** Tras publicar `/correcciones/`, se volvió a enviar `https://ecocuriosa.com/sitemap-index.xml`. Search Console lo muestra enviado y leído el 14/09, con estado **Correcto** y 43 URL descubiertas. El XML público contiene 44 URL, pero la nueva página todavía no aparece en el conteo ni en la cobertura; no se declara descubierta o indexada por Google hasta observarlo explícitamente.

**Muestreo autenticado de inspección de URL — 13 de septiembre de 2026.** Se inspeccionaron la portada y cinco artículos prioritarios (`geodinamo`, `pulpo mimo`, relámpago del Catatumbo, tiburón de Groenlandia y leopardo de las nieves): **6/6** devolvieron «La URL está en Google» y «La página está indexada». Es una muestra representativa, no un reemplazo del informe de cobertura agregado, que todavía figura como «Se están procesando los datos».

La configuración RUM asociada a Pages comenzó el 7 de septiembre y es la única que coincide con los tres hosts de producción. Se observan además tres configuraciones antiguas de auto-instalación; no se borraron porque la producción entrega un solo beacon y eliminarlas sería una acción destructiva sin beneficio demostrado. Conviene revisarlas en el panel cuando haya tiempo, manteniendo una sola configuración canónica.

## Prioridad media

- Añadir un perfil de autor real y verificable cuando el responsable autorice nombre, experiencia y enlace; mientras tanto, mantener la firma colectiva y no inventar credenciales.
- Mantener la bitácora de procedencia de las 32 ilustraciones y no reutilizar imágenes encontradas sin permiso. Si se incorpora una fotografía, conservar URL, licencia, autor, fecha de descarga y hash.
- Revisar periódicamente que la política de privacidad describa exactamente las herramientas activas: actualmente documenta Cloudflare Web Analytics sin cookies y las cookies publicitarias de AdSense; no hay Google Analytics instalado en el código.
- Usar datos de Search Console para crear cuatro guías pilar y mejorar páginas con muchas impresiones/CTR bajo antes de crear nuevas variantes.
- Considerar FAQ estructurada solo cuando las preguntas y respuestas estén verificadas y visibles; no añadir Schema por volumen.

## Prioridad baja

- Crear tarjetas sociales específicas para las guías pilar y un canal de distribución sostenible (newsletter, YouTube o redes) después de estabilizar el flujo editorial.
- Mantener el feed RSS editorial y revisar sus 32 entradas cuando se publique una nueva monografía.
- Revisar periódicamente el contraste visual, navegación de teclado y experiencia móvil tras activar anuncios.

## Análisis por categoría

### Citabilidad para IA — 72/100

Los artículos tienen respuesta rápida, encabezados, tablas/FAQ en el cuerpo, enlaces internos y referencias visibles. Las siete páginas prioritarias ya incorporan dos enlaces contextuales dentro del texto y los 31 artículos pendientes tienen al menos un enlace directo junto a una afirmación concreta; las oportunidades de enlazado interno adicional siguen pendientes de una selección editorial específica. La estructura es fácil de extraer y `llms.txt` enlaza la metodología. Para subir la puntuación: escribir respuestas de 40–80 palabras con hecho, alcance y límite; conectar cada afirmación importante con una fuente concreta; y añadir análisis propio en vez de resumir varias fuentes.

Nota de alcance: Google Search indica que `llms.txt` no es una señal especial de posicionamiento; aquí se conserva como índice auxiliar para otras herramientas, no como sustituto de HTML, enlaces y sitemap.

### Autoridad de marca — 20/100

La entidad EcoCuriosa está definida en `Organization` y tiene una misión clara, pero la búsqueda pública del 12/09/2026 devolvió principalmente el propio dominio y no permite confirmar aún una base de menciones independientes, perfiles sociales, Wikipedia, Reddit, YouTube ni enlaces editoriales. El objetivo no es fabricar señales: es publicar piezas originales, conseguir colaboraciones atribuibles y mantener una identidad de autor verificable. El plan de distribución por fases y sus umbrales está en [`docs/editorial/BRAND_AUTHORITY_PLAN.md`](docs/editorial/BRAND_AUTHORITY_PLAN.md).

### Contenido y E-E-A-T — 56/100

Hay 32 artículos, 32 imágenes referenciadas, 32 fichas con al menos dos entradas de fuente y cierres no repetidos. Cada ficha muestra ahora hasta dos fuentes clave junto a la respuesta inicial y la lista completa al final; los 31 artículos pendientes también acercan al menos un enlace de evidencia a una afirmación específica. La página «Sobre nosotros» explica las responsabilidades de investigación, redacción, visualización y revisión sin inventar credenciales. Estas son referencias registradas, no verificaciones editoriales automáticas. La deuda es la revisión humana: 1/32 está registrada. El auditor local detecta 0 advertencias heurísticas tras la corrección preliminar, pero la cola editorial sigue siendo la puerta de salida antes de automatizar más contenido.

La comprobación de acceso del 12/09/2026 encontró 70 respuestas `200`, 10
`203` y 17 `403` entre las 97 URLs declaradas entonces. Después se incorporaron
dos enlaces adicionales a texto completo abierto (y se sustituyó una URL por
su copia de repositorio), por lo que la ficha actual declara 99 URLs. Los estados `203/403` se
tratan como restricciones de acceso automatizado, no como fuentes rotas ni
como aprobación editorial; el detalle y el procedimiento de comprobación
manual están en el [snapshot de acceso a fuentes](docs/editorial/SOURCE_ACCESS_SNAPSHOT_2026-09-12.md).

### GEO técnico — 92/100

La entrega de producción verificada incluye HTML SSR, canonicales, Open Graph/Twitter, sitemap con imagen contextual, `robots.txt` permisivo, `llms.txt`, feed RSS editorial, HSTS, `nosniff`, referrer policy, CSP base, caché de assets y redirección `www`→apex. `astro check` terminó con 0 errores/avisos/sugerencias y el build genera 46 rutas estáticas, incluido el endpoint RSS. La auditoría generada de navegación comprueba nombres semánticos, relación botón-menú, estado `aria-hidden`, foco inicial y ausencia de IDs duplicados. Falta medir Core Web Vitals con usuarios reales después de activar anuncios.

La tarjeta visual de la portada ahora deriva imagen, título, categoría, descripción
y enlace del artículo que tenga `featured: true`; así una futura rotación editorial
no puede dejar una ficha destacada desincronizada.

#### Medición de laboratorio reproducible — 12/09/2026

Se ejecutó Lighthouse CLI en una emulación móvil contra la portada publicada. El
resultado es una señal de laboratorio, no un P75 de usuarios reales ni un dato
de Search Console:

| Estado | Rendimiento | FCP | LCP | CLS | TBT | Observación |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Producción antes de la optimización | 41/100 | 4,4 s | 7,8 s | 0 | 670 ms | AdSense se descargaba sin slots y Cloudflare inyectaba JavaScript de detección |
| Producción después de retirar ese runtime | 84/100 | 3,3 s | 3,3 s | 0 | 0 ms | 96 imágenes intactas; el coste restante dominante era la red externa |
| Producción actual con tipografías locales y nombres versionados (mediana actualizada de 3 ejecuciones) | 98/100 | 1,1 s | 1,9 s | 0 | 130 ms | Corridas 92/98/99; 120,9 KB de tipografías; SEO y accesibilidad 100/100; Best Practices 81/100 por tres avisos de APIs obsoletas en JavaScript Detections de Cloudflare |
| Verificación posterior a procedencia y metadatos (mediana de 3 ejecuciones) | 96/100 | 1,7 s | 2,4 s | 0 | 126 ms | Corridas 95/98/96; SEO y accesibilidad 100/100; Best Practices 81/100 por el mismo script gestionado de JavaScript Detections |
| Control local con tipografías locales (mediana de 3 ejecuciones) | 99/100 | 1,5 s | 2,1 s | 0 | 0 ms | Aísla el código del sitio sin Cloudflare ni AdSense |
| Verificación pública posterior a las correcciones editoriales (una ejecución, 13/09/2026) | 99/100 | 1,5 s | 1,5 s | 0,001 | 120 ms | Móvil; accesibilidad 100/100, SEO 100/100 y Best Practices 81/100 por el mismo script gestionado de Cloudflare |

La primera tanda dejó SEO y accesibilidad en 100/100 y rendimiento entre 94
y 97/100. La repetición más reciente dio 92/98/99 (mediana 98/100). Best Practices quedó en 81/100 por avisos emitidos por el script
gestionado de JavaScript Detections de Cloudflare; no es código propio del
sitio. La medición final de campo queda pendiente de datos RUM suficientes y
de repetir el ensayo cuando AdSense tenga slots aprobados; no se debe presentar
esta tabla como garantía de Core Web Vitals. Desactivar esa detección es una
decisión de seguridad pendiente y no se hizo automáticamente.

### Schema y datos estructurados — 82/100

Se emiten `Organization`, `WebSite` con `SearchAction`, `WebPage`/`CollectionPage`, `Article` y `BreadcrumbList`. El artículo incluye fechas, autor, publisher, imagen y citas. No se añadieron `sameAs`, `Person` ni `FAQPage` porque faltan datos públicos autorizados o un contrato de preguntas/respuestas que garantice exactitud.

### Optimización por plataforma — 25/100

La base es compatible con Google Search, AI Overviews y rastreadores de IA, pero no hay datos de rendimiento por plataforma ni distribución externa medida. Las acciones de mayor retorno son: Search Console para consultas reales, páginas de respuesta directa, enlaces editoriales legítimos y una cadencia sostenible de distribución.

## Quick wins de esta semana

1. Completar el perfil de pagos de AdSense solo con un nombre, país, domicilio y datos fiscales verdaderos que puedas demostrar y donde puedas recibir el PIN; no elegir Argentina únicamente por nacionalidad ni inventar datos, y conservar la información fiscal/bancaria fuera del repositorio.
2. Confirmar la CMP de Google y las URLs de privacidad/cookies dentro de AdSense; probar aceptar, rechazar y gestionar opciones.
3. Revisar mensualmente Search Console y la configuración RUM canónica de Cloudflare; guardar solo agregados y conservar separados edge requests, RUM visits y métricas orgánicas.
4. Revisar los primeros 8 artículos de la cola y corregir cualquier cifra, promesa médica, conservación o récord sin respaldo.
5. Crear los bloques AdSense en la cuenta, cargar sus IDs en Cloudflare Pages solo después de la aprobación y verificar CLS en móvil.
6. [x] Acortar quince títulos largos manteniendo la intención de búsqueda y la entidad principal; volver a medir impresiones y CTR después de que Google los vuelva a rastrear.

## Plan de 30 días

### Semana 1 — medición y cumplimiento

- [x] Enviar/confirmar `https://ecocuriosa.com/sitemap-index.xml` en Search Console; el 14/09 quedó enviado, leído y Correcto con 43 URL descubiertas; esperar que el conteo y la cobertura reflejen la nueva página.
- [ ] Activar y probar el mensaje de consentimiento de Google para EEE/Reino Unido/Suiza.
- [x] Registrar las líneas base iniciales de Cloudflare Edge Analytics/Web Analytics (6–12 de septiembre) y Search Console (12 de septiembre); queda pendiente una muestra de Core Web Vitals reales.
- [ ] Revisar en el panel las tres configuraciones RUM antiguas de auto-instalación y conservar una sola configuración canónica sin borrar hasta confirmar el beacon de Pages.
- [ ] Confirmar el titular legal y las declaraciones de cookies con asesoría aplicable; no publicar datos personales sin autorización.

### Semana 2 — calidad editorial

- [ ] Revisar 8 artículos prioritarios usando la cola y el estándar de fuentes.
- [x] Reemplazar las 11 referencias raster heredadas sin crédito por ilustraciones SVG originales y registrar el crédito visible en las 32 fichas.
- [x] Corregir las advertencias heurísticas preliminares; el auditor actual devuelve 0 y la revisión humana sigue pendiente.

### Semana 3 — búsqueda y recorrido

- [x] Capturar la primera tabla de oportunidades por impresiones, CTR, posición, país y dispositivo; todavía no hay volumen suficiente para conclusiones fuertes.
- [x] Publicar el feed RSS editorial con 32 entradas y excluirlo del sitemap de páginas; `content:rss-audit` queda como control de regresión.
- [ ] Crear una guía pilar por clúster y enlazarla con 3–5 artículos relacionados.
- [x] Mejorar los títulos largos de las 32 fichas; los extractos solo se tocarán con una hipótesis basada en Search Console y sin cambiar fechas sin cambio sustancial.

### Semana 4 — monetización controlada

- [ ] Si AdSense aprueba, configurar los cinco slots y comprobar que `ads.txt` coincide con el publisher ID.
- [ ] Empezar con un bloque tras la introducción y otro al final de artículos largos; nunca junto a navegación ni antes de la respuesta principal.
- [ ] Medir RPM, cobertura, viewability, páginas por sesión y CLS durante 14 días antes de aumentar densidad.

## Flujo seguro para Luna Max

```text
Métricas agregadas y consultas reales (solo lectura)
        ↓
Luna Max: oportunidad + brief + fuentes candidatas + tabla de afirmaciones
        ↓
Editor: abre cada fuente, decide el ángulo y aprueba derechos de imagen
        ↓
Luna Max: borrador local marcado como draft; nunca publica
        ↓
Editor: comprueba afirmación por afirmación, añade análisis y fecha real
        ↓
Auditoría: content:audit + astro check + build + revisión visual móvil
        ↓
Publicación humana y medición posterior
```

La salida de Luna debe separar hecho, inferencia e hipótesis; incluir URL exacta y alcance de cada fuente; declarar incertidumbre; y rechazar cualquier afirmación sin respaldo. Para imágenes: generar diagramas o ilustraciones originales para procesos y usar fotografías solo con licencia documentada para especies/lugares reales. No raspar, no transformar material encontrado sin permiso y no presentar una imagen generada como observación documental.

## Verificación ejecutada

- `pnpm content:audit -- --json`: 32 artículos; 32 con entradas de fuentes; 1 revisado; 0 imágenes faltantes, 0 respaldos WebP faltantes, 0 imágenes sin texto alternativo y 0 sin crédito/procedencia; 0 conclusiones repetidas; 0 advertencias heurísticas. La auditoría ahora bloquea nuevos activos sin `imageAlt`, `imageCredit` o respaldo WebP cuando el original es SVG.
- `pnpm astro check`: 0 errores, 0 avisos, 0 sugerencias.
- `pnpm build`: 46 páginas estáticas generadas correctamente.
- `pnpm content:link-audit`: 46 documentos HTML y 112 enlaces/recursos internos comprobados (incluye `srcset` de las imágenes, el preload de la fuente crítica y el enlace RSS); 0 rutas faltantes y 0 rutas HTML sin barra final. El control de canonicals quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:source-render-audit`: las 32 fichas construidas exponen las 99 URLs de fuente del frontmatter como enlaces visibles en el HTML; 0 rutas de artículo ausentes y 0 fuentes omitidas. El control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:source-metadata-audit`: las 99 fuentes del archivo tienen editor, URL, tipo de evidencia y alcance declarado (99/99); el control quedó integrado en `.github/workflows/content-quality.yml` para evitar que una nueva ficha pierda contexto editorial.
- `pnpm content:reference-audit`: las 99 fuentes del frontmatter también aparecen como enlaces exactos en el cuerpo de sus artículos (99/99); el control evita bibliografías genéricas o fuentes registradas que el lector no pueda rastrear.
- `pnpm content:llms-audit`: 32/32 artículos sincronizados con `public/llms.txt`, 0 entradas faltantes/desactualizadas, 0 URLs no canónicas y 0 duplicadas; el control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:rss-audit`: 32/32 artículos presentes en `dist/rss.xml`, con enlace canónico del feed, idioma y descripción; el control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:image-sitemap-audit`: 32/32 páginas de artículo tienen una entrada `image:image` con la variante WebP, título, pie contextual y un activo de al menos 1200 px de ancho; 0 imágenes faltantes, ilegibles o por debajo del umbral. El control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:generated-metadata-audit`: recorre 47 archivos HTML generados, identifica 44 páginas indexables y no detecta problemas de idioma, títulos, descripciones, canonicales, Open Graph, JSON-LD ni duplicados; la página «Sobre nosotros» incluye `ProfilePage` enlazado a la entidad `Organization` verificable y `/correcciones/` se publica sin anuncios. Excluye solo el archivo de verificación de Search Console. El control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:indexation-audit`: comprueba los 32 artículos publicados, su HTML y canonical, su aparición única en el sitemap (32/32), las 44 URLs totales, `Allow: /`, el sitemap canónico y el `noindex` de búsqueda/404; no detecta problemas. El control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:navigation-audit`: comprueba en el HTML generado la navegación principal y móvil, el estado inicial del menú, la relación `aria-controls`/`id`, la sincronización del estado y el foco al abrir; no detecta incidencias ni IDs duplicados. El control quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:audit`: el control de procedencia visual distingue las ilustraciones originales acreditadas de los activos de terceros y bloquea estos últimos si faltan creador, licencia o página de licencia HTTPS.
- `pnpm content:luna-audit`: el brief de control carga solo IDs existentes del catálogo, conserva las puertas `publish: false`/`humanApproval: pending` y rechaza IDs inexistentes, fuentes duplicadas, ilustraciones sin etiqueta y enlaces externos en `internalLinks`; queda integrado en `.github/workflows/content-quality.yml`.
- `public/llms.txt`: enumera las 32 URLs de artículos con título y descripción acotada, además de las páginas de categoría y metodología, para facilitar descubrimiento por sistemas de IA sin sustituir la revisión editorial.
- `SOURCE_CATALOG.yml`: YAML válido con 459 entradas y cobertura de las 99 URLs citadas por los artículos; la biblioteca mantiene 130 oportunidades editoriales (incluye las 32 fuentes citadas por artículos y oportunidades derivadas de consultas reales de Search Console). La comprobación HTTP del 12/09 obtuvo 70 respuestas 200, 10 respuestas 203 y 17 respuestas 403 sobre las 97 URLs de aquella fecha; cuatro enlaces abiertos de texto completo se integraron después en tres artículos y pasaron los controles de renderizado y alcance. Además se abrieron tres registros alternativos en navegador normal para los clústeres de geodinamo, pulpo mimo y geosmina, y cuatro candidatos nuevos para elefantes y manta raya devolvieron 200/203. Las tandas de Luna añadieron once fuentes oficiales para SEO, medición, móvil, accesibilidad y AdSense, cinco controles institucionales para autoría, correcciones, conflictos y gobernanza editorial, doce fuentes primarias/institucionales para actualizar siete clústeres con impresiones observadas y 18 fuentes para cuatro actualizaciones prioritarias y dos guías nuevas; la última búsqueda dirigida investigó veinte referencias oficiales, añadió cinco URLs no duplicadas y dejó ocho oportunidades medibles para indexación, Discover, autoría, actualizaciones, móvil, anuncios, evidencia y enlazado interno. La ronda del 13/09 añadió 20 candidatas para gobernanza, distribución, News y medición de marca, junto con ocho oportunidades de colaboración/atribución; la revisión P0/P1 posterior incorporó nueve URLs no duplicadas para fuentes primarias e institucionales. El 14/09 se agregaron cinco guías oficiales de Bing/IndexNow y Google para el flujo de descubrimiento y experimentos CTR, tres referencias para consentimiento/medición responsable y doce referencias de Luna para autoría, correcciones, auditoría Bing, P75, Trends, tráfico y visibilidad publicitaria; todas permanecen candidatas hasta la comprobación editorial de la cita concreta. El detalle está en el [snapshot de acceso a fuentes](docs/editorial/SOURCE_ACCESS_SNAPSHOT_2026-09-12.md) y en la sección de fuentes abiertas de la [biblioteca de inspiración](docs/editorial/EDITORIAL_INSPIRATION_LIBRARY.md). Las fichas siguen siendo candidatas hasta que una persona abra y compruebe la fuente concreta; no se tratan como enlaces rotos solo por una limitación automatizada.
- La segunda búsqueda enfocada de Luna Max añadió 25 fuentes no duplicadas y una priorización de siete oportunidades ligadas a consultas observadas (`geosmina`, tiburón de Groenlandia, geodinamo, pulpo mimo, leopardo de las nieves, pangolín gigante y Catatumbo). La tanda siguiente añadió diez fuentes no duplicadas para axolote, cebras, tardígrados, ballena azul, narval y corales; la búsqueda del 12/09 añadió doce para mantas, elefantes, pangolines, peces linterna, géiseres, nubes mammatus, auroras y calamar gigante; esta revisión añadió catorce para ajolote, ballena azul, corales, tiburón de Groenlandia, pangolines, búho real, tardígrados y peces linterna; la verificación oficial añadió cinco controles de Google sobre IA, imágenes, snippets, títulos y preparación de AdSense; la ronda técnica añadió doce controles sobre SEO, accesibilidad, responsive, compresión, redirects, snippets, ads.txt y transparencia editorial; la segunda ronda añadió diez sobre ORCID, metadatos Crossref, procedencia PROV-O, anotaciones, correcciones, glosario, ClaimReview, límites de anuncios, HTML válido y errores de rastreo; y la nueva ronda añadió diez sobre AI features, fuentes preferidas, Discover, medición generativa, sistemas de ranking, integridad de investigación, citación de datos/software, DataCite, ROR y responsabilidad de autores. La ronda de clústeres añadió doce fuentes primarias/institucionales para actualizar esas siete URLs antes de considerar una página nueva. La búsqueda de brechas añadió veinte referencias oficiales (quince ya catalogadas y cinco URLs nuevas) y ocho oportunidades medibles para indexación, Discover, autoría, actualización, móvil y monetización. Se conservan como candidatos con alcance y límites; no se añadieron citas automáticas a artículos publicados.
- El pipeline histórico quedó aislado: se retiraron los seeds heredados con copy y autoría no verificados; `pipeline/generate_articles.py` ahora exige un brief JSON estructurado de Luna Max y solo genera borradores en `docs/editorial/drafts/`, mientras `pipeline/generate_images.py` deriva su manifiesto del frontmatter curado y solo genera activos fuera de `public/`. Ambos rechazan destinos publicados y colisiones.
- Se ejecutó el flujo con el brief de GBIF guardado en [`docs/editorial/drafts/gbif-sequence-search.json`](docs/editorial/drafts/gbif-sequence-search.json): el generador produjo [`docs/editorial/drafts/generated/gbif-sequence-search.md`](docs/editorial/drafts/generated/gbif-sequence-search.md) y confirmó que no modifica `src/content/articles` ni datos de AdSense.
- PageSpeed Insights público: la consulta móvil fue rechazada por cuota agotada; no se guardó ninguna métrica estimada como si fuera dato de usuarios reales.
- Producción muestreada: portada, artículos con referencias trazables, búsqueda, páginas legales, metodología, `robots.txt`, `ads.txt`, `llms.txt`, feed RSS, sitemap, las 96 imágenes (`jpg`, `svg` y `webp`), las tres tipografías locales, redirección `www` y beacon de Cloudflare Web Analytics inyectado por Pages. El despliegue de contenido verificado `67615aa7-b1bd-4321-b6af-ffad997c1df6`, generado desde el commit `0998c50`, terminó con build y deploy exitosos. El despliegue posterior `6774258b-2c27-4a78-b365-ec66fd4940a1`, generado desde `1349b67`, añadió la auditoría de navegación accesible y también terminó correctamente. El despliegue documental `c54af4da-4742-45d4-8948-1052dd31edf4`, generado desde `a1c1168`, terminó correctamente y refrescó el recibo de producción. El despliegue `a0c9fd8c-8a8f-48af-8118-e7adfbb7217e`, generado desde `4a49268`, incorporó el catálogo y plan de Luna y terminó correctamente. El despliegue `ff29a9d2-650c-45c6-ad8f-ed0bac9d5aa8`, generado desde `47da8cb`, incorporó la auditoría de indexación y también terminó correctamente. El despliegue `16aa935e-8612-4460-854b-dec2e40cb2d6`, generado desde `04077e8`, incorporó la primera ronda de investigación de autoridad y distribución y terminó correctamente. El despliegue `f9dca15e-329b-49aa-bd29-9b06b65f6a27`, generado desde `6aa030f`, registró la fecha del catálogo y el recibo de producción y terminó correctamente. El commit documental `e1d19c5` se desplegó después en `71d899f0-45ee-49f6-8d5f-32bf59f52e88` con build y deploy exitosos; los despliegues mantienen los alias `https://ecocuriosa.com` y `https://www.ecocuriosa.com`. La comprobación pública posterior devolvió 200 para la portada, `robots.txt`, `ads.txt`, `llms.txt`, `rss.xml`, el sitemap y el artículo de geodinamo; las sondas WAF devolvieron 403 y búsqueda/404 conservaron `noindex`.
- Tras purgar las 11 WebP antiguas de la caché de Cloudflare, la variante pública `campo-magnetico-geodinamo.webp` devuelve 1200×750, `image/webp`, HTTP 200 y `cf-cache-status: HIT`; una lectura Lighthouse móvil posterior dio 99/100 en rendimiento, 100 en accesibilidad, 100 en SEO, FCP 0,9 s, LCP 1,8 s, CLS 0 y TBT 70 ms. Sigue siendo una prueba de laboratorio, no un P75 de usuarios reales.
- La lectura Lighthouse móvil repetida después del ajuste de proporción de imagen dio 98/100 en rendimiento, 100 en accesibilidad, 81 en buenas prácticas y 100 en SEO; FCP 1,2 s, LCP 2,1 s, CLS 0 y TBT 140 ms. Las APIs obsoletas y recomendaciones de red/renderizado continúan siendo avisos de laboratorio; no se desactivó Cloudflare ni se interpreta esta lectura como P75.
- Pendiente de conexión externa: estado final de CMP en AdSense, aprobación de cuenta y creación de slots. Search Console ya tiene una primera instantánea, pero la cobertura de indexación está procesándose y no hay datos de Core Web Vitals. Cloudflare tiene una instantánea API agregada; la cuenta conserva tres configuraciones RUM antiguas que requieren revisión manual antes de cualquier limpieza. La regla WAF de rutas exactas quedó activa y verificada en producción sin interferir con las rutas válidas.

## Apéndice: rutas representativas

| URL | Tipo | Hallazgo |
|---|---|---|
| `/` | Portada | H1, descripción, WebSite/Organization y navegación; slots aún sin IDs |
| `/fauna-fascinante/` | Colección | 8 artículos, enlaces internos y schema CollectionPage |
| `/fauna-fascinante/leopardo-de-las-nieves-adaptaciones-frio-extremo/` | Artículo revisado | Article, BreadcrumbList, fuentes y fecha de revisión |
| `/metodologia-editorial/` | Confianza | Fuentes, límites, IA, imágenes y correcciones |
| `/politica-de-privacidad/` | Legal | Sin script AdSense después del ajuste |
| `/buscar/` | Utilidad | `noindex, follow`, fuera del sitemap |
| `/robots.txt` / `/ads.txt` | Infraestructura | 200 en producción; sitemap y publisher ID declarados |
