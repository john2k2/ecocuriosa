# Instantánea de Cloudflare Edge Analytics — 2026-09-20

## Alcance

Consulta autenticada de `httpRequests1dGroups` para la zona `ecocuriosa.com`,
del **13 al 19 de septiembre de 2026**. Se excluye el 20/09 porque el día aún
está en curso. `requests` incluye bots, redirecciones, recursos y tráfico
humano; esta tabla no equivale a usuarios, sesiones, visitas orgánicas,
ingresos ni RPM.

| Fecha | Solicitudes | Bytes | Solicitudes en caché | Bytes en caché |
| --- | ---: | ---: | ---: | ---: |
| 13/09 | 1.320 | 17.185.761 | 164 | 4.037.034 |
| 14/09 | 1.859 | 20.927.545 | 118 | 2.491.535 |
| 15/09 | 1.358 | 11.603.588 | 22 | 370.508 |
| 16/09 | 1.354 | 9.719.253 | 47 | 989.469 |
| 17/09 | 952 | 6.841.574 | 0 | 23.018 |
| 18/09 | 515 | 4.721.221 | 0 | 15.399 |
| 19/09 | 1.658 | 9.613.318 | 14 | 345.543 |
| **Total observado** | **9.016** | **80.612.260** | **365 (4,0 %)** | **8.272.506 (10,3 %)** |

## Lectura y decisión

- La ventana cerrada registra 9.016 solicitudes y 80,6 MB de bytes; no se
  interpreta como 9.016 personas.
- La proporción de solicitudes en caché es 4,0 % y la de bytes 10,3 %. La
  variación diaria no basta para cambiar la política de caché: primero hay que
  separar HTML, imágenes, redirecciones, bots y recursos estáticos por ruta.
- No se modifica la caché de HTML, anuncios ni imágenes con esta instantánea.
  La regla segura existente continúa limitada a `/rss.xml`.
- Para medir audiencia real hay que combinar Web Analytics/RUM, Search Console
  y, solo tras la aprobación, AdSense. Cloudflare Edge sirve para entrega,
  disponibilidad, errores y coste de transferencia.

La consulta usa la API GraphQL oficial de Analytics de Cloudflare
([documentación](https://developers.cloudflare.com/analytics/graphql-api/)) y
conserva la misma zona y dimensiones que la lectura del 14/09 para permitir
comparación, aunque las ventanas no tienen el mismo tamaño.
