# Instantánea de Cloudflare — EcoCuriosa

**Fecha de lectura:** 20 de septiembre de 2026  
**Zona:** `ecocuriosa.com`  
**Fuente:** Cloudflare API autenticada y sondas HTTP públicas; no se guardan tokens ni credenciales.

## Estado de despliegue

- Proyecto Pages: `ecocuriosa`.
- Rama de producción: `main`.
- Último despliegue observado: entorno `production`, creado el 20/09/2026,
  asociado al commit `ab259ba` (`Polish editorial navigation and accessibility`);
  las etapas de build y deploy terminaron correctamente (deployment
  `c57c3771-df8b-407a-8f42-ee8d517c5fcf`).
- La portada, `robots.txt`, `sitemap.xml` y las rutas de artículos modificadas
  respondieron HTTP 200 después del despliegue.

**Seguimiento técnico posterior:** el commit `ae569cc` se publicó mediante el
deployment directo `238a14a4.ecocuriosa.pages.dev`; las sondas de portada,
categoría, artículo, `llms.txt`, `ads.txt` y sitemap devolvieron HTTP 200. El
deployment incluye el resumen `speakable` y los targets táctiles de 48 px.

**Seguimiento posterior:** el commit `85a3e93` (`Correct axolotl source scope
and review evidence`) se desplegó automáticamente en producción mediante
GitHub push. Cloudflare Pages reportó las etapas `build` y `deploy` como
`success` en el deployment `3b07e2ef-a274-4318-bf07-2293ffb8add6`; la ruta del
ajolote ya sirve el título corregido de PMC6669047 y el enlace institucional de
Gaceta UNAM. La comprobación pública posterior devolvió HTTP 200 y
`cf-cache-status: DYNAMIC`.

**Despliegue directo más reciente:** el commit `37726f9` (`Improve article
snippets links and source catalog`) se publicó en
`434afb51.ecocuriosa.pages.dev`; las sondas de portada, los cuatro artículos
con títulos actualizados, `llms.txt`, `ads.txt` y `sitemap-index.xml` devolvieron
HTTP 200. La portada mantiene el beacon de Web Analytics y 14 controles de
interacción con objetivo de 48 px. Este dato acredita entrega, no usuarios,
sesiones ni ingresos.

**Seguimiento de seguridad y accesibilidad:** el commit `622e803` (`Harden CSP
and expand E-E-A-T source controls`) se publicó en
`298cfa06.ecocuriosa.pages.dev`. La portada responde HTTP 200 con la cabecera
`Content-Security-Policy-Report-Only` y las rutas de contacto, correcciones,
metodología y perfil público también responden 200. La política está en modo de
observación: permite inventariar orígenes antes de activar CMP/AdSense sin
romper el tráfico actual.

**Control de accesibilidad y correcciones:** el commit `aea57ad` (`Add
accessible image and correction transparency checks`) se publicó en
`233cb012.ecocuriosa.pages.dev`. La ruta `/correcciones/` responde 200 y expone
los estados `Recibida`, `En evaluación`, `Corregida o aclarada`, `Sin cambio` y
`Retirada`; el auditor local comprobó 74 imágenes HTML con nombre accesible no
vacío y 0 incidencias. Esta prueba no equivale a una declaración WCAG completa.

## Web Analytics / RUM

Cloudflare devuelve una configuración Web Analytics activa para
`ecocuriosa.com`: instalación automática habilitada, ruleset activo y modo
`lite`. La configuración prueba que el beacon está instalado, pero no aporta
por sí sola una cifra de visitantes, sesiones, retención o Core Web Vitals.

La comprobación autenticada del 20/09 volvió a listar la entrada de la zona
`ecocuriosa.com` con `enabled: true` y, por separado, una entrada histórica de
host-regex que no se usa como sustituto de la configuración de la zona. No se
creó una segunda instalación ni se modificó ningún token.

No se conservaron identificadores de sitio ni tokens en este documento.

## Disponibilidad de métricas

- El endpoint REST histórico de Zone Analytics devuelve el error Cloudflare
  `1015` porque está retirado y fue reemplazado por GraphQL Analytics.
- El endpoint de pruebas Speed API no tiene páginas ni pruebas guardadas para
  esta zona.
- La lectura GraphQL de solo lectura para `httpRequests1dGroups` sí está
  disponible y se conserva separada en
  [`CLOUDFLARE_EDGE_SNAPSHOT_2026-09-20.md`](./CLOUDFLARE_EDGE_SNAPSHOT_2026-09-20.md):
  9.016 solicitudes y 80.612.260 bytes entre el 13 y el 19/09, con 365
  solicitudes en caché. Es edge delivery, no usuarios ni sesiones.
- Por lo tanto, esta lectura no permite afirmar un volumen actual de tráfico,
  países, caché, errores o CWV de usuarios reales. Las sondas HTTP y la
  configuración RUM se mantienen como evidencia técnica, y GraphQL aporta
  agregados de entrega, no como analítica de audiencia.

## Señales HTTP observadas

La portada respondió HTTP 200 con Cloudflare activo, HSTS, `nosniff`,
`referrer-policy`, una CSP base y una política adicional `CSP-Report-Only` para
inventariar orígenes antes de CMP/AdSense, `permissions-policy` restrictiva y
`cf-cache-status: DYNAMIC`. El HTML dinámico de Pages no se debe convertir en
una conclusión de tráfico: las métricas de audiencia requieren el panel de
Web Analytics o una consulta GraphQL autenticada compatible.

## Acciones derivadas

1. Mantener el beacon y revisar sus métricas en el panel después de reunir al
   menos 28 días de tráfico real.
2. No activar un nuevo ruleset ni borrar configuraciones antiguas sin una
   comparación de host, zona y fecha; la API lista configuraciones históricas
   de otros dominios de la misma cuenta.
3. Si se necesita una serie numérica de requests y caché, implementar una
   consulta GraphQL de solo lectura con el permiso Analytics Read y guardar
   únicamente agregados fechados.
4. Cruzar Cloudflare con Search Console y Analytics: requests de bots,
   impresiones y sesiones no son equivalentes y no deben presentarse como
   audiencia monetizable.
