# Instantánea de Google Search Console — EcoCuriosa

**Fecha de lectura:** 20 de septiembre de 2026  
**Propiedad:** `https://ecocuriosa.com/`  
**Fuente:** interfaz autenticada de Google Search Console; lectura manual, sin exportar datos personales.

## Rendimiento de búsqueda

La vista seleccionada fue **Búsqueda web · últimos 3 meses**. Search Console
indica que la última actualización disponible tenía unas 4,5 horas de retraso
y representa el periodo del 5 al 18 de septiembre de 2026.

| Métrica | Valor observado |
| --- | ---: |
| Clics totales | 3 |
| Impresiones totales | 635 |
| CTR medio | 0,5 % |
| Posición media | 13,4 |

Consultas visibles con más impresiones en la tabla inicial: `architeuthis dux`
(71), `geodinamo` (44 y 1 clic), `pulpo mimo` (15), `architeuthis` (11),
`leopardo de las nieves` (5), `que es el geodinamo` (4), `geosmina y petricor`
(4) y `geodinamo terrestre` (3). La tabla mostraba 70 consultas en total.

Estos datos prueban descubrimiento e impresiones, no una audiencia estable ni
ingresos. La muestra es todavía demasiado pequeña para decidir cambios de
títulos por una sola consulta; sí justifica priorizar las páginas de
`Architeuthis`, geodinamo, pulpo mimo y petricor para mejorar intención,
enlazado interno y snippets.

## Indexación

La vista de **Indexación de páginas** tenía fecha de actualización 13 de
septiembre de 2026:

| Estado | URLs |
| --- | ---: |
| Indexadas | 57 |
| Sin indexar | 28 |

Los tres motivos de exclusión visibles fueron:

- Página con redirección: 25.
- Excluida por una etiqueta `noindex`: 2.
- Rastreada: actualmente sin indexar: 1.

Los dos primeros motivos no son necesariamente defectos: las redirecciones y
las rutas intencionalmente `noindex` pueden ser correctas. La única exclusión
que merece una revisión editorial/SEO prioritaria es la URL rastreada pero aún
no indexada; no se debe solicitar indexación masiva sin inspeccionar su
canonical, contenido y enlaces entrantes.

## Sitemap y mejoras

Search Console muestra dos sitemaps enviados, ambos con estado **Correcto** y
última lectura el 19 de septiembre de 2026:

- `/sitemap-index.xml`: 44 páginas descubiertas, 0 vídeos.
- `/sitemap-0.xml`: 44 páginas descubiertas, 0 vídeos.

También se observaron 35 URLs HTTPS válidas y 0 URLs sin HTTPS. Las mejoras
mostraron 10 elementos válidos de rutas de exploración, 10 de metadatos de
imagen y 1 página de perfil, todos sin inválidos.

## Core Web Vitals

Search Console muestra **sin datos** para móviles y ordenador. Esto no implica
que el sitio sea lento: significa que todavía no hay suficiente telemetría de
usuarios reales para el informe. Las mediciones Lighthouse locales quedan
separadas de este dato de campo.

## Acciones derivadas

1. Mantener el sitemap: no hay evidencia de error de lectura.
2. Inspeccionar la única URL “rastreada pero actualmente sin indexar” antes de
   hacer cualquier solicitud; documentar la URL y el resultado en la siguiente
   lectura.
3. Usar `Architeuthis`, `geodinamo`, `pulpo mimo` y `geosmina y petricor` como
   primer grupo de optimización de snippets y enlaces internos, sin prometer
   tráfico ni cambiar títulos por una muestra de tres clics.
4. No interpretar las 57 páginas indexadas como 57 artículos: el conjunto
   incluye URLs conocidas de la propiedad y debe cruzarse con el sitemap y la
   inspección individual.
5. Volver a leer este informe después de 28 días comparables y registrar clics,
   impresiones, CTR, posición, páginas indexadas y motivos de exclusión.
