# Instantánea de runtime en producción — 2026-09-14

## Alcance

- Dominio canónico: `https://ecocuriosa.com/`
- Commit publicado: `e01be83` (`Refine source evidence catalog and action plan`)
- Despliegue de Cloudflare Pages: `52e6ed15-79cb-458e-a857-4ce9fd3a0604`
- Comprobación realizada desde Santiago de Chile el 14/09/2026.

## Rutas públicas

Se extrajeron las 44 URLs del sitemap `/sitemap-0.xml` y se siguió cada URL
respetando sus redirecciones. El resultado fue **44/44 respuestas HTTP 200**.
Esto demuestra disponibilidad puntual y no garantiza indexación, tráfico humano,
Core Web Vitals de campo ni aprobación de AdSense.

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
`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`,
`Referrer-Policy` y `Permissions-Policy`.

## Caché de activos

- CSS con hash de Astro: `Cache-Control: public, max-age=31536000, immutable`.
- WebP responsive: `Cache-Control: public, max-age=2592000`; la variante de 800 px
  comprobada respondió `200` y `cf-cache-status: HIT`.
- HTML: `Cache-Control: public, max-age=0, must-revalidate`, para no dejar
  obsoletas páginas que puedan incorporar consentimiento o anuncios.

## Límites de la medición

Es una fotografía puntual del runtime. No sustituye el P75 de CrUX/RUM, la
inspección de cobertura de Search Console ni los informes de AdSense. CrUX
requiere una identidad o API key para consultar datos de campo; no se creó una
credencial nueva para esta comprobación.
