# GEO Audit Report: EcoCuriosa

**Audit date:** 12 de septiembre de 2026  
**URL:** https://ecocuriosa.com  
**Tipo de sitio:** Publisher / enciclopedia editorial de divulgación científica  
**Páginas analizadas:** 45 rutas estáticas construidas; 43 indexables en el sitemap y 2 `noindex` (búsqueda y 404)

> Este GEO Score es una línea base operativa, no una predicción de posiciones ni una aprobación de AdSense. Las categorías que necesitan datos de terceros se puntúan de forma conservadora porque las menciones de marca y los Core Web Vitals de campo siguen sin conexión; ahora se incorporaron instantáneas autenticadas de Search Console y Cloudflare.

El plan ejecutable con responsables, umbrales, contrato de Luna Max y criterios de detención está en [`docs/EDITORIAL_GROWTH_SCORECARD.md`](docs/EDITORIAL_GROWTH_SCORECARD.md) y el runbook operativo en [`docs/editorial/LUNA_MAX_AUTOMATION_RUNBOOK.md`](docs/editorial/LUNA_MAX_AUTOMATION_RUNBOOK.md).

## Resumen ejecutivo

EcoCuriosa tiene una base técnica sólida: HTML generado en servidor, navegación clara, canonicales, sitemap, `robots.txt`, `llms.txt`, JSON-LD y HTTPS funcionan en producción. El principal riesgo no es la plantilla sino la confianza editorial: 32 artículos registran al menos dos referencias HTTPS en el frontmatter, pero solo 1 de 32 tiene una revisión humana registrada. Tras la corrección textual preliminar, el auditor no detecta advertencias heurísticas; esa señal no sustituye abrir cada fuente y comprobar su correspondencia con la afirmación.

La auditoría visual también detectó activos que no correspondían con su artículo (por ejemplo, un tigre en la ficha del axolote). Se reemplazaron 20 referencias problemáticas por ilustraciones SVG originales del proyecto, se generó una ilustración correcta para el axolote y se registró crédito explícito en las 32 fichas. Las 11 referencias raster heredadas sin crédito también se sustituyeron por ilustraciones SVG originales; las 32 fichas usan ahora ilustraciones con procedencia editorial explícita. Los 32 JPG originales se conservaron además como respaldo, sin activarlos como fotografía documental hasta verificar derechos y correspondencia.

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
| E-E-A-T / calidad editorial | 44/100 | 75/100 antes de escalar | 32 revisiones humanas reales, autoría/perfil verificable, fuentes específicas, correcciones trazables y derechos de imagen documentados |

El cuello de botella para acercarse a estas metas es E-E-A-T, no agregar más volumen. Las políticas de Google recomiendan contenido original y centrado en personas, y las políticas de Publisher restringen páginas copiadas, reescritas o generadas sin revisión/curación humana.

## Problemas críticos

No se encontró un bloqueo crítico confirmado. El sitio devuelve HTTP 200 en las rutas clave, `www` redirige al dominio canónico, los rastreadores no están bloqueados y el build no tiene errores.

## Alta prioridad

