# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro v5 (Static Site Generation), Tailwind CSS, Content Collections con Zod, TypeScript.

## Users

Lectores curiosos, estudiantes, autodidactas y entusiastas del mundo natural que buscan respuestas rigurosas, claras y bien ilustradas a preguntas sobre fauna, océanos, geología y fenómenos científicos cotidianos. Llegan principalmente a través de búsquedas orgánicas en Google (Search & Discover) desde teléfonos móviles y ordenadores.

## Product Purpose

Ofrecer una enciclopedia digital independiente de lectura placentera, rigurosa y libre de contenido de relleno (*slop* o clickbait), diseñada para maximizar la retención y satisfacción del lector, construyendo un activo digital acumulativo (*evergreen*) monetizado de forma ética y sostenible mediante Google AdSense.

## Positioning

EcoCuriosa responde a la intención de búsqueda en el primer párrafo sin rodeos artificiales, apoyándose en explicaciones biológicas verificadas, diagramas limpios y un estándar visual de revista científica moderna (estilo National Geographic / Nature), superando a los portales masivos automatizados de baja calidad.

## Operating Context

Navegación web rápida y sin fricción. El usuario suele ingresar con una duda puntual (ej. "¿por qué el cielo es azul?", "¿cómo cambian de color los camaleones?") y permanece explorando artículos relacionados gracias a la categorización temática y a una velocidad de carga instantánea (<0.5s).

## Capabilities and Constraints

- **Capacidades:** 32 artículos enciclopédicos con estructura jerárquica (H2, H3, tablas, FAQ schema), 4 categorías principales, 32 ilustraciones vectoriales optimizadas con textos `alt` semánticos, modo silencioso de anuncios para revisión editorial, páginas legales completas.
- **Restricciones:** Cero dependencias dinámicas o bases de datos pesadas (alojamiento 100% estático gratuito en Vercel/Cloudflare Pages). Los espacios de anuncios deben integrarse de forma no invasiva para preservar la lectura y no arriesgar penalizaciones de AdSense.

## Brand Commitments

- **Nombre:** EcoCuriosa
- **Tono y Voz:** Riguroso, apasionado por el mundo natural, claro, accesible y respetuoso con el tiempo del lector.
- **Identidad visual:** Emblema esmeralda "E", paleta de colores inspirada en la tierra, la vegetación y las profundidades marinas.

## Evidence on Hand

- 32 artículos completos en `src/content/articles/*.md`.
- 32 ilustraciones vectoriales semánticas en `public/images/articles/*.svg`.
- 5 páginas legales activas exigidas por Google AdSense (`/politica-de-privacidad`, `/politica-de-cookies`, `/aviso-legal`, `/sobre-nosotros`, `/contacto`).
- Servidor de desarrollo funcional y sitemap XML con 42 URLs.

## Product Principles

1. **Respeto absoluto al tiempo del usuario:** Responder la intención de búsqueda de inmediato; el valor precede a la monetización.
2. **Claridad sobre volumen:** Explicaciones profundas y concisas en lugar de párrafos inflados para ganar espacio publicitario.
3. **Accesibilidad visual:** Cada elemento gráfico debe aportar contexto y contar con descripciones textuales detalladas para lectores con discapacidad visual y motores de búsqueda.
4. **Velocidad sin concesiones:** Rendimiento Core Web Vitals impecable (100/100) para garantizar indexación y fidelidad de lectura.
