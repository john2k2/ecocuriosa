# Instantánea de runtime en producción — 2026-09-20

## Alcance

- Dominio canónico: `https://ecocuriosa.com/`
- Commit publicado: `2bfe112` (`Update giant squid evidence and edge metrics`)
- Despliegue de Cloudflare Pages: `99c0c44a-d2c4-4b68-83e1-9737084b647c`
- Despliegue completo: estado `success`, rama `main`, commit exacto `2bfe112c1c15742150d07f8dee8e98de6bd01758`.
- Comprobación pública realizada el 20/09/2026.

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
