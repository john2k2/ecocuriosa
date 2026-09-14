# Instantánea de Search Console — 2026-09-14

## Alcance

Lectura autenticada de la propiedad `https://ecocuriosa.com/` en «Rendimiento
en los resultados de la Búsqueda». El selector visible estaba en **3 meses**;
Search Console indicaba «Última actualización: hace 9 horas» y el gráfico
mostraba datos del **5 al 12 de septiembre de 2026**. La propiedad es reciente
y la ventana nominal no debe interpretarse como tres meses completos.

| Métrica | Valor observado |
| --- | ---: |
| Clics totales | 2 |
| Impresiones totales | 340 |
| CTR medio | 0,6 % |
| Posición media | 12 |

Estas cifras miden resultados de búsqueda, no usuarios, sesiones, ingresos,
RPM ni aprobación de AdSense. La muestra sigue siendo pequeña; no se atribuye
causalidad a un cambio aislado.

## Consultas principales

| Consulta exacta | Clics | Impresiones |
| --- | ---: | ---: |
| `architeuthis dux` | 0 | 26 |
| `pulpo mimo` | 0 | 15 |
| `geodinamo` | 0 | 14 |
| `neuronas espejo bostezo` | 0 | 3 |
| `que es el geodinamo` | 0 | 2 |
| `geodinamo terrestre` | 0 | 2 |
| `architeuthis` | 0 | 2 |
| `leopardo de nieve` | 0 | 2 |
| `león de las nieves` | 0 | 2 |
| `diente de narval` | 0 | 2 |

Las grafías son las cadenas observadas. Se optimizan las páginas existentes y
no se crean URLs casi equivalentes solo para capturar variantes.

## Páginas principales

| Página observada | Clics | Impresiones |
| --- | ---: | ---: |
| `/fauna-fascinante/pangolin-gigante-armadura-queratina-amenazas/` | 1 | 13 |
| `/ciencia-curiosa/por-que-los-gatos-ronronean-frecuencia-sanacion-osea/` | 1 | 12 |
| `/ciencia-curiosa/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo/` | 0 | 34 |
| `/especies-marinas/calamar-gigante-architeuthis-dux-bioluminiscencia/` | 0 | 33 |
| `/especies-marinas/pulpo-mimo-thaumoctopus-mimetismo-15-especies` | 0 | 27 |
| `/ciencia-curiosa/por-que-el-agua-hierve-a-menor-temperatura-montana` | 0 | 19 |
| `/especies-marinas/pez-abrecaminos-bioluminiscencia-pez-linterna/` | 0 | 18 |
| `/especies-marinas/manta-raya-gigante-inteligencia-cerebro-peces` | 0 | 16 |
| `/fauna-fascinante/leopardo-de-las-nieves-adaptaciones-frio-extremo/` | 0 | 16 |
| `/fauna-fascinante/oso-tardigrado-criptobiosis-supervivencia-espacio/` | 0 | 15 |

La tabla mostraba 60 filas e incluye variantes sin barra final. El sitio
mantiene una única URL canónica con barra y redirige las variantes; no se
interpretan como páginas adicionales.

## Funciones de IA generativa

Se abrió el informe beta «Rendimiento en las funciones de IA generativa» para
la misma propiedad y ventana visible (datos del 5 al 12 de septiembre; última
actualización indicada: hace 10 horas). Search Console mostró **1 impresión**
en total, con esta única página:

| Página | Impresiones |
| --- | ---: |
| `/especies-marinas/pulpo-mimo-thaumoctopus-mimetismo-15-especies/` | 1 |

El informe no muestra clics, posición ni autoridad de marca. La vista está
marcada como beta y puede tener disponibilidad gradual; una impresión aislada
no permite inferir presencia estable en AI Overviews/AI Mode ni impacto en
tráfico o ingresos.

## Países y dispositivos

| País | Clics | Impresiones |
| --- | ---: | ---: |
| España | 1 | 70 |
| México | 1 | 65 |
| Chile | 0 | 17 |
| Estados Unidos | 0 | 16 |
| Argentina | 0 | 15 |
| Ecuador | 0 | 12 |
| India | 0 | 12 |
| Colombia | 0 | 11 |
| Perú | 0 | 9 |
| Venezuela | 0 | 8 |

| Dispositivo | Clics | Impresiones |
| --- | ---: | ---: |
| Ordenador | 1 | 210 |
| Móviles | 1 | 129 |
| Tablet | 0 | 1 |

La distribución no es una instrucción para cambiar la residencia fiscal ni el
perfil de pagos de AdSense: son dimensiones de búsqueda y se analizan aparte.

## Indexación y sitemaps

En la lectura autenticada de Sitemaps del 14/09, `/sitemap-index.xml` y
`/sitemap-0.xml` figuraron **Correcto**, con última lectura el 14/09 y **44
páginas descubiertas** en cada registro. Los dos registros son el índice y su
sitemap hijo; no se suman como 88 páginas ni equivalen a 44 indexadas.

## Decisiones

1. Mantener una sola hipótesis de título o extracto por página con impresiones
   antes de crear contenido nuevo.
2. Priorizar las páginas de geodinamo, calamar gigante, pulpo mimo y pangolín,
   registrando fecha, país y dispositivo antes y después.
3. Esperar más rastreo y una muestra mayor antes de calcular tendencias de CTR
   o atribuir los dos clics a una modificación concreta.
4. Mantener separadas estas métricas orgánicas de solicitudes de Cloudflare,
   RUM y cualquier futura métrica de AdSense.
