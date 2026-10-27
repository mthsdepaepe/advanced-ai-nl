# Kosten

Datum: 2026-10-20. Prompt v4. Gemeten op de 20 runs in `runs-v4/` (T01–T10, 2 runs), via `claude -p --model haiku` (`claude-haiku-5-5`). Zie `run-v4.mjs`.

## Ronde 1: wat kost één run?

Gemiddelde per run, in tokens:

| | Input | Output | Waarvan denkwerk |
|---|---:|---:|---:|
| Totaal (uit `*.raw.json`) | 4.631 | 1.207 | 1.072 |
| Context (systeemprompt van Claude Code) | ± 3.000 | 0 | |
| **Jouw deel** (totaal − context) | **± 1.631** | **1.207** | 1.072 |

- Input totaal = `input_tokens` + `cache_creation_input_tokens` + `cache_read_input_tokens`.
- De context is niet gemeten met `/context`, want het script draait met `claude -p`. Het is een schatting: een losse testvraag van één regel kwam in dezelfde opstelling op 2.990 input-tokens.
- Bijna 9 op 10 output-tokens zijn denkwerk dat je niet ziet, maar wel betaalt.

Prijs per miljoen tokens, in dollar:
- Haiku 5.5: $0,10 input, $0,50 output. Bron: Anthropic-site, opgevraagd op 20 oktober 2026. Deze prijs komt overeen met de `total_cost_usd` die Claude Code in de JSON-bestanden zelf berekende.
- Haiku 4.5: $1 input, $5 output. Bron: de prijstabel in `cursus/week-04/README.md` (14 oktober 2026).

Kost per run, jouw deel. 1 dollar = 0,90 euro (aanname van de cursus, koers niet gecheckt):

| Model | Input | Output | Kost per run (dollar) | Kost per run (euro) |
|---|---:|---:|---:|---:|
| Haiku 5.5 | 1.631 × $0,10/M = $0,000163 | 1.207 × $0,50/M = $0,000604 | **$0,00077** | **€ 0,00069** |
| Haiku 4.5 | 1.631 × $1/M = $0,00163 | 1.207 × $5/M = $0,00604 | **$0,0077** | **€ 0,0069** |

- Haiku 4.5 is niet gedraaid. De rij gebruikt de tokens van Haiku 5.5. Haiku 4.5 kan meer of minder tokens gebruiken, vooral bij het denkwerk.
- Ter vergelijking: wat Claude Code zelf rekende voor de volledige run, met context en cache, was gemiddeld $0,00088 per run ($0,0176 voor alle 20). Run 2 is goedkoper dan run 1 (bv. T01: $0,00058 tegenover $0,00102), omdat de input dan uit de cache komt.

## Ronde 2: wat kost het per maand?

| Model | Context | Totaal | Jouw deel | Kost per run | Per maand, jouw volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Haiku 5.5 | ± 3.000 in | 4.631 in + 1.207 out | ± 1.631 in + 1.207 out | $0,00077 / € 0,00069 | $0,46 / € 0,41 | $4,60 / € 4,14 | $460 / € 414 |
| Haiku 4.5 | ± 3.000 in | 4.631 in + 1.207 out | ± 1.631 in + 1.207 out | $0,0077 / € 0,0069 | $4,60 / € 4,14 | $46 / € 41,40 | $4.600 / € 4.140 |

Volume per maand: **600 advertenties** (20 per dag × 30 dagen). Bron: geschat. Om de beste deals te vinden is dit volgens mij zeker nodig, en het is een realistisch en haalbaar aantal. 10× = 6.000, 1.000× = 600.000 per maand.

Gerekend met de onafgeronde kost per run ($0,000767 voor Haiku 5.5, $0,00767 voor Haiku 4.5).

Gecontroleerd in week 5 (2026-10-27): alle 20 runs in `runs-v4/` zijn `claude-haiku-5-5`, en de prijs ($0,10 input, $0,50 output) klopt met de tabel van week 5. Geen correctie nodig. De `total_cost_usd` in de JSON is met de prijs van Haiku 5.5 berekend, niet met die van Opus: T01 run 1 nagerekend, uitkomst $0,00101554.