1. **Cerrar la revisión editorial antes de escalar.** `pnpm content:audit` registra 31 artículos sin `reviewedDate`/`reviewedBy`; el auditor no detecta advertencias heurísticas después de la corrección preliminar, pero eso no reemplaza la lectura humana. Abrir la cola en [`docs/editorial/CONTENT_REVIEW_QUEUE.md`](docs/editorial/CONTENT_REVIEW_QUEUE.md), comprobar cada afirmación cuantitativa y rellenar la fecha solo después de una revisión real.
2. **Completar la configuración de privacidad de AdSense.** En AdSense hay que confirmar Privacy & messaging, seleccionar la CMP de Google de tres opciones, enlazar `/politica-de-privacidad/` y `/politica-de-cookies/` y probar el flujo desde una ubicación EEE/Reino Unido/Suiza. El código de anuncios ya no se carga en las páginas de política.
3. **Completar el perfil de pagos solo con datos reales del titular.** El nombre legal, país, dirección postal, información fiscal y beneficiario deben coincidir con la cuenta y poder verificarse. Esta operación es manual y no debe pasar por el repositorio ni por Luna; consultar [perfil de pagos](https://support.google.com/adsense/answer/7363450?hl=es), [dirección válida](https://support.google.com/adsense/answer/13863682?hl=es) y [PIN](https://support.google.com/adsense/answer/157667?hl=es). Completarlo no garantiza aprobación editorial ni ingresos.
4. **Configurar los bloques publicitarios después de la aprobación.** El cliente `ca-pub-4559843439616138` está en el HTML, pero los cinco `PUBLIC_ADSENSE_SLOT_*` están vacíos; por eso hoy se renderizan placeholders ocultos y no unidades de anuncio. No inventar IDs: copiarlos desde AdSense y redeplegar.
5. **Usar la medición sin sobreinterpretarla.** Search Console ya está conectado y muestra una primera señal de 112 impresiones, 0 clics, CTR 0 % y posición media 14 en los últimos 3 meses; el volumen es todavía demasiado pequeño para prometer crecimiento. Cloudflare aporta señales de entrega y experiencia, pero no sustituye Search Console, Analytics ni RPM.
6. **Reducir ruido de escaneo sin tocar contenido.** En la misma ventana aparecieron 337 solicitudes a `/wp-admin/install.php` y numerosos `wp-includes`, `xmlrpc.php` y `/.env.live`, todos inexistentes en este sitio Astro. La cuenta/plan de Cloudflare respondió que permite 0 reglasets WAF personalizados por API, por lo que no se forzó una regla que pudiera dejar una configuración incompleta; el ruleset administrado gratuito sigue activo. Si el panel habilita una Custom Rule, el candidato seguro es bloquear únicamente esas rutas inexistentes.

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

### Línea base de Google Search Console — 12 de septiembre de 2026

La propiedad autenticada `https://ecocuriosa.com/` ya está disponible. En el informe de rendimiento web, con ventana de 3 meses y última actualización indicada como hace 5 horas, aparecen 112 impresiones, 0 clics, CTR medio de 0 % y posición media 14. Las consultas con más impresiones fueron `geodinamo` (11), `pulpo mimo` (8), `geodinamo terrestre` (2), `architeuthis dux` (2) y `relampago de catatumbo` (2). La pestaña de países concentra impresiones en México (36), España (24), Chile (8), Estados Unidos (6) y Colombia (6); los dispositivos se reparten entre móvil (58) y ordenador (54).

Search Console registra 32 páginas en la tabla de páginas; algunas impresiones todavía apuntan a variantes sin barra final, que deben seguir redirigiendo una sola vez al canonical con barra. Los dos sitemaps enviados (`/sitemap-0.xml` y `/sitemap-index.xml`) figuran como **Correcto** y con 43 páginas descubiertas. El informe de indexación aún indica que está procesando datos; no se debe traducir “43 descubiertas” en “43 indexadas”. HTTPS muestra 29 válidas y 0 no válidas; Breadcrumbs, 16 válidas y 0 no válidas; Core Web Vitals todavía no tiene datos.

La configuración RUM asociada a Pages comenzó el 7 de septiembre y es la única que coincide con los tres hosts de producción. Se observan además tres configuraciones antiguas de auto-instalación; no se borraron porque la producción entrega un solo beacon y eliminarlas sería una acción destructiva sin beneficio demostrado. Conviene revisarlas en el panel cuando haya tiempo, manteniendo una sola configuración canónica.

## Prioridad media

- Añadir un perfil de autor real y verificable cuando el responsable autorice nombre, experiencia y enlace; mientras tanto, mantener la firma colectiva y no inventar credenciales.
- Mantener la bitácora de procedencia de las 32 ilustraciones y no reutilizar imágenes encontradas sin permiso. Si se incorpora una fotografía, conservar URL, licencia, autor, fecha de descarga y hash.
- Revisar periódicamente que la política de privacidad describa exactamente las herramientas activas: actualmente documenta Cloudflare Web Analytics sin cookies y las cookies publicitarias de AdSense; no hay Google Analytics instalado en el código.
- Usar datos de Search Console para crear cuatro guías pilar y mejorar páginas con muchas impresiones/CTR bajo antes de crear nuevas variantes.
- Considerar FAQ estructurada solo cuando las preguntas y respuestas estén verificadas y visibles; no añadir Schema por volumen.

## Prioridad baja

- Crear tarjetas sociales específicas para las guías pilar y un canal de distribución sostenible (newsletter, YouTube o redes) después de estabilizar el flujo editorial.
- Añadir RSS o un feed editorial si se decide mantenerlo actualizado.
- Revisar periódicamente el contraste visual, navegación de teclado y experiencia móvil tras activar anuncios.

## Análisis por categoría

### Citabilidad para IA — 72/100

Los artículos tienen respuesta rápida, encabezados, tablas/FAQ en el cuerpo, enlaces internos y referencias visibles. La estructura es fácil de extraer y `llms.txt` enlaza la metodología. Para subir la puntuación: escribir respuestas de 40–80 palabras con hecho, alcance y límite; conectar cada afirmación importante con una fuente concreta; y añadir análisis propio en vez de resumir varias fuentes.

### Autoridad de marca — 20/100

La entidad EcoCuriosa está definida en `Organization` y tiene una misión clara, pero no se midieron menciones independientes, perfiles sociales, Wikipedia, Reddit, YouTube ni enlaces editoriales. El objetivo no es fabricar señales: es publicar piezas originales, conseguir colaboraciones atribuibles y mantener una identidad de autor verificable.

### Contenido y E-E-A-T — 56/100

 Hay 32 artículos, 32 imágenes referenciadas, 32 fichas con al menos dos entradas de fuente y cierres no repetidos. Estas son referencias registradas, no verificaciones editoriales automáticas. La deuda es la revisión humana: 1/32 está registrada. El auditor local detecta 0 advertencias heurísticas tras la corrección preliminar, pero la cola editorial sigue siendo la puerta de salida antes de automatizar más contenido.

### GEO técnico — 92/100

La entrega de producción verificada incluye HTML SSR, canonicales, Open Graph/Twitter, sitemap, `robots.txt` permisivo, `llms.txt`, HSTS, `nosniff`, referrer policy, CSP base, caché de assets y redirección `www`→apex. `astro check` terminó con 0 errores/avisos/sugerencias y el build genera 45 páginas. Falta medir Core Web Vitals con usuarios reales después de activar anuncios.

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

## Plan de 30 días

### Semana 1 — medición y cumplimiento

- [x] Enviar/confirmar `https://ecocuriosa.com/sitemap-index.xml` en Search Console; figura como correcto con 43 páginas descubiertas.
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
- [ ] Crear una guía pilar por clúster y enlazarla con 3–5 artículos relacionados.
- [ ] Mejorar títulos/extractos de páginas con impresiones altas y CTR bajo; no cambiar fechas sin cambio sustancial.

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
- `pnpm build`: 45 páginas estáticas generadas correctamente.
- `pnpm content:link-audit`: 46 documentos HTML y 110 enlaces/recursos internos comprobados (incluye `srcset` de las imágenes); 0 rutas faltantes y 0 rutas HTML sin barra final. El control de canonicals quedó integrado en `.github/workflows/content-quality.yml`.
- `pnpm content:llms-audit`: 32/32 artículos sincronizados con `public/llms.txt`, 0 entradas faltantes/desactualizadas, 0 URLs no canónicas y 0 duplicadas; el control quedó integrado en `.github/workflows/content-quality.yml`.
- `public/llms.txt`: enumera las 32 URLs de artículos con título y descripción acotada, además de las páginas de categoría y metodología, para facilitar descubrimiento por sistemas de IA sin sustituir la revisión editorial.
- `SOURCE_CATALOG.yml`: YAML válido con 227 entradas y cobertura de las 83 URLs citadas por los artículos; la biblioteca mantiene 64 oportunidades editoriales (incluye las 32 fuentes citadas por artículos y nueve oportunidades derivadas de consultas reales de Search Console). La comprobación HTTP inicial de las 30 entradas originales obtuvo 26 respuestas 200; USGS e IUCN limitan clientes automatizados con 403 y el PDF de Creative Commons requiere abrirse en navegador. Las fichas siguen siendo candidatas hasta que una persona abra y compruebe la fuente concreta; no se tratan como enlaces rotos solo por una limitación automatizada.
- PageSpeed Insights público: la consulta móvil fue rechazada por cuota agotada; no se guardó ninguna métrica estimada como si fuera dato de usuarios reales.
- Producción muestreada: portada, artículo, búsqueda, páginas legales, metodología, `robots.txt`, `ads.txt`, sitemap, redirección `www` y beacon de Cloudflare Web Analytics inyectado por Pages.
- Pendiente de conexión externa: estado final de CMP en AdSense, aprobación de cuenta y creación de slots. Search Console ya tiene una primera instantánea, pero la cobertura de indexación está procesándose y no hay datos de Core Web Vitals. Cloudflare tiene una instantánea API agregada; la cuenta conserva tres configuraciones RUM antiguas que requieren revisión manual antes de cualquier limpieza.

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
