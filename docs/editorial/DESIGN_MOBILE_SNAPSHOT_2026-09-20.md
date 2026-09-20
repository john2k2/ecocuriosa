# Revisión visual y móvil de producción — 2026-09-20

## Alcance

Se revisaron en producción la portada (`https://ecocuriosa.com/`) y una
monografía de la plantilla de artículo:

- `https://ecocuriosa.com/especies-marinas/calamar-gigante-architeuthis-dux-bioluminiscencia/`

La comprobación combinó navegador integrado (renderizado y árbol accesible),
inspección de las plantillas Astro/CSS y la última medición reproducible de
Lighthouse móvil. No se interpreta una captura de escritorio como una prueba
de todas las anchuras móviles.

## Evidencia confirmada

| Área | Resultado | Evidencia |
| --- | --- | --- |
| Jerarquía editorial | La portada comunica marca, edición, tema principal y llamada a la acción sin competir con anuncios | Renderizado real de portada; `src/pages/index.astro` y `Navbar.astro` |
| Artículo | H1, bajada, autoría, fechas, estado de revisión, fuentes, límites, índice, FAQ y enlaces relacionados aparecen en el primer recorrido | Renderizado real de la monografía y árbol accesible |
| Navegación | La categoría activa se anuncia con `aria-current`; existe salto al contenido; la búsqueda y las páginas legales son alcanzables desde la navegación | `Navbar.astro`, `BaseLayout.astro`, auditoría de navegación |
| Menú móvil | Los controles principales miden al menos 48×48 px, exponen nombre, estado y relación con el menú; Escape devuelve el foco al botón | `Navbar.astro` y auditoría estática |
| Lectura | La prosa limita la medida a 68 caracteres aproximados, usa Literata para títulos y deja las tablas desplazables horizontalmente | `src/styles/global.css` |
| Imágenes | Las tarjetas usan variantes responsive y las imágenes del artículo conservan dimensiones/alt/crédito | auditorías responsive-image, source-render y sitemap de imágenes |
| Accesibilidad de laboratorio | 100/100 en la última ejecución pública de Lighthouse móvil | `Lighthouse_RUNTIME_SNAPSHOT_2026-09-20.md` |

## Rendimiento, separado por tipo de evidencia

La última ejecución sintética de Lighthouse contra la portada dio 93/100 de
rendimiento, 100/100 de accesibilidad y 100/100 de SEO; FCP 1,4 s, LCP 2,7 s,
CLS 0 y TBT 130 ms. Es una muestra de laboratorio, no un P75 de usuarios
reales. La lectura anterior con variantes responsive llegó a 99/100, por lo que
la variación entre ejecuciones debe tratarse como ruido de red/máquina hasta
repetirla con el mismo perfil.

Cloudflare aporta señales de borde, no sesiones ni ingresos. En la ventana
cerrada del 13–19/09 se observaron 9.016 solicitudes y 80.612.260 bytes; 365
solicitudes (4,0 %) y 8.272.506 bytes (10,3 %) fueron servidos desde caché.
Bots, recursos y redirecciones están incluidos.

## Hallazgos y decisiones

1. **No hace falta rediseñar ahora.** La dirección visual es coherente con el
   brief de expedición: paleta bosque/ocre/fósil, contraste alto, serif editorial
   para lectura y navegación contenida.
2. **No se detectó un problema de accesibilidad que justifique un parche
   especulativo.** El detector de Impeccable devolvió `[]` y el árbol accesible
   de las dos rutas mostró nombres, foco y landmarks útiles.
3. **La matriz representativa ya pasó; falta ampliar su cobertura.** La portada
   se comprobó a 320, 375 y 1440 px; el artículo, a 320 y 768 px; el menú móvil
   se abrió a 320 px y expuso sus cinco destinos. No se observó overflow en las
   capturas. Antes de activar anuncios hay que repetir la misma matriz en una
   categoría y en las páginas legales, con teclado y menú abierto/cerrado. El
   criterio de salida es cero overflow horizontal, foco visible, contraste AA y
   CLS estable.
4. **No instalar otra integración de medición por ahora.** La sesión no tiene
   configurado el servidor MCP de Chrome DevTools para una nueva traza. Ya
   existen Lighthouse CLI, auditorías del build, Cloudflare y el navegador
   integrado; añadir una dependencia sin esa capacidad no mejoraría la evidencia.
5. **No activar publicidad para “probar” la interfaz.** Los slots reales,
   consentimiento, viewability, CLS y RPM se deben medir después de la decisión
   de AdSense y del CMP; mientras tanto se conserva la superficie editorial.

## Pendientes verificables

### Comprobación adicional en producción — 20/09/2026, 19:07

Se volvieron a abrir en el navegador integrado la categoría
`/especies-marinas/` y la página legal `/politica-de-privacidad/`. En ambas
rutas el árbol accesible mostró salto al contenido, marca enlazada, botón de
navegación móvil con nombre y estado, H1 único, enlaces de pie operativos y
contenido legal legible. Las capturas del viewport activo no mostraron
desbordamiento horizontal visible. Esta comprobación confirma las plantillas
y su recorrido, pero no sustituye la matriz con anchos explícitos ni la prueba
de teclado que sigue pendiente en esas dos rutas.

- Repetir la matriz de capturas/mediciones en una categoría y una página legal;
  la portada y un artículo representativo ya cubren las cuatro anchuras entre
  ambas rutas.
- Repetir Lighthouse tres veces por plantilla con el mismo perfil y guardar los
  JSON; usar la mediana, no una ejecución aislada.
- Consultar CrUX/RUM cuando exista elegibilidad o volumen suficiente; si no hay
  datos, declarar explícitamente “sin datos de campo”.
- Tras la aprobación de AdSense, probar una unidad después de la respuesta
  inicial y otra al final de artículos largos, midiendo CLS, viewability y
  lectura durante 14 días antes de aumentar densidad.
