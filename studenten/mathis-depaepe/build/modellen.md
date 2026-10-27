# Modeltest, 27 oktober 2026

## Mijn gok (geschreven vóór de runs)

Ik denk dat Opus het beste scoort, omdat het het zwaarste model is. Ik denk dat Haiku goed genoeg is voor mijn setup aangezien het niet zo een moeilijke taak is en deze ook veel goedkoper is. Zeker met 600 advertenties per maand.

## Resultaat

Gedraaid op 27 oktober 2026 met `run-foutmarge.mjs`, prompt v4 (`prompt.md`), T01–T10, 1 run per setup. Zelfde opstelling als de foutmargetest: `claude -p --model <model> --effort medium --tools ""`, elke run apart. Model gecontroleerd in alle `*.raw.json`. Ruwe uitvoer: `runs-model-A-sonnet/`, `runs-model-B-haiku/`, `runs-model-C-opus/`. Verwachte antwoorden niet aangepast.

| Setup | Model | Effort | Score (n = 10 × 10 velden, 1 run) | Binnen mijn foutmarge? | Output-tokens per run | Kost per run | Per jaar |
|---|---|---|---:|---|---:|---:|---:|
| A | `claude-sonnet-5-5` | medium | 98/100 | Nee, boven v4 Haiku (94–95) | 426 | $0,0075 / € 0,0068 | $54 / € 49 |
| B | `claude-haiku-5-5` | medium | 94/100 | Ja (94–95) | 1.138 | $0,00073 / € 0,00066 | $5,27 / € 4,74 |
| C | `claude-opus-5-5` | medium | 97/100 | Nee, boven v4 Haiku (94–95) | 505 | $0,017 / € 0,015 | $120 / € 108 |

Foutmarge = v4 op Haiku 5.5, standaard-effort, 3 runs (`foutmarge.md`). Sonnet en Opus draaiden maar 1 keer: hun eigen foutmarge is niet gemeten.

**Kost per run** = jouw deel input uit week 4 (± 1.631 tokens, zie `kosten.md`) × inputprijs + output-tokens van de setup × outputprijs. Prijzen per miljoen tokens: Sonnet 5.5 $2 / $10, Haiku 5.5 $0,10 / $0,50, Opus 5.5 $4 / $20 (tabel week 5). Per jaar = 600 per maand × 12 = 7.200 runs. 1 dollar = 0,90 euro.

Opgemeten, niet gebruikt in de kost: het totaal aan input per run (met de systeemprompt van Claude Code) was 3.856 (Sonnet), 4.680 (Haiku) en 3.852 (Opus). Wat Claude Code zelf rekende voor de 10 runs, met context en cache: Sonnet $0,147, Haiku $0,0069, Opus $0,331.

### Fouten per setup

Zelfde beoordelingsregels als in `foutmarge.md` (extra detail bij `model`, T08 model, servicegeschiedenis in andere woorden: juist).

| Veld | A Sonnet | B Haiku | C Opus |
|---|---|---|---|
| T01 bouwjaar ("onbekend", verwacht 1970) | | fout | fout |
| T05 vraagprijs ("onbekend") | | fout | |
| T07 vraagprijs ("onbekend") | | fout | |
| T08 doos_papieren ("onbekend") | | fout | |
| T09 bouwjaar ("onbekend") | | | fout |
| T10 merk ("Rolex") | fout | fout | |
| T10 verkoper ("handelaar") | fout | fout | fout |
| **Totaal fout** | 2 | 6 | 3 |

- Haiku denkt het langst: 1.003 tokens denkwerk per run, tegenover 291 (Sonnet) en 370 (Opus).
- T07 vraagprijs en T08 doos_papieren waren fout in alle 6 foutmargeruns op Haiku. Sonnet en Opus hadden ze juist.
- T10 verkoper blijft bij alle drie de modellen fout.

## Klopte mijn gok?

<in te vullen door mij>

## Welke setup zet ik in productie?

<in te vullen door mij: "Deze taak draait op dit model, met deze effort, omdat …">
