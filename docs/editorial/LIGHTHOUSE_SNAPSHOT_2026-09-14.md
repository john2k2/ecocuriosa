# Lighthouse de producción — 14/09/2026

## Alcance

- URL: `https://ecocuriosa.com/`
- Herramienta: Lighthouse CLI 13.4.1, una ejecución, salida JSON
- Entorno: emulación móvil (412×823, DPR 1.75), red simulada 1,638 Kbps,
  latencia 150 ms y CPU ×4
- Fecha de captura: 14/09/2026 17:43:47 UTC
- Navegador de captura: Headless Chrome 152

## Resultado

| Categoría | Puntuación | Métrica principal |
| --- | ---: | --- |
| Rendimiento | 93/100 | FCP 1,7 s · LCP 2,8 s · TBT 140 ms · CLS 0 · Speed Index 3,2 s |
| Accesibilidad | 100/100 | Sin auditorías fallidas |
| Buenas prácticas | 81/100 | Avisos de APIs obsoletas en JavaScript Detections de Cloudflare |
| SEO | 100/100 | Sin auditorías fallidas |

## Oportunidades detectadas

1. Las tarjetas descargan una WebP de 1200 px aunque en móvil se muestran a
   unos 378 px; una estrategia `srcset`/`sizes` podría reducir bytes. El hero
   y la calidad visual deben comprobarse antes de sustituir activos.
2. La hoja CSS principal aparece como render-blocking (estimación sintética de
   840 ms); no se debe inlinear o diferir sin revisar el impacto visual y de
   accesibilidad.
3. Lighthouse atribuye avisos de caché, JavaScript heredado y APIs obsoletas a
   scripts gestionados por Cloudflare (`/cdn-cgi/` y
   `static.cloudflareinsights.com`), no al código editorial del sitio.

## Interpretación y siguiente medición

Esta es una prueba de laboratorio, no un P75 de usuarios reales. No demuestra
aprobación de AdSense, aumento de tráfico ni ingresos, y no reemplaza CrUX,
Search Console o Web Analytics. No se eliminaron imágenes ni se desactivó
ninguna protección de Cloudflare. Repetir con y sin anuncios después de que
AdSense habilite los slots y comparar contra datos de campo; cualquier cambio
de imágenes debe conservar `alt`, proporciones, créditos y el sitemap de
imágenes.

## Seguimiento después de `srcset` responsive

El mismo 14/09/2026, después de publicar variantes WebP de 400/800 px y
conectarlas mediante `srcset`/`sizes`, se repitió una ejecución pública con la
misma emulación móvil:

| Categoría | Puntuación | Métrica principal |
| --- | ---: | --- |
| Rendimiento | 99/100 | FCP 1,0 s · LCP 1,7 s · TBT 100 ms · CLS 0 · Speed Index 1,7 s |
| Accesibilidad | 100/100 | Sin auditorías fallidas |
| Buenas prácticas | 81/100 | Tres avisos de APIs obsoletas en scripts gestionados de Cloudflare |
| SEO | 100/100 | Sin auditorías fallidas |

La red descargó las variantes de 800 px para las tarjetas visibles y la
auditoría de entrega de imágenes no señaló bytes desperdiciados. La mejora
frente a la primera ejecución es una comparación sintética de una sola muestra;
no prueba causalidad ni sustituye CrUX/RUM. Los originales de 1200 px y SVG
siguen en el repositorio y en el sitemap.
