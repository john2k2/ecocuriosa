# Guía Estratégica & Estado de Ejecución: EcoCuriosa (Google AdSense)

Este documento registra la arquitectura técnica, los recursos desplegados en producción y la **hoja de ruta exacta** para completar la monetización pasiva de EcoCuriosa según la metodología Nichonauta.

> **Nota de vigencia:** las fechas de las fases iniciales son un registro histórico. Para el estado actual de fuentes, imágenes, Search Console, Cloudflare y pendientes de AdSense, prevalecen [`GEO-AUDIT-REPORT.md`](./GEO-AUDIT-REPORT.md) y el [scorecard de crecimiento](./docs/EDITORIAL_GROWTH_SCORECARD.md).

---

## 1. Estado Actual de la Infraestructura (Desplegado y Verificado)

| Recurso | Estado | Identificador / Enlace | Notas |
| :--- | :---: | :--- | :--- |
| **Dominio Oficial** | 🟢 Activo | [https://ecocuriosa.com](https://ecocuriosa.com) | Comprado en Cloudflare Registrar con SSL HSTS |
| **Dominio Secundario** | 🟢 Activo | [https://www.ecocuriosa.com](https://www.ecocuriosa.com) | CNAME proxied hacia Cloudflare Pages |
| **Hosting Estático** | 🟢 Activo | `ecocuriosa.pages.dev` (Cloudflare Pages) | Despliegue automatizado continuo con Wrangler |
| **Repositorio Código** | 🟢 Sincronizado | [github.com/john2k2/ecocuriosa](https://github.com/john2k2/ecocuriosa) | Rama `main` al día |
| **Google Search Console** | 🟢 Verificado | Archivo `googlec746ada036fe7bf1.html` | Propiedad confirmada en GSC |
| **Sitemaps XML** | 🟢 Publicado | [ecocuriosa.com/sitemap-index.xml](https://ecocuriosa.com/sitemap-index.xml) | `sitemap-0.xml` contiene 43 URLs indexables; `/buscar/` queda fuera |
| **Artículos & recursos visuales** | 🟡 En revisión editorial | 32 monografías; 96 variantes visuales | Auditoría: 0 imágenes, variantes, alt o créditos faltantes; falta registrar 31 revisiones humanas |
| **Diseño & Accesibilidad** | 🟢 Verificado | Frontispicio Hero, paleta botánica, `<main id="main">` | `astro check` sin errores; revisar de nuevo al activar anuncios |

---

## 2. Cronograma y Hoja de Ruta (Roadmap)

### ⏳ Fase 1: Período de Asentamiento e Indexación Orgánica (6 al 10 de Septiembre)
* **Objetivo:** Permitir que los rastreadores de Google (`Googlebot`) procesen los sitemaps y añadan las páginas al índice público.
* **Por qué esperar:** Google revisa el sitio completo y puede tardar varios días o, en algunos casos, entre 2 y 4 semanas. El correo recibido indica que la revisión está en curso; no es una aprobación ni un rechazo.
* **Comprobación periódica:**
  Búsqueda en Google: `site:ecocuriosa.com` (debe mostrar las monografías indexadas).
* **Alarma / Recordatorio activo:** Programado para el **10 de septiembre de 2026**.

---

### 🚀 Fase 2: Solicitud de Aprobación en Google AdSense (10 de Septiembre)
1. Iniciar sesión en [Google AdSense](https://adsense.google.com/) con tu cuenta de Google.
2. Navegar a **Sitios** ➔ **Añadir sitio** e introducir: `ecocuriosa.com`.
3. Copiar el fragmento de código de verificación que genera AdSense:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
4. En Cloudflare Pages, configurar `PUBLIC_ADSENSE_CLIENT_ID` con el valor `ca-pub-…` y los IDs de bloque asignados por AdSense: `PUBLIC_ADSENSE_SLOT_HOME_HEADER`, `PUBLIC_ADSENSE_SLOT_HOME_FOOTER`, `PUBLIC_ADSENSE_SLOT_CATEGORY_HEADER`, `PUBLIC_ADSENSE_SLOT_ARTICLE_TOP` y `PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM`. El siguiente despliegue activará solo los espacios que tengan ambos valores.
5. Regresar a AdSense y pulsar **"Solicitar revisión"**.
6. *Tiempo estimado de respuesta de Google:* normalmente unos días; en algunos casos, 2–4 semanas.

---

### 💰 Fase 3: Despliegue de Anuncios y Monetización Activa
Una vez aprobada la cuenta:
1. **Archivo `ads.txt`:** Se colocará en `public/ads.txt`:
   ```text
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
2. **Activación de Espacios:**
   Los componentes de anuncios (`ad-placeholder`) ya están distribuidos en:
   - Portada: Banner horizontal de media página.
   - Artículos: Bloque superior bajo la ficha de autor y bloque inferior antes de la bibliografía.
3. El sitio podrá monetizar cuando la cuenta esté aprobada, los slots tengan IDs válidos y el consentimiento regional esté configurado. No se garantiza un ingreso concreto ni un volumen de tráfico.

---

## 3. Plan de Contingencia (Si AdSense solicita ajustes)
En caso de que el primer intento reciba una respuesta automática de *"Contenido de bajo valor"*:
1. No alterar el dominio ni la temática (la ciencia y naturaleza evergreen tienen de los RPMs más estables).
2. No publicar una tanda automática: revisar primero la cola editorial y actualizar las URLs existentes con fuentes verificadas. El generador histórico solo crea borradores fuera de `src/content/articles/` y no sustituye la revisión humana.
3. Reenviar a revisión únicamente después de resolver la solicitud concreta de Google; no se puede garantizar una aprobación en el segundo intento.
