# Revisión independiente con Jev — 2026-09-20

## Alcance y advertencia

Se envió a `mcp__jev__evaluate_options` únicamente un resumen agregado del
estado de EcoCuriosa: auditorías, métricas fechadas, estado de AdSense y deuda
editorial. No se enviaron claves, datos personales, conversaciones completas,
datos bancarios ni credenciales.

Jev es una segunda opinión del modelo (`jev-1.13.0`), no una medición de
Google, Cloudflare o AdSense. Sus scores son ordinales y dependen del contexto
proporcionado; no deben presentarse como una puntuación oficial ni como permiso
para publicar.

## Resultado

| Área | Score Jev | Banda interpretada | Confianza | Lectura operativa |
| --- | ---: | --- | ---: | --- |
| SEO técnico / infraestructura | 2,32/4 | funcional, pero faltan controles importantes | 0,56 | Crear matriz de HTML renderizado y mantener evidencia de producción/campo |
| Diseño, navegación y móvil | 2,59/4 | profesional y bien probado, todavía no validado en campo | 0,64 | Mantener la dirección visual; completar categoría/legal y pruebas post-anuncios |
| Indexación | 2,62/4 | cobertura controlada con muestras fuertes | 0,58 | Separar descubrimiento, rastreo e indexación; repetir inspección y cobertura |
| AdSense técnico | 1,12/4 | preparación inicial | 0,70 | CMP, perfil de pagos, aprobación y slots siguen siendo gates externos |
| E‑E‑A‑T | 0,80/4 | buenas bases, pero revisión insuficiente | 0,64 | Cerrar revisiones humanas P0 antes de automatizar más volumen |

Los niveles fueron definidos antes de la consulta y no se convierten a una
escala 0–100 exacta: hacerlo daría una precisión que Jev no proporcionó.

## Prioridad elegida por Jev

| Opción | Probabilidad |
| --- | ---: |
| Cerrar revisiones humanas E‑E‑A‑T | **0,98** |
| Instrumentar RUM/CWV de campo | 0,02 |
| Matriz de HTML renderizado/URL Inspection | 0,00 |
| CMP y AdSense | 0,00 |
| Distribución y autoridad externa | 0,00 |

La prioridad es coherente con la evidencia local: 31/32 artículos todavía no
tienen una revisión humana registrada. No significa que Jev haya comprobado las
fuentes ni que AdSense vaya a aprobar la cuenta.

## Decisión del plan

1. Mantener la plantilla, navegación y activos actuales; no rediseñar por una
   puntuación ordinal aislada.
2. Completar el lote P0 de revisión artículo por artículo, registrar una matriz
   de afirmaciones y conservar `pending` si queda una duda.
3. Usar las nuevas fuentes de HTML renderizado, CMP, CWV de campo, ORCID y
   estados bibliográficos como controles de la próxima iteración, no como citas
   automáticas.
4. Ejecutar la matriz de HTML renderizado y la CMP después de terminar el lote
   editorial; ninguna de las dos sustituye revisión humana.

## Datos de reproducibilidad

- Modelo informado por la herramienta: `jev-1.13.0`.
- Preguntas: cinco scores (SEO, diseño/móvil, indexación, AdSense, E‑E‑A‑T) y
  una elección de prioridad.
- Consumo reportado por la herramienta: 1.540 tokens de entrada y 144 de
  salida.
- Fecha: 20 de septiembre de 2026.

## Reevaluación post-despliegue — 20/09/2026

Después del despliegue de `2cbd2d8` y de la comprobación pública de homepage,
artículo, `robots.txt` y sitemap, se volvió a consultar Jev con el estado
actualizado. Esta consulta usó una escala ordinal propia de cuatro niveles
(`0`–`3`), por lo que sus valores no deben compararse como una variación
numérica directa respecto de la tabla anterior (`0`–`4`).

| Área | Score Jev | Confianza | Lectura que se conserva |
| --- | ---: | ---: | --- |
| SEO técnico | 2,38/3 | 0,53 | Controles principales presentes; aún falta evidencia externa/campo repetible |
| Diseño, navegación y móvil | 1,99/3 | 0,99 | Dirección sólida y controles locales; falta validación de campo |
| Indexación | 2,00/3 | 1,00 | Sitemap, render y rutas controlados; falta Search Console reciente |
| AdSense técnico | 1,00/3 | 1,00 | Base inicial; CMP, pagos, aprobación y slots reales siguen siendo gates externos |
| E‑E‑A‑T | 1,00/3 | 1,00 | Buenas bases documentales, pero 31 artículos esperan revisión humana |

La elección de prioridad fue nuevamente **cerrar la revisión humana E‑E‑A‑T**
(probabilidad reportada: 1,00). La herramienta devolvió `advisory_only: true`:
es una segunda opinión sobre el resumen proporcionado, no una comprobación de
Google, Cloudflare, Search Console o AdSense.

## Reevaluación tras ampliar fuentes y medir Lighthouse — 20/09/2026

Se volvió a consultar Jev después de incorporar 13 candidatas temáticas (605
entradas en el catálogo) y la medición Lighthouse actual de portada. Esta
consulta volvió a la escala ordinal `0`–`4` para conservar comparabilidad con la
tabla inicial; las cifras son juicios del modelo, no porcentajes oficiales.

| Área | Score Jev | Confianza | Lectura operativa |
| --- | ---: | ---: | --- |
| SEO técnico / infraestructura | 2,71/4 | 0,75 | Mejora la evidencia de laboratorio y producción; falta CWV de campo |
| Diseño, navegación y móvil | 1,97/4 | 0,95 | Accesibilidad y SEO de portada pasan Lighthouse; falta validación real móvil |
| Indexación | 1,98/4 | 0,96 | Sitemap, HTML y canonicales controlados; falta Search Console actual |
| AdSense técnico | 1,95/4 | 0,95 | Base técnica/editorial; CMP, cuenta, aprobación y slots siguen fuera del repositorio |
| E‑E‑A‑T | 1,01/4 | 0,98 | Catálogo y trazabilidad mejoran, pero 31 revisiones humanas siguen pendientes |

La prioridad única volvió a ser **cerrar las 31 revisiones humanas E‑E‑A‑T**
(probabilidad reportada: `1,00`). La herramienta devolvió `advisory_only: true` y
su propia advertencia exige verificar los hechos y conservar el juicio final
independiente.
