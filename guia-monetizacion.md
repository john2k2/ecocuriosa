# Guía Estratégica: Monetización con Google AdSense para EcoCuriosa

Esta guía documenta la hoja de ruta práctica para llevar el sitio desde el entorno local hasta la aprobación oficial y cobro recurrente con **Google AdSense**.

---

## 1. Arquitectura de Ingresos (Filosofía Nichonauta)

1. **Efecto Bola de Nieve (Contenido Evergreen):**
   * El tráfico no depende de modas ni de noticias efímeras.
   * Los 32 artículos iniciales responden a intenciones de búsqueda informativas que los usuarios consultarán de manera constante a lo largo de los años.
2. **Cero Costes Fijos de Mantenimiento:**
   * Al ser un sitio estático con **Astro**, el hosting en **Vercel** o **Cloudflare Pages** es **100% gratuito** de por vida, con certificados SSL automáticos y ancho de banda masivo.
   * No hay base de datos MySQL que pueda caerse o ser hackeada.
3. **Máximo Margen Operativo:**
   * Cada dólar generado por AdSense va directo a tu cuenta bancaria.

---

## 2. Pasos para el Despliegue (Deploy)

### Paso A: Subir el proyecto a GitHub
```bash
git add .
git commit -m "feat: lanzamiento de EcoCuriosa con 32 artículos y páginas legales"
git remote add origin https://github.com/TU_USUARIO/ecocuriosa.git
git push -u origin main
```

### Paso B: Conectar con Cloudflare Pages o Vercel
1. Inicia sesión en [Vercel](https://vercel.com) o [Cloudflare Pages](https://pages.cloudflare.com) (ambos gratuitos).
2. Selecciona **Import Git Repository** y elige el repositorio de `ecocuriosa`.
3. Framework preset: **Astro**.
4. Comando de build: `npm run build`.
5. Directorio de salida (Output Directory): `dist`.
6. Haz clic en **Deploy**. En menos de 60 segundos tu web estará online a nivel mundial.

---

## 3. Adquisición y Vinculación del Dominio ($1 - $10)

> [!IMPORTANT]
> Google AdSense **exige un dominio propio** (ejemplo: `ecocuriosa.com`, `ecocuriosa.org` o extensiones económicas como `.club`, `.info`, `.xyz`). No acepta subdominios gratuitos tipo `*.vercel.app` ni `*.pages.dev`.

1. Compra el dominio en registradores de bajo costo como **Namecheap**, **Porkbun** o **Cloudflare Registrar** (suele costar entre $1 y $10 al año).
2. En el panel de Vercel/Cloudflare Pages, dirígete a **Settings > Domains** y añade tu dominio.
3. Añade los dos registros DNS (CNAME y A record) que te indique la plataforma. La propagación tardará entre 5 y 30 minutos.

---

## 4. Google Search Console y Sitemap

Antes de enviar la web a AdSense, Google debe conocer e indexar tu contenido:

1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Añade tu propiedad con el dominio (`https://tudominio.com`).
3. Ve a la pestaña **Sitemaps** en el menú lateral.
4. Envía la URL de tu sitemap generado automáticamente por Astro:
   ```text
   https://tudominio.com/sitemap-index.xml
   ```
5. Espera unos días a que Google rastree las páginas e inspecciona 2 o 3 URLs para solicitar indexación manual rápida.

---

## 5. El Proceso de Aprobación de Google AdSense

### Checklist Obligatorio antes de enviar a revisión:
- [x] **Páginas Legales activas en el Footer:**
  - Política de Privacidad (`/politica-de-privacidad`)
  - Política de Cookies (`/politica-de-cookies`)
  - Aviso Legal (`/aviso-legal`)
  - Sobre Nosotros (`/sobre-nosotros`)
  - Formulario de Contacto (`/contacto`)
- [x] **Volumen de Contenido:** 32 artículos profundos ya redactados y organizados en 4 categorías.
- [x] **Calidad Técnica:** Atributos `alt` en cada ilustración, marcado Schema.org JSON-LD en cada artículo y carga instantánea (&lt;0.5s).
- [x] **Ausencia de Anuncios Rotos:** Los componentes `AdBanner.astro` están configurados para permanecer ocultos hasta que se introduzca tu Publisher ID.

### ¿Qué hacer si AdSense rechaza la solicitud inicial?
Como explica Nichonauta en el video:
1. Las respuestas de rechazo son automáticas y genéricas (*"contenido de bajo valor"*). No te desanimes.
2. Añade un logotipo personalizado en `/public/images/logo.webp`.
3. Agrega 5 a 10 artículos nuevos a la categoría con menos contenido ejecutando el pipeline.
4. Vuelve a pulsar **Solicitar revisión**. Muchas webs son aceptadas en el segundo o tercer intento.

---

## 6. Activación de Anuncios tras la Aprobación

Una vez que Google te envíe el correo de bienvenida a AdSense:
1. Abre `src/layouts/BaseLayout.astro` y coloca tu ID de cliente en la constante:
   ```javascript
   const ADSENSE_PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX';
   ```
2. Abre `src/components/AdBanner.astro` y coloca tu ID de cliente:
   ```javascript
   const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX';
   ```
3. Crea tus bloques de anuncios en la plataforma de AdSense (un bloque adaptativo de display y un bloque in-article) y pega sus respectivos `data-ad-slot` en los componentes.
4. Haz `git commit` y `git push`: Vercel/Cloudflare actualizará tu web en 30 segundos con los anuncios activos y monetizando cada visita.
