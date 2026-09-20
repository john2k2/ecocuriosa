# Lighthouse de producción — 2026-09-20

## Alcance y método

Se ejecutó Lighthouse CLI contra `https://ecocuriosa.com/` después del
despliegue `355af683` del commit `fbc143e`. Es una medición de laboratorio de
una sola ejecución, con Chrome headless y las categorías Performance,
Accessibility y SEO. No representa el P75 de usuarios reales ni reemplaza
CrUX, RUM o Search Console.

## Resultado público

| Señal | Lectura actual | Lectura anterior del mismo sitio | Interpretación |
| --- | ---: | ---: | --- |
| Performance | 93/100 | 87/100 | Mejora de laboratorio; repetir en varias ejecuciones antes de convertirla en tendencia |
| Accessibility | 100/100 | 100/100 | Sin regresión detectada |
| SEO | 100/100 | 100/100 | Sin regresión detectada |
| First Contentful Paint | 1,4 s | 2,2 s | Mejoró tras adelantar la fuente de texto |
| Largest Contentful Paint | 2,7 s | 3,2 s | Mejora; todavía conviene observar la variabilidad de red |
| Total Blocking Time | 130 ms | 110 ms | Variación pequeña de laboratorio |
| Cumulative Layout Shift | 0 | 0 | Sin desplazamiento detectable |
| Speed Index | 4,1 s | 4,7 s | Mejora moderada |

## Cambio validado

Se añadió un `preload` para `albert-sans-latin-v2.woff2`, además del preload
existente de Literata. La auditoría pasó de una estimación de 1.170 ms de
bloqueo por CSS en la primera lectura a 500 ms en la lectura posterior. El
recurso restante es la hoja CSS principal; no se aplicó una estrategia de
CSS asíncrono que pudiera introducir un destello sin estilos o una regresión
visual.

El desglose actual del LCP fue aproximadamente 263 ms de respuesta inicial y
2.118 ms de espera de renderizado del elemento textual principal. Por eso la
siguiente optimización, si se busca superar esta lectura, debe probar el
renderizado del hero y el CSS crítico, no eliminar imágenes ni desactivar
protecciones de Cloudflare.

## Fuentes metodológicas

- [Web Vitals de web.dev](https://web.dev/articles/vitals)
- [LCP de web.dev](https://web.dev/articles/optimize-lcp)
- [Render-blocking requests de Chrome DevTools](https://developer.chrome.com/docs/performance/insights/render-blocking)
