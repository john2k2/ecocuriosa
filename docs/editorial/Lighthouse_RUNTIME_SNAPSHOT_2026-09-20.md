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

## Repetición contra el despliegue actual

Se repitió Lighthouse CLI `13.5.0` contra `https://ecocuriosa.com/` después
del despliegue Cloudflare Pages `63c93bd4-6403-45dc-aa82-e8040afefb3e`, generado
desde el commit `1d1ada6`. Esta ejecución es una comprobación de laboratorio
independiente; no reemplaza el P75 de CrUX/RUM ni una medición de Search
Console.

| Señal | Lectura actual | Interpretación |
| --- | ---: | --- |
| Performance | **97/100** | Laboratorio fuerte; repetir en rutas y condiciones distintas antes de llamarlo tendencia |
| Accessibility | **100/100** | Sin auditorías Lighthouse fallidas en la portada |
| SEO | **100/100** | Sin auditorías Lighthouse fallidas en la portada |
| First Contentful Paint | 1,0 s | Buena lectura de laboratorio |
| Largest Contentful Paint | 2,2 s | Dentro del umbral de laboratorio recomendado; confirmar en campo |
| Total Blocking Time | 140 ms | Por debajo del umbral de laboratorio usado como proxy de interactividad |
| Cumulative Layout Shift | 0 | Sin desplazamiento detectado |
| Speed Index | 1,0 s | Buena lectura de laboratorio |
| Respuesta inicial | 45 ms | Sin latencia de servidor relevante en esta ejecución |

### Hallazgos que sí justifican seguimiento

- La hoja CSS principal (`7,8 KiB` transferidos) quedó como recurso
  render-blocking, con un ahorro estimado de aproximadamente `140 ms`. No se
  convierte todavía en cambio: hay que comparar una variante con CSS crítico
  inline contra la versión actual y conservar la que no introduzca FOUC ni una
  regresión visual.
- La cadena más larga observada fue documento → CSS → fuente cursiva, de unos
  `224 ms`. Las fuentes principales ya tienen preload; la siguiente prueba debe
  medir si la variante cursiva realmente aparece en el primer viewport antes de
  añadir otra pista de precarga.
- El trace observó trabajo de scripts de Cloudflare (`challenge-platform`) y
  del beacon de Web Analytics. Son dependencias externas: no se deben eliminar
  sin comprobar la política de seguridad, bot protection y consentimiento.
- La entrega de imágenes no mostró ahorro estimado en esta ejecución. Las
  variantes WebP siguen cacheadas y no hay justificación para eliminar activos
  originales.

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

## Repetición independiente posterior — 20/09/2026

Se volvió a ejecutar Lighthouse CLI `13.5.0` contra la portada pública con
emulación móvil después del despliegue que contiene los paquetes de contraste.
La ejecución terminó sin cambios de código del sitio respecto de la plantilla;
su finalidad es medir variabilidad, no declarar una regresión.

| Señal | Lectura | Interpretación |
| --- | ---: | --- |
| Performance | **93/100** | Variación de laboratorio frente a 97; no usar una sola corrida como tendencia |
| Accessibility | **100/100** | Sin auditorías fallidas en la portada |
| SEO | **100/100** | Sin auditorías fallidas en la portada |
| FCP | 1,2 s | Laboratorio |
| LCP | 2,6 s | Repetir en categoría y artículo; confirmar con P75 de campo |
| TBT | 160 ms | Proxy de laboratorio, no INP real |
| CLS | 0 | Sin desplazamiento detectado |
| Speed Index | 4,1 s | Sensible a red/CPU del runner |
| Respuesta inicial | 60 ms | Lectura de laboratorio |

La diferencia 97→93 con Accessibility y SEO estables refuerza la decisión de
no aplicar un parche especulativo de CSS crítico. La puerta sigue siendo la
mediana de varias ejecuciones por plantilla y, cuando sea elegible, el P75 de
usuarios reales.

## Fuentes metodológicas

- [Web Vitals de web.dev](https://web.dev/articles/vitals)
- [LCP de web.dev](https://web.dev/articles/optimize-lcp)
- [Render-blocking requests de Chrome DevTools](https://developer.chrome.com/docs/performance/insights/render-blocking)
