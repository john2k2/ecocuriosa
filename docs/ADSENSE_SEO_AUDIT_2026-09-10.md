# Auditoría de preparación para AdSense, SEO y GEO — EcoCuriosa

**Fecha:** 10 de septiembre de 2026  
**Sitio:** https://ecocuriosa.com  
**Alcance:** portada, cuatro categorías, artículos de muestra, páginas legales, rastreabilidad, metadatos, experiencia y monetización.

## Veredicto

La infraestructura y la experiencia de lectura son buenas: Astro entrega HTML indexable, la navegación es clara, el diseño es profesional y el sitio ya aparece en resultados de Google. No se identificó un bloqueo técnico grave de AdSense. La brecha que impide considerarlo listo al máximo es editorial: hay 32 artículos, pero el control local solo registra fuentes verificables y revisión editorial en 1 de ellos.

No se debe aumentar el volumen de publicaciones ni la densidad de anuncios hasta resolver esa brecha.

| Dimensión | Resultado |
| --- | --- |
| Técnico SEO/GEO | 87/100 |
| Editorial / E-E-A-T | 44/100 |
| Riesgo actual de AdSense | Medio-alto por evidencia editorial, no por diseño ni infraestructura |

## Confirmado

- HTTPS, redirección de `www` al dominio canónico, CSP, HSTS y cabeceras de seguridad: correctos.
- `robots.txt` permite rastreo y declara el sitemap; `llms.txt`, canonicales, Open Graph, JSON-LD `Article`, `BreadcrumbList`, `Organization` y `WebSite` están presentes.
- El HTML se sirve desde el servidor; el contenido no depende de JavaScript para que Google lo lea.
- La portada responde rápido y transmite una identidad editorial diferenciada.
- Existen páginas de privacidad, cookies, aviso legal, contacto y sobre el proyecto.
- Las imágenes están presentes en los 32 artículos.

## Cambios aplicados en esta auditoría

1. Se excluyó `/buscar/` del sitemap y se marcó `noindex, follow`: evita enviar a Google una URL de resultados internos.
2. Se mantuvo canonical incluso para URLs `noindex` y se corrigieron las etiquetas Twitter/X a `name`.
3. Se añadió `ads.txt` con el identificador del editor confirmado.
4. Se reservó altura para slots de AdSense reales para reducir CLS cuando se activen. No se renderizan huecos mientras no existan slots configurados.

## Prioridad máxima: calidad editorial

El informe `pnpm content:audit -- --strict` falla de forma esperada: 31 de 32 artículos no tienen `sources`, `reviewedDate` y `reviewedBy` en frontmatter. Además, muchos comparten una estructura y conclusión genérica. Esto puede parecer contenido escalado y no demuestra la trazabilidad prometida en la página Sobre Nosotros.

### Estándar de publicación desde ahora

- Cada artículo debe tener 3–6 fuentes directas y enlazadas: DOI/artículo primario, organismos científicos, universidades o bases de datos reputadas.
- Cada cifra, afirmación médica, de conservación o que pueda cambiar debe tener fuente específica o lenguaje prudente.
- Debe incluir responsable editorial y fecha de revisión real.
- El cierre debe ser específico al tema; eliminar conclusiones repetidas.
- Usar IA solo para borrador, extracción de candidatos o consistencia. La publicación exige verificación humana y enlaces reales.

Orden de revisión: contenidos de biología/regeneración y conservación, luego datos físicos con cifras, y después el resto. No publicar más de 1–2 artículos revisados por semana hasta tener un proceso fiable.

## Próximas cuatro semanas

### Semana 1 — confianza y exactitud

- Revisar y documentar los primeros 8–10 artículos de mayor potencial orgánico.
- Crear páginas transparentes de metodología, correcciones y perfil del responsable editorial real cuando exista.
- Verificar que privacidad, cookies y aviso legal describan exactamente AdSense, CMP y analítica activos.

### Semana 2 — arquitectura de búsqueda

- Crear una guía pilar por cada clúster: regeneración animal, luz y atmósfera, biodiversidad marina y geofísica.
- Enlazar cada artículo a una guía pilar y a 3–5 piezas realmente relacionadas.
- Añadir `lastmod` únicamente desde fechas de revisión reales.

### Semana 3 — adquisición y retención

- Usar Search Console para elegir consultas con impresiones y CTR bajo; mejorar títulos y descripciones de esas URLs, no crear artículos al azar.
- Medir páginas por sesión, scroll, retorno y búsquedas internas en Cloudflare/Analytics.
- Crear una newsletter o canal social solo cuando haya un flujo editorial que pueda mantenerlo.

### Semana 4 — monetización prudente

- Tras aprobación, iniciar con un anuncio después de la introducción y otro cerca del final en artículos largos.
- No poner anuncios antes de la respuesta principal, entre el título y el autor, ni junto a enlaces de navegación.
- Medir RPM, CLS, tiempo de lectura y páginas por sesión durante dos semanas antes de añadir formatos.

## Verificación ejecutada

- `pnpm build`: correcto.
- `pnpm astro check`: 0 errores, 0 avisos y 0 sugerencias.
- `pnpm content:audit -- --strict`: falla solo por la deuda editorial descrita; no hay imágenes rotas.
