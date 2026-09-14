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
