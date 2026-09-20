# Instantánea de Cloudflare Edge Analytics — 2026-09-14

## Alcance

Consulta autenticada de `httpRequests1dGroups` para la zona
`ecocuriosa.com`, del **8 al 14 de septiembre de 2026**. El 14/09 estaba
incompleto al momento de la lectura. `requests` incluye bots, redirecciones,
recursos y tráfico humano; esta tabla no equivale a usuarios, sesiones,
visitas orgánicas, ingresos ni RPM.

| Fecha | Solicitudes | Bytes | Solicitudes en caché | Bytes en caché |
| --- | ---: | ---: | ---: | ---: |
| 08/09 | 1.506 | 24.387.260 | 60 | 3.305.235 |
| 09/09 | 2.554 | 19.155.142 | 44 | 2.162.370 |
| 10/09 | 2.108 | 19.759.218 | 71 | 2.662.824 |
| 11/09 | 794 | 10.183.869 | 31 | 1.571.454 |
| 12/09 | 3.052 | 71.492.771 | 1.615 | 39.544.214 |
| 13/09 | 1.320 | 17.185.761 | 164 | 4.037.034 |
| 14/09* | 1.691 | 19.302.495 | 98 | 1.921.434 |
| **Total observado** | **13.025** | **181.466.516** | **2.083 (16,0 %)** | **55.204.565 (30,4 %)** |

\* Día en curso/incompleto al momento de la consulta autenticada. La lectura se refrescó después de la primera captura del día; no debe compararse como cierre definitivo hasta que transcurran las 24 horas.

## Lectura y decisión

- El porcentaje de solicitudes servidas desde caché sube frente a la
  instantánea anterior, pero el cambio está dominado por el pico del 12/09 y
  no demuestra mejora de audiencia.
- No se cambia la caché de HTML, anuncios ni imágenes con esta tabla. La regla
  segura existente continúa limitada a `/rss.xml`.
- Para saber cuántas personas leen, hay que separar Web Analytics/RUM de edge
  requests y contrastarlo con Search Console y, después de la aprobación, con
  AdSense.
- La próxima lectura comparable debe cerrar primero el 14/09 y conservar la
  misma zona, dimensiones y ventana.
