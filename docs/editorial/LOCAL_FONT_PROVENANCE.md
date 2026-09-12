# Procedencia de tipografías locales

EcoCuriosa sirve `Literata` y `Albert Sans` desde `/fonts/` para evitar que la
hoja de Google Fonts bloquee el primer render. Los tres archivos son
subconjuntos Latin en formato WOFF2 obtenidos el 12/09/2026 desde las URLs
oficiales de Google Fonts:

- [Literata normal](https://fonts.gstatic.com/s/literata/v40/or3PQ6P12-iJxAIgLa78DkTtAoDhk0oVpaK3YLanFLHpPf2TbLi4J_HWTEKVt8k.woff2)
- [Literata cursiva](https://fonts.gstatic.com/s/literata/v40/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeE9KK5U5Cl4OOCT.woff2)
- [Albert Sans](https://fonts.gstatic.com/s/albertsans/v4/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2)

Los archivos actuales son subconjuntos generados para los caracteres que usa
el contenido en español del sitio (ASCII, acentos y signos editoriales),
conservando las tablas de tipografía necesarias. Si se amplía el idioma o se
añaden símbolos nuevos, hay que regenerarlos desde las fuentes oficiales o
ampliar el conjunto de glifos antes de publicar.

Hashes SHA-256 de los activos publicados:

```text
albert-sans-latin.woff2       238a71e26eb93f594438cc4adcd20e2abe63bb589d086eb2d4c23f5938631dd1
literata-italic-latin.woff2   63b99fbab924d5cd2bc7e9d1b069718278f1245d77b3edf07857707e85691712
literata-latin.woff2          fb51fc5388e29a8af43d350119f63557173fb50ee7503effd8b560d3414d6fa8
```

Ambas familias se distribuyen bajo la [SIL Open Font License 1.1 de
Literata](https://github.com/googlefonts/literata/blob/main/OFL.txt) y la
[licencia publicada por el proyecto Albert Sans](https://github.com/usted/Albert-Sans/blob/master/OFL.txt).
Estos archivos no son contenido editorial ni imágenes del sitio; si se cambia
la versión, hay que actualizar las URLs y revisar sus licencias.
