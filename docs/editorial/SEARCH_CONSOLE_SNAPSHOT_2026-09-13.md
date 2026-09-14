# Instantánea de Search Console — 2026-09-13

## Alcance

Lectura autenticada de la propiedad `https://ecocuriosa.com/` en el informe
«Rendimiento en los resultados de la Búsqueda». El selector visible estaba en
**3 meses** y Search Console indicaba «Última actualización: hace 6 horas».
El gráfico mostraba datos válidos del 5 al 11 de septiembre de 2026; la
propiedad es reciente y la ventana nominal no debe interpretarse como tres
meses completos de tráfico.

| Métrica | Valor observado |
| --- | ---: |
| Clics totales | 1 |
| Impresiones totales | 179 |
| CTR medio | 0,6 % |
| Posición media | 15,1 |

Esta señal mide resultados de búsqueda, no sesiones, usuarios, ingresos ni
aprobación de AdSense. La muestra sigue siendo pequeña: no se debe atribuir el
único clic a un cambio concreto ni extrapolar RPM.

## Consultas principales

La tabla visible estaba ordenada por impresiones y mostraba 1–10 de 29 filas:

| Consulta exacta | Clics | Impresiones |
| --- | ---: | ---: |
| `architeuthis dux` | 0 | 16 |
| `geodinamo` | 0 | 14 |
| `pulpo mimo` | 0 | 13 |
| `neuronas espejo bostezo` | 0 | 3 |
| `geodinamo terrestre` | 0 | 2 |
| `pez luciernaga` | 0 | 2 |
| `relampago de catatumbo` | 0 | 2 |
| `geosmona` | 0 | 1 |
| `mantaraya` | 0 | 1 |
| `pangolin gigante` | 0 | 1 |

Las grafías (`geosmona`, `mantaraya`, `pez luciernaga`) son las cadenas
observadas; no se crean URLs nuevas solo para corregirlas. Se prueban títulos,
extractos y enlaces en las páginas existentes, como detalla el [backlog de
CTR](./SEARCH_CONSOLE_CTR_BACKLOG_2026-09-13.md).

## Páginas principales

La tabla visible mostraba 1–10 de 35 filas. Search Console expuso también
variantes sin barra final; el sitio mantiene la URL canónica con barra y las
redirige, por lo que no se crean duplicados.

| URL observada | Clics | Impresiones |
| --- | ---: | ---: |
| `/ciencia-curiosa/por-que-los-gatos-ronronean-frecuencia-sanacion-osea/` | 1 | 7 |
| `/ciencia-curiosa/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo/` | 0 | 27 |
| `/especies-marinas/calamar-gigante-architeuthis-dux-bioluminiscencia/` | 0 | 18 |
| `/ciencia-curiosa/por-que-el-agua-hierve-a-menor-temperatura-montana` | 0 | 15 |
| `/especies-marinas/pulpo-mimo-thaumoctopus-mimetismo-15-especies` | 0 | 15 |
| `/fauna-fascinante/leopardo-de-las-nieves-adaptaciones-frio-extremo/` | 0 | 8 |
| `/ciencia-curiosa/por-que-el-agua-hierve-a-menor-temperatura-montana/` | 0 | 7 |
| `/fenomenos-naturales/relampago-del-catatumbo-tormenta-eterna-venezuela/` | 0 | 6 |
| `/especies-marinas/pez-abrecaminos-bioluminiscencia-pez-linterna/` | 0 | 6 |
| `/fauna-fascinante/oso-tardigrado-criptobiosis-supervivencia-espacio/` | 0 | 6 |

La separación entre las dos variantes del agua y del pulpo merece observarse
en el siguiente rastreo, pero no demuestra por sí sola un problema de
canonicalización: las comprobaciones locales y públicas mantienen una sola
URL canónica por artículo.

## Países y dispositivos

| País | Impresiones |
| --- | ---: |
| México | 50 |
| España | 49 |
| Chile | 11 |
| Estados Unidos | 9 |
| Argentina | 9 |
| Perú | 7 |
| Colombia | 6 |
| Ecuador | 5 |
| República Dominicana | 5 |
| Paraguay | 3 |

| Dispositivo | Impresiones |
| --- | ---: |
| Móviles | 93 |
| Ordenador | 85 |
| Tablet | 1 |

## Indexación y sitemaps

El informe «Indexación de páginas» seguía mostrando «Se están procesando los
datos; vuelve a comprobar esta sección mañana». No se extrapola la muestra de
inspecciones individuales a todo el sitio.

El informe «Sitemaps» sí mostró una lectura actualizada el **13 de septiembre
de 2026**:

| Sitemap | Estado | Páginas descubiertas | Última lectura |
| --- | --- | ---: | --- |
| `/sitemap-0.xml` | Correcto | 43 | 13 sept 2026 |
| `/sitemap-index.xml` | Correcto | 43 | 13 sept 2026 |

Los dos registros corresponden a los mismos 43 recursos descubiertos; no son
86 páginas distintas.

## Decisiones

1. Priorizar pruebas de título y extracto en `geodinamo`, `architeuthis dux`,
   `pulpo mimo` y `calamar gigante`, una variable cada vez.
2. Mantener las variantes ortográficas dentro de las páginas actuales y no
   abrir URLs casi equivalentes.
3. Esperar al menos 28 días o una muestra claramente mayor antes de juzgar el
   CTR; registrar país y dispositivo junto con cada cambio.
4. Dejar la cobertura de indexación como pendiente hasta que Search Console
   termine de procesar el informe.
