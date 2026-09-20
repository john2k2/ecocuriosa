# Matriz Lighthouse por plantilla — 2026-09-20

## Alcance y método

Medición de laboratorio ejecutada contra producción después del despliegue del
commit `e72b94c` (`Improve muted text contrast`). Se usó Lighthouse CLI 13.5.0,
form factor móvil, emulación móvil y throttling simulado. Cada fila es una
ejecución independiente; no es un P75 de usuarios reales ni una garantía de
Core Web Vitals de campo.

## Resultados observados

| Plantilla | URL comprobada | Performance | Accessibility | SEO | FCP | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Portada | `/` | 97 | 100 | 100 | 1,0 s | 2,3 s | 110 ms | 0 |
| Categoría | `/especies-marinas/` | 95 | 100 | 100 | 1,0 s | 2,7 s | 120 ms | 0 |
| Artículo | `/especies-marinas/ballena-azul-fisiologia-gigante-cardiovascular/` | 93 | 100 | 100 | 1,4 s | 2,8 s | 120 ms | 0 |
| Metodología | `/metodologia-editorial/` | 94 | 100 | 100 | 1,0 s | 2,9 s | 130 ms | 0 |

Los resultados anteriores son buenos controles de regresión, pero no deben
promediarse como si fueran tráfico real. Lighthouse identificó avisos de
diagnóstico sobre JavaScript legado, cadena de dependencias y render-blocking;
la integración de medición de Cloudflare y la variación de red forman parte del
entorno actual. No se elimina Web Analytics ni se añaden scripts de audiencia
sin revisar consentimiento, privacidad y propósito.

## Corrección aplicada en esta ronda

El pie de imagen distingue ahora `Ilustración editorial`, `Imagen con licencia`
o `Imagen`. Además, el color de metadatos de fuentes y créditos cumple la
relación de contraste WCAG AA observada por Lighthouse. La auditoría de paridad
HTML exige que un artículo muestre la etiqueta de ilustración y rechaza la
antigua etiqueta ambigua `Lámina de Observación`.

## Próxima puerta de campo

Cuando exista volumen suficiente, sustituir esta fotografía de laboratorio por
P75 de LCP, INP y CLS segmentado por plantilla, dispositivo y país. Después de
activar anuncios reales, repetir exactamente estas cuatro rutas y bloquear la
activación si la publicidad empeora CLS o desplaza la respuesta principal.
