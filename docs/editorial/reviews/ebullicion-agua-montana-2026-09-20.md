# Paquete de revisión — Ebullición del agua en la montaña

```yaml
slug: por-que-el-agua-hierve-a-menor-temperatura-montana
url: https://ecocuriosa.com/ciencia-curiosa/por-que-el-agua-hierve-a-menor-temperatura-montana/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [NIST Chemistry WebBook: Water thermochemical data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=224) — presión de vapor.
2. [NASA Technical Reports: U.S. Standard Atmosphere 1976](https://ntrs.nasa.gov/api/citations/19930090991/downloads/19930090991.pdf) — presión y altitud.
3. [National Park Service: Water Purification](https://www.nps.gov/cany/planyourvisit/waterpurification.htm) — orientación para agua de consumo.

## Matriz de afirmaciones

| ID | Afirmación exacta del artículo | Tipo | Fuente URL | Lugar local | Alcance que debe conservarse | Límite | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | El agua hierve cuando su presión de vapor iguala la presión atmosférica; a nivel del mar se usa 100 °C como referencia. | fact | NIST | Respuesta rápida, §1 | Condiciones de presión y agua consideradas. | No es una temperatura fija en cualquier presión. | pending |
| C2 | En la cima del Everest, la tabla del artículo usa aproximadamente 0,33 atm y 71,5 °C. | fact/calculation | NIST; NASA Standard Atmosphere | Respuesta rápida y tabla | Valores aproximados derivados de modelo estándar. | No son mediciones universales de cada día o punto. | pending |
| C3 | Al ganar altura baja en promedio la presión atmosférica y también el punto de ebullición; el tiempo meteorológico cambia el valor local. | fact | NASA Standard Atmosphere; NIST | §2 | Atmósfera estándar frente a presión real. | No hay regla exacta por un número fijo de metros. | pending |
| C4 | Una olla a presión eleva la presión interna y permite una temperatura de ebullición mayor que una olla abierta. | fact | NIST | §2 | Principio termodinámico. | Válvula y modelo determinan el valor; no prometer porcentaje universal. | pending |
| C5 | La tabla de altitudes es una aproximación calculada con atmósfera estándar y datos NIST. | fact/method | NIST; NASA Standard Atmosphere | Nota y tabla | Supuestos, unidades y lugares enumerados. | No confundir con mediciones meteorológicas locales. | pending |
| C6 | Hervir agua en altura no garantiza la misma seguridad ni el mismo tiempo de purificación que al nivel del mar. | fact/health caution | NPS Water Purification | Mitos, §3 | Patógeno, temperatura, tiempo y calidad inicial. | Requiere seguir autoridad sanitaria actual; no es consejo suficiente por sí solo. | pending |
| C7 | Reducir suficientemente la presión puede llevar el punto de ebullición cerca de 20 °C; la línea de Armstrong es un límite teórico cercano a 37 °C. | fact/theoretical | NIST; NASA Standard Atmosphere | FAQ, §4 | Sistema y condiciones teóricas. | No es una experiencia segura ni una instrucción práctica. | pending |

## Imagen y políticas

- `/images/articles/ebullicion-agua-montana.svg` figura como ilustración original, no como medición de presión o temperatura.
- Por tratarse de potabilidad y seguridad, la revisión debe confirmar que el aviso remite a autoridad sanitaria y no promete esterilización.

```yaml
imageProvenance:
  kind: original-illustration
  creator: "EcoCuriosa"
  credit: "Ilustración original de EcoCuriosa"
  license: "no aplica; activo original del proyecto"
  licensePage: ""
  acquiredDate: "Pendiente de confirmar"
  notes: "Ilustración editorial; no sustituye un termómetro o barómetro."
```

## Pendiente antes de cerrar

Todas las filas permanecen `pending`. Una persona debe abrir NIST, NASA y NPS, revisar cálculos y advertencias sanitarias y comprobar la imagen.
