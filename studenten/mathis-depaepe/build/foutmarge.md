# Foutmarge, 27 oktober 2026

Model: `claude-haiku-5-5` (Haiku 5.5, gecontroleerd in alle 60 `*.raw.json`). n = 10 inputs × 10 velden = 100 velden per run, 3 runs per versie. Zelfde inputs voor beide (T01–T10 uit `test-set.md`).

Opstelling: `run-foutmarge.mjs`, zelfde als `run-v4.mjs`: per run een aparte `claude -p --model claude-haiku-5-5 --tools "" --safe-mode --strict-mcp-config --no-session-persistence`, elk vanuit een eigen lege map, 6 tegelijk. Het model kreeg nooit de verwachte antwoorden. Ruwe uitvoer: `runs-foutmarge-v3/` en `runs-foutmarge-v4/`.

- v3 = `prompt-v3.md`
- v4 = `prompt.md` (enige verschil: "onbekend" als derde optie bij `verkoper`)

Verwachte antwoorden: `test-set.md` zoals op 27 oktober, met T03 bouwjaar = "onbekend" (aangepast vóór deze runs, zie `log.md`).

| Versie | Run 1 | Run 2 | Run 3 | Foutmarge (min–max) |
|---|---:|---:|---:|---:|
| v3 | 94/100 | 96/100 | 97/100 | 94–97 |
| v4 | 94/100 | 95/100 | 94/100 | 94–95 |

## Fouten per run

| Veld | v3 r1 | v3 r2 | v3 r3 | v4 r1 | v4 r2 | v4 r3 |
|---|---|---|---|---|---|---|
| T04 staat ("onbekend") | fout | | | | | |
| T05 staat ("onbekend") | | | | fout | | |
| T05 vraagprijs ("onbekend") | | | | fout | | fout |
| T07 vraagprijs ("onbekend") | fout | fout | fout | fout | fout | fout |
| T08 doos_papieren ("onbekend") | fout | fout | fout | fout | fout | fout |
| T09 bouwjaar ("onbekend") | fout | fout | | | fout | fout |
| T10 merk ("Rolex") | fout | fout | fout | fout | fout | fout |
| T10 verkoper ("handelaar") | fout | | | fout | fout | fout |
| **Totaal fout** | 6 | 4 | 3 | 6 | 5 | 6 |

Juist gerekend volgens de beoordelingsregels in `test-set.md`, zoals in week 4:
- `model` met een extra detail: T03 "Datejust 41mm", T06 "Seamaster Planet Ocean 43 mm", T09 "Black Bay 58 Blue".
- T08 `model` "Seamaster Professional 300" (verwacht: "Seamaster Professional Diver 300M"). In week 4 ook juist gerekend. **Twijfel:** hier ontbreekt een woord, het is geen extra detail. Zie onder.
- Alle `servicegeschiedenis`: zelfde inhoud in andere woorden of met een extra detail (factuur).

Automatisch nagekeken (exacte vergelijking, hoofdletters genegeerd), daarna de verschillen met de hand nagekeken volgens de regels hierboven.

## Mijn claim

Mijn claim: "v4 lost T10 verkoper op, dus v4 is beter dan v3."
Uit `log.md`, 20 oktober (verwachting voor v4): "T10 verkoper wordt 'onbekend'. Bij T01–T09 blijft verkoper hetzelfde."

Bevestigd of ingetrokken: **ingetrokken**, want de bereiken overlappen (v3 94–97, v4 94–95), en T10 verkoper bleef in alle 3 runs van v4 "handelaar". Opvallend: v3 zonder de optie "onbekend" gaf 2 van de 3 keer wel "onbekend".

T08 model blijft juist, zoals ik in week 3 besliste. Ik herlabel niet achteraf.

Wat de cijfers zeggen:
- De bereiken overlappen (v3 94–97, v4 94–95). Volgens de regel van week 5 is v4 dus niet bewezen beter.
- T10 verkoper: v4 gaf 3 op 3 keer "handelaar". v3, zonder de optie "onbekend", gaf 2 op 3 keer "onbekend".
- T01–T09 verkoper: in alle 60 runs juist.

## Sonnet 5.5 (gekozen model), 27 oktober 2026

Model: `claude-sonnet-5-5`, effort medium, prompt v4. n = 10 inputs × 10 velden, 3 runs. Zelfde opstelling. Run 1 = `runs-model-A-sonnet/`, run 2 en 3 = `runs-model-A-sonnet-extra/` (daar run1 en run2).

| Versie | Run 1 | Run 2 | Run 3 | Foutmarge (min–max) |
|---|---:|---:|---:|---:|
| v4, Sonnet 5.5 | 98/100 | 98/100 | 97/100 | 97–98 |

Fouten: T10 merk (3 van 3), T10 verkoper (2 van 3), T04 referentienummer "onbekend" (2 van 3).
Juist gerekend volgens de regels: T05 model "Black Bay Chrono Panda", T06 en T09 model met extra detail, T08 model, alle servicegeschiedenissen.

Let op: de foutmarge van Haiku (94–95) is gemeten op standaard-effort, die van Sonnet op effort medium. Het bereik van Sonnet ligt volledig boven dat van Haiku.
