# Instantánea de runtime en producción — 2026-09-20

## Alcance

- Dominio canónico: `https://ecocuriosa.com/`
- Snapshot inicial: commit `2bfe112` (`Update giant squid evidence and edge metrics`),
  despliegue `99c0c44a-d2c4-4b68-83e1-9737084b647c`.
- Seguimiento final: commit `e9147a1` (`Record post-deploy Jev reevaluation`),
  despliegue Cloudflare Pages `cbb495a1-87b2-4fad-85ad-197c34fc0951`, rama
  `main`, estado `success`, commit exacto
  `e9147a1db5802e43ca24d1dff2377927ad3b9640`.
- Actualización documental más reciente: commit `58941be` (`Record final Jev
  scoring pass`), despliegue Cloudflare Pages
  `726c6594-2dcc-477f-8df9-b9e7dd8c77c8`, rama `main`, estado `success`, commit
  exacto `58941be3dcd60a386f801e6b94e3b10f19ed5948`.
- Estado público posterior a la iteración de diseño: commit `ab259ba`
  (`Polish editorial navigation and accessibility`), despliegue Cloudflare
  Pages `c57c3771-df8b-407a-8f42-ee8d517c5fcf`, rama `main`, estado `success`,
  commit exacto `ab259ba19a13d11f61423d0915aab20f9bf1def9`.
- Comprobación pública de ambos estados realizada el 20/09/2026; la última
  comprobación se hizo después de que el despliegue documental más reciente
  terminara.

## Rutas públicas

El sitemap de contenido `/sitemap-0.xml` declara **44 URL** y una comprobación
HTTP siguió cada `loc`: **44/44 devolvieron 200**. También se comprobó 200 para
la portada, el artículo actualizado del calamar gigante, `robots.txt`,
`ads.txt` y `sitemap.xml`. Esto demuestra disponibilidad puntual, no indexación,
tráfico humano, Core Web Vitals de campo ni aprobación de AdSense.

## Contenido actualizado

La ruta del calamar gigante devuelve el bloque nuevo sobre la hipótesis de
transferencia espermatofórica y conserva los dos enlaces de evidencia abiertos:
microPublication Biology y PubMed. El artículo no afirma que se haya observado
una cópula completa ni marca una revisión humana que no se haya realizado.

## Controles de seguridad

Las rutas de escaneo que no pertenecen a Astro permanecen bloqueadas por el
ruleset de Cloudflare:

| Ruta | Estado |
| --- | ---: |
| `/wp-admin/install.php` | 403 |
| `/wp-login.php` | 403 |
| `/xmlrpc.php` | 403 |
| `/.env` | 403 |
| `/.env.live` | 403 |

La portada entrega `Strict-Transport-Security`, `Content-Security-Policy`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy` y `Permissions-Policy`.

## Caché de activos

La WebP del artículo del calamar respondió `200`, `content-type: image/webp`,
`Cache-Control: public, max-age=2592000` y `cf-cache-status: HIT`. HTML,
consentimiento y anuncios siguen fuera de la regla específica de caché del RSS.

## Límites de la medición

Esta es una fotografía puntual del runtime. No sustituye el P75 de CrUX/RUM,
la inspección de cobertura de Search Console ni los informes de AdSense.
