# Acceso inicial a fuentes nuevas del lote P0 — 20 de septiembre de 2026

Esta instantánea solo registra una comprobación HTTP de los DOI añadidos por
Luna. No significa que una persona haya leído el artículo, validado una
afirmación o aprobado una revisión. Un `403` del entorno no invalida la fuente:
obliga a abrirla manualmente, usar el registro bibliográfico del editor o
buscar una copia institucional equivalente sin cambiar el alcance de la cita.

| ID de catálogo | HTTP observado | Lectura operativa |
| --- | ---: | --- |
| `blue-whale-rorqual-cardiac-dynamics-2026` | `403` tras DOI | Abrir PNAS en navegador o localizar el registro/PMC si existe; no copiar figuras. |
| `blue-whale-feeding-allometry-2025` | `403` tras DOI | Abrir Science Advances manualmente; conservar atribución CC BY solo después de confirmarla en el artículo. |
| `manta-birostris-movement-connectivity-mexico-2025` | `200` tras DOI | El landing de Springer responde; todavía requiere lectura humana del método y muestra. |
| `elephant-individual-name-like-calls-2024` | `200` tras DOI | El landing de Nature responde; todavía requiere comprobar grabaciones, modelo y playback. |
| `pangolin-scales-innate-immunity-2024` | `200` tras DOI | El landing de BMC responde; conservar que las muestras son comparativas y no del pangolín gigante. |
| `coral-short-term-thermal-metaproteome-2026` | `403` tras DOI | Abrir Wiley manualmente o buscar repositorio institucional; no asumir acceso ni licencia. |
| `arctic-ssw-tropopause-reanalysis-2025` | `403` tras DOI | Abrir AGU/Wiley manualmente; comprobar periodo, definición de SSW y reanálisis. |
| `barn-owl-serrations-turbulence-2024` | `200` tras DOI | El landing de IOP responde; comprobar modelo de *Tyto alba* y condiciones PIV. |
| `tardigrade-mars-regolith-2025` | `200` tras DOI | El landing de Cambridge responde; comprobar taxones, simulantes y cuatro días de exposición. |
| `lanternfish-southwest-atlantic-distribution-2025` | `200` tras DOI | El landing de Elsevier responde; comprobar las 34 especies, estación y región. |

## Regla de uso

- Las diez entradas permanecen en nivel `candidate` del plan de evidencia.
- Las seis respuestas `200` solo prueban que existe un landing accesible, no que
  la afirmación esté validada.
- Las cuatro respuestas `403` no deben eliminarse ni citarse automáticamente;
  requieren apertura manual o una fuente equivalente identificada por DOI,
  PMID, repositorio institucional o texto completo autorizado.
- Ningún artículo publicado se modificó y ninguna fila de la cola humana cambió
  de `pending`.

La siguiente acción para el editor es abrir cada fuente desde su paquete de
revisión, registrar pasaje, muestra, especie, fecha, método, licencia y límite,
y solo entonces decidir si se incorpora al artículo existente.
