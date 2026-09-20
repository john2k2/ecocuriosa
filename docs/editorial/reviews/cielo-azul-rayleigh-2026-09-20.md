# Paquete de revisión — Cielo azul y dispersión de Rayleigh

```yaml
slug: por-que-el-cielo-es-azul-dispersion-rayleigh
url: https://ecocuriosa.com/ciencia-curiosa/por-que-el-cielo-es-azul-dispersion-rayleigh/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [National Weather Service: Why Is the Sky Blue?](https://www.weather.gov/fgz/SkyBlue) — dispersión atmosférica.
2. [NASA Space Place: Why Is the Sky Blue?](https://spaceplace.nasa.gov/blue-sky/en/) — explicación de cielo azul y atardeceres.

## Matriz de afirmaciones

| ID | Afirmación exacta del artículo | Tipo | Fuente URL | Lugar local | Alcance que debe conservarse | Límite | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | El cielo suele verse azul porque las moléculas del aire dispersan más las longitudes de onda cortas que las largas. | fact | NWS; NASA Space Place | Respuesta rápida | Atmósfera terrestre y luz visible. | Aerosoles, espectro solar y visión también afectan el color. | pending |
| C2 | La radiación solar visible abarca aproximadamente 380–750 nm, con azul/violeta en longitudes cortas y rojo en largas. | fact | NWS; NASA Space Place | §1 | Rangos orientativos del espectro visible. | No presentar intervalos como límites absolutos de percepción. | pending |
| C3 | La relación aproximada de Rayleigh es `I ∝ 1/λ^4`, por lo que el azul se dispersa más que el rojo en el régimen ideal. | fact | NASA Space Place | Respuesta rápida y §2 | Comparación ideal y longitudes elegidas. | El cociente cambia con composición y condiciones; el cielo no es solo fotones azules. | pending |
| C4 | El cielo no se percibe violeta puro porque intervienen espectro solar, absorción atmosférica y sensibilidad de los conos. | fact/inference | NWS; NASA Space Place | §2 | Percepción cromática y atmósfera. | No reducir el resultado a una sola longitud de onda. | pending |
| C5 | Cerca del horizonte, una trayectoria atmosférica más larga y los aerosoles favorecen tonos rojos y naranjas. | fact | NWS; NASA Space Place | §2 | Atardecer, polvo, humo, humedad y nubes. | El color e intensidad dependen de la atmósfera real. | pending |
| C6 | Gotas y cristales de nubes, de mayor tamaño que las longitudes de onda, pueden dispersar de forma más uniforme y producir luz blanca difusa. | fact | NWS; NASA Space Place | FAQ, §4 | Régimen de dispersión de nubes. | La cifra de tamaño debe confirmarse en la revisión fuente por fuente. | pending |
| C7 | Sin atmósfera densa, como en la Luna, el fondo del cielo se observa oscuro mientras el Sol queda visible. | fact | NASA Space Place | Mitos, §3 | Condición de ausencia de dispersores. | No extrapolar a cualquier cuerpo sin atmósfera o a imágenes procesadas. | pending |
| C8 | El polvo marciano modifica el aspecto del cielo y los atardeceres según carga, iluminación y procesamiento. | fact | NASA Space Place | FAQ, §4 | Observaciones de misiones y condiciones concretas. | No fijar un único color marciano universal. | pending |

## Imagen y políticas

- `/images/articles/dispersion-rayleigh-cielo-azul.svg` se declara como ilustración original; no es una fotografía atmosférica ni un espectro medido.
- La revisión debe conservar la diferencia entre Rayleigh, aerosoles y dispersión de nubes.

```yaml
imageProvenance:
  kind: original-illustration
  creator: "EcoCuriosa"
  credit: "Ilustración original de EcoCuriosa"
  license: "no aplica; activo original del proyecto"
  licensePage: ""
  acquiredDate: "Pendiente de confirmar"
  notes: "Diagrama editorial del fenómeno óptico."
```

## Pendiente antes de cerrar

Todas las filas están `pending`. Una persona debe abrir NWS y NASA, confirmar las cifras ópticas y revisar la ilustración.
