# Backlog de CTR basado en Search Console — 13 de septiembre de 2026

Este documento convierte la primera lectura autenticada de Search Console en
experimentos pequeños y reversibles. No es una promesa de crecimiento ni una
orden de cambiar títulos: la muestra disponible es de 112 impresiones, 0
clics, CTR 0 % y posición media 14 en tres meses.

## Reglas de medición

1. Cambiar una sola variable por URL: título **o** descripción, nunca ambas a
   la vez.
2. Conservar el valor anterior, la fecha y la hipótesis en el registro de
   cambios; no modificar `pubDate` para aparentar frescura.
3. Esperar al menos 28 días y, preferentemente, 100 impresiones de la URL
   antes de decidir. Con muestras menores, registrar solo una señal
   exploratoria.
4. Comparar consulta, URL, país, dispositivo, impresiones, clics, CTR y
   posición en el mismo intervalo. No atribuir causalidad si cambió la
   cobertura o la posición media.
5. Luna Max puede proponer variantes; una persona debe aprobar el texto y
   comprobar que sigue describiendo exactamente el artículo.

## Oportunidades observadas

| Prioridad | Consulta observada | URL | Hipótesis de prueba | Guardarraíl editorial |
| ---: | --- | --- | --- | --- |
| P0 | `geodinamo` (11 impresiones) | `/ciencia-curiosa/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo/` | Mantener la entidad al principio y hacer explícita la pregunta: «Geodinamo terrestre: cómo se genera el campo magnético» | No prometer que el campo sea un escudo absoluto ni confundir variación secular con inversión inmediata |
| P0 | `pulpo mimo` (8) | `/especies-marinas/pulpo-mimo-thaumoctopus-mimetismo-15-especies/` | Probar un título que combine nombre común y especie: «Pulpo mimo (*Thaumoctopus mimicus*): qué imita y qué se observó» | La lista de imitaciones debe quedar limitada a la evidencia observada; no convertirla en 15 capacidades universales |
| P1 | `geodinamo terrestre` (2) | `/ciencia-curiosa/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo/` | Reforzar en la primera respuesta «núcleo externo líquido» y «convección» sin repetir palabras clave | Cada cifra de profundidad, temperatura o velocidad necesita fuente y alcance explícitos |
| P1 | `architeuthus dux` / `architeuthis` (3 combinadas) | `/especies-marinas/calamar-gigante-architeuthis-dux-bioluminiscencia/` | Probar una descripción que anticipe «qué se sabe» y «qué sigue siendo incierto» | No trasladar la observación de un ejemplar o la imagen de una expedición a toda la especie |
| P1 | `relampago de catatumbo` (2) | `/fenomenos-naturales/relampago-del-catatumbo-tormenta-eterna-venezuela/` | Usar la forma ortográfica más clara en el título visible y conservar «Maracaibo» como contexto | No presentar una frecuencia histórica como constante actual ni como récord universal sin fecha |
| P1 | `tiburon de groenlandia cuanto vive` (1) | `/especies-marinas/tiburon-de-groenlandia-vertebrado-mas-longevo/` | Hacer visible en el extracto que la longevidad es una estimación por radiocarbono y tiene incertidumbre | No convertir una muestra y un intervalo estimado en una edad exacta para todos los tiburones |
| P1 | `pangolin gigante` (1) | `/fauna-fascinante/pangolin-gigante-armadura-queratina-amenazas/` | Probar una respuesta inicial que diferencie especie, escamas y amenaza de tráfico | No atribuir propiedades medicinales ni extrapolar decomisos de un período a la población mundial |
| P1 | `león de las nieves` (1) | `/fauna-fascinante/leopardo-de-las-nieves-adaptaciones-frio-extremo/` | Revisar si el título y la descripción usan «leopardo de las nieves» como nombre principal, dejando la variante coloquial en el cuerpo | No sacrificar precisión taxonómica por una variante de consulta |

## Registro de experimento

Copiar esta fila por cada cambio aprobado y conservarla fuera de los datos
privados de la cuenta:

| URL | Variable | Versión anterior | Versión nueva | Fecha de cambio | Ventana de comparación | Impresiones/clics/CTR antes | Impresiones/clics/CTR después | Decisión | Responsable |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — | — | — | Pendiente | — |

## Criterios de cierre

- Mantener la versión con mejor utilidad y precisión, no solo la que tenga una
  variación de CTR con una muestra pequeña.
- Revertir si aumenta la exposición pero cae la relevancia, aparecen consultas
  engañosas o el texto deja de coincidir con las fuentes.
- Actualizar el backlog cuando Search Console entregue una nueva ventana y
  separar siempre datos de Search Console, Cloudflare y AdSense.

La guía de [title links de Google](https://developers.google.com/search/docs/appearance/title-link)
y la [documentación de Search Console](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)
son las referencias de interpretación; ningún experimento garantiza una
posición o un CTR concreto.
