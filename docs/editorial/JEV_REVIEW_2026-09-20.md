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

## Reevaluación independiente actual — 20/09/2026

Se hizo una consulta adicional con estado mínimo, después de añadir el auditor
de paquetes asistidos y preparar los contrastes P0. La pregunta pidió una sola
puntuación global de preparación para AdSense (0–4) y una prioridad de siguiente
acción; no se enviaron credenciales, datos personales ni el contenido completo
de la conversación.

| Pregunta | Resultado | Confianza | Interpretación operativa |
| --- | ---: | ---: | --- |
| Preparación global para una revisión de AdSense | **1,92/4** | 0,92 | Base técnica fuerte, pero la deuda editorial humana y los gates externos impiden llamarla lista. |
| Prioridad: cerrar revisiones humanas P0 | **0,99** | 0,98 | Primero revisar afirmaciones, fuentes, imágenes y límites; después automatizar más volumen. |

Jev devolvió `model: jev-1.13.0` y `advisory_only: true`. Esta cifra no es una
predicción de aprobación, CPM, ingresos ni tráfico; coincide con la evidencia
local de 31/32 artículos pendientes y se conserva como segunda opinión, no como
criterio único de publicación.

## Reevaluación con catálogo ampliado y auditorías actuales — 20/09/2026

Se hizo una consulta final, acotada y sin credenciales, después de ampliar el
catálogo a 634 fuentes y repetir las auditorías locales. La escala volvió a ser
`0`–`4`; es ordinal y no es una métrica de Google.

| Pregunta | Resultado | Confianza | Lectura operativa |
| --- | ---: | ---: | --- |
| Preparación global para revisión de AdSense | **1,78/4** | 0,65 | Sitio funcional con bloqueos materiales: deuda editorial humana y gates externos. |
| Prioridad: cerrar revisión humana | **0,98** | 0,98 | Revisar afirmaciones, límites, fuentes e imágenes antes de escalar volumen. |

La distribución de score fue 0: 0%, 1: 31%, 2: 59%, 3: 10%, 4: 0%. Jev mantuvo
`advisory_only: true`; el resultado no demuestra aprobación, tráfico, CPM,
ingresos ni indexación. El estado de decisión permanece en manos del editor y
se conserva `pending` hasta completar cada revisión humana.

## Reevaluación independiente tras el siguiente contraste P0 — 20/09/2026

Se consultó nuevamente Jev después de abrir fuentes primarias e
institucionales para los paquetes de ballena azul, manta raya, pangolín y
arrecifes, registrar fechas de acceso en ese lote y regenerar el prechequeo de
la cola. El estado verificable queda en 32/32 artículos con fuentes, imágenes,
alt y procedencia; 20/31 pendientes tienen fechas de acceso completas; todavía
solo 1/32 tiene revisión humana registrada y 31/31 conservan decisión pendiente.

| Pregunta | Resultado | Confianza | Lectura operativa |
| --- | ---: | ---: | --- |
| Preparación global para monetización sostenible y visibilidad orgánica | **1,93/4** | 0,83 | La base técnica es sólida, pero la deuda de lectura editorial humana y los gates de cuenta siguen siendo materiales. |
| Prioridad siguiente | **revisión humana E‑E‑A‑T** | 1,00 | Terminar P0 con afirmaciones, muestras, fechas, límites, imágenes y enlaces antes de producir más volumen. |

La distribución del score fue 0: 0%, 1: 13%, 2: 82%, 3: 4%, 4: 1%. Jev
devolvió `model: jev-1.13.0` y `advisory_only: true`; el resultado no
demuestra aprobación, CPM, ingresos, tráfico ni datos recientes de Search
Console o Cloudflare. Las mejoras de metadatos reducen trabajo pendiente, pero
no convierten un contraste asistido en una firma humana.

## Reevaluación tras ampliar paquetes P0/P1 — 20/09/2026

Después de preparar nueve paquetes de contraste asistido y elevar a 24/31 las
fichas pendientes con fechas de acceso completas, se volvió a consultar Jev con
el mismo marco `0`–`4`. El resultado bajó a **1,69/4** (confianza 0,67), con
probabilidad 0,99 para mantener la prioridad de revisión humana. Esta bajada no
es una regresión medida del sitio: el código y las auditorías siguen pasando y
Jev ponderó explícitamente que 1/32 artículos tiene firma humana, que AdSense y
Search Console son puertas externas y que los paquetes asistidos no sustituyen
una revisión real. La cifra debe leerse como señal de deuda de evidencia, no
como una comparación científica exacta con 1,93/4.

La consulta devolvió `model: jev-1.13.0` y `advisory_only: true`; la decisión
operativa permanece: cerrar revisiones humanas P0/P1 antes de escalar
automatización o volumen.
