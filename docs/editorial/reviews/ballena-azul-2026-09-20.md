# Paquete de revisión — Ballena azul

```yaml
slug: ballena-azul-fisiologia-gigante-cardiovascular
url: https://ecocuriosa.com/especies-marinas/ballena-azul-fisiologia-gigante-cardiovascular/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [Goldbogen et al., PNAS / PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6911174/) — estudio primario, DOI `10.1073/pnas.1914273116`, PMID `31767746`.
2. [Goldbogen et al., Science / NOAA Institutional Repository](https://repository.library.noaa.gov/view/noaa/53258) — artículo de contexto comparativo, DOI `10.1126/science.aax9044`, publicado en 2019.

La primera URL presentó una protección intermedia en el navegador de búsqueda,
pero el texto completo abierto de PMC y su registro PubMed fueron contrastados
por identificador, resumen y cifras. El registro NOAA expone título, autores,
revista, año, DOI, tipo de documento y enlace PDF.

## Matriz de afirmaciones

| ID | Afirmación del artículo | Evidencia comprobada | Alcance que debe conservarse | Estado |
| --- | --- | --- | --- | --- |
| C1 | Un registrador ECG-profundidad se fijó a un macho libre y produjo un registro de 8,5 horas. | El texto completo de PMC describe un `8.5-h ECG-depth record` de un macho observado en libertad. | Un individuo y una sesión; no promedio poblacional. | verified |
| C2 | El conjunto analizable contiene 60 inmersiones; las inmersiones llegaron hasta 184 m y 16,5 min. | El artículo muestra 60 inmersiones con huecos de artefacto y el resumen/figuras describen máximos de 184 m y 16,5 min. | Inmersiones de alimentación de ese registro, no límites universales de la especie. | verified |
| C3 | Durante inmersiones, el ritmo fue normalmente de 4–8 latidos/min y alcanzó un mínimo de 2. | El resumen de PubMed y el texto de PMC reportan `4 to 8` y `as low as 2 bpm`. | Rango observado en el estudio, no frecuencia fija de toda ballena azul. | verified |
| C4 | Después de inmersiones profundas, el ritmo superficial llegó a 37 latidos/min. | El resumen de PubMed reporta 25–37 bpm después de la inmersión; el artículo lo relaciona con recuperación superficial. | Respuesta post-inmersión del individuo medido; no máximo fisiológico universal. | verified |
| C5 | El artículo de NOAA/Science aporta contexto sobre tamaño corporal, ganancia energética y disponibilidad de presas. | NOAA registra el artículo, autores, Science 366(6471), 1367–1372, DOI y resumen sobre datos de alimentación/inmersiones y disponibilidad de presas. | Es contexto comparativo; no es la fuente de las cifras ECG concretas. | verified |
| C6 | Las cifras no permiten inferir volumen sanguíneo, masa cardíaca, capacidad pulmonar ni una regla para toda la especie. | Es una limitación metodológica coherente con la muestra de un individuo y el alcance de las mediciones. | Mantener el párrafo de límites y no convertir inferencias en observaciones. | verified |

## Imagen, enlaces y políticas

- `public/images/articles/ballena-azul-gigante.svg` es una ilustración SVG
  original del proyecto con `viewBox` 1200×750; el frontmatter declara
  “Ilustración original de EcoCuriosa”. No se presenta como fotografía ni como
  evidencia observacional.
- Las dos fuentes aparecen en el frontmatter y en la sección de referencias;
  el auditor de referencias las comprueba como enlaces exactos.
- El artículo no ofrece consejo médico, instrucciones peligrosas ni promesas
  de conservación. La publicidad real no está activa mientras la cuenta siga
  en revisión.

## Pendiente antes de cerrar

La evidencia técnica de las fuentes es consistente con el texto, pero este
paquete no marca `reviewedDate`/`reviewedBy` en el artículo porque falta la
confirmación del responsable editorial público. Una persona debe abrir las dos
fuentes en su navegador, revisar la ilustración y confirmar que la redacción
final conserva el alcance de un solo macho y de ese registro. Después puede
registrar la aprobación y ejecutar `pnpm content:audit -- --strict`.
