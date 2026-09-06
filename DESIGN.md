---
name: EcoCuriosa - Expedición Científica
description: Revista de expedición científica y biodiversidad con rigor enciclopédico y estética de gran formato
colors:
  primary: "#063b1e"
  primary-hover: "#042613"
  primary-light: "#eaf3ec"
  primary-deep: "#052212"
  primary-subtle: "#08301a"
  primary-border: "#135933"
  primary-accent: "#0e4b2a"
  primary-field: "#0f5128"
  accent-brass: "#946c07"
  accent-brass-light: "#c59b27"
  accent-brass-dark: "#785405"
  accent-brass-wash: "#fcf6e8"
  neutral-bg: "#fbf9f4"
  neutral-pullquote: "#f4efe4"
  neutral-scrollbar: "#d4cfc3"
  neutral-surface: "#ffffff"
  neutral-border: "#e6e2d8"
  neutral-dark: "#141715"
  text-muted: "#5a605c"
  text-body: "#444a46"
  text-pale: "#d0ded5"
  text-stone: "#d6d3d1"
  text-sage: "#a3b8ad"
  text-foliage: "#738a7d"
  jungle: "#063b1e"
  jungle-dark: "#052212"
  jungle-light: "#0e4b2a"
  brass: "#946c07"
  brass-light: "#c59b27"
  brass-dark: "#785405"
  fossil: "#fbf9f4"
  fossil-border: "#e6e2d8"
  fossil-parchment: "#f4efe4"
  ink: "#141715"
  ink-muted: "#5a605c"
  biome-fauna: "#92400e"
  biome-ocean: "#0369a1"
  biome-earth: "#047857"
  biome-mineral: "#475569"
typography:
  display:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.12
  headline:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  subheading:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Albert Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  table-text:
    fontFamily: "Albert Sans, system-ui, -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Albert Sans, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card-expedition:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
---

## Overview

EcoCuriosa adopta la estética de una revista de expedición científica contemporánea (inspirada en *Terra Mater*, *National Geographic* y publicaciones de la *Linnean Society*). El diseño rechaza las plantillas de blog saturadas y prioriza la contemplación: amplios márgenes de aire, tipografía editorial con remates orgánicos (`Literata`), contrastes profundos de verde jungla húmeda (`#063b1e`) y destellos de latón dorado (`#946c07`), asentados sobre un fondo sereno de arena fósil (`#fbf9f4`).

## Colors

- **Verde Jungla Profunda (`#063b1e` / `#042613`):** El color de la densa canopia vegetal, empleado en la cabecera principal, titulares dominantes y elementos de anclaje visual.
- **Latón Dorado de Expedición (`#946c07`):** Evoca los instrumentos de campo (brújulas, telescopios de latón y lupas botánicas). Utilizado con moderación en detalles de estado, divisores sutiles y enlaces clave.
- **Arena Fósil (`#fbf9f4`):** Fondo base del lienzo, reminiscente de láminas de papel de algodón sin blanquear para una lectura prolongada sin deslumbramientos.
- **Tinta Vegetal (`#141715`):** Texto de alto contraste (14:1) para nitidez absoluta en dispositivos móviles y de escritorio.

## Typography

- **Display & Titulares (`Literata`):** Tipografía con remates afilados y proporciones renacentistas que dota a cada titular del peso de un encabezado de expedición científica.
- **Cuerpo y Lectura (`Albert Sans`):** Tipografía sans-serif contemporánea con proporciones humanistas. Diseñada para mantener legibilidad inquebrantable en cuerpos de texto densos con un interlineado de `1.75`.
- **Regla del Craft Floor:** Se prohíben terminantemente los textos en degradado (*gradient text*). El énfasis se comunica mediante escala tipográfica, peso e interlineado medido.

## Layout

- **Ritmo asimétrico y variado:** Rompe la monotonía de tarjetas uniformes. El artículo destacado lidera con una composición monumental a doble columna, secundado por un mosaico editorial jerarquizado.
- **Caja de lectura estricta:** Ancho de `max-w-3xl` (entre 65 y 72 caracteres por línea) en páginas de artículos, evitando el cansancio ocular.
- **Separación vertical generosa:** Doble de espacio por encima de un encabezado que por debajo para una asociación visual intuitiva.

## Elevation & Depth

- **Profundidad natural:** El sitio evita sombras duras o artificiales. La profundidad se establece mediante bordes ultra finos de tono hueso (`#e6e2d8`) y contrastes tonales naturales entre la arena fósil del fondo y el blanco puro de las fichas de espécimen.

## Shapes

- **Geometría noble:** Radios de curvatura contenidos (`rounded-lg` / `rounded-md` de 8 a 12px) que recuerdan a tarjetas de herbario y carpetas de archivo.

## Components

- **Expedition Masthead (Navbar):** Barra minimalista de campo con índice de expedición, sin iconos superfluos ni sombras flotantes.
- **Specimen Brief (Ficha de campo):** Bloque inicial del artículo con datos clave (clasificación, hábitat, enigma biológico) que resuelve de inmediato la consulta del lector.
- **Field Notes (Citas):** Bloques de reflexión científica sin líneas laterales de color cliché, integrados orgánicamente como anotaciones de naturalista.

## Do's and Don'ts

### Do's
- Responder siempre a la pregunta del lector en las primeras 50 palabras.
- Diseñar la portada como la portada de un libro de expedición o revista de prestigio.
- Asegurar contraste y legibilidad absoluta en cada elemento.

### Don'ts
- Prohibido el texto en degradado y las barras laterales gruesas en las citas (`side-tab`).
- Prohibido el zoom o escalado de imágenes al hacer hover (las imágenes no son botones interactivos).
- Prohibidas las microetiquetas o *eyebrows* vacías encima de los titulares: el titular debe defenderse solo.
