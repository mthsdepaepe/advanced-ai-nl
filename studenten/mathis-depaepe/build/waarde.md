# Value chain, 27 oktober 2026

Model: Sonnet 5.5 (`claude-sonnet-5-5`), effort medium, prompt v4. Basis: de value chain uit `posts/week-04.md`, aangevuld met fouten herstellen, de foutmarge en de prijs van Sonnet.

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Lezen 8 min · velden opzoeken 3 min · prijzen vergelijken 5 min · handelaar bekijken 3 min = **19 min**. De tool vervangt lezen en velden opzoeken: **11 min** | geschat (week 4) |
| Score | 97,7 op 100 velden gemiddeld (foutmarge 97–98, n = 10, 3 runs) | gemeten (`foutmarge.md`) |
| Met de tool | Draaien 6 s · nakijken 3 min · fouten herstellen 10 velden × 2,3% fout × 120 s = 28 s · samen **3,57 min**. Vergelijken en handelaar blijven met de hand. | draaien gemeten (Sonnet, gemiddeld 5,9 s, n = 30), nakijken geschat (week 4), 120 s per fout veld geschat |
| Winst per advertentie | 11 − 3,57 = **7,43 min** | |
| Volume | 20 per dag · 140 per week · 600 per maand · 7.200 per jaar | geschat, 7 dagen per week |
| Uren gewonnen | 2,5 u per dag · 17,3 u per week · 74 u per maand · **892 u per jaar** | |
| Uurkost | **€ 15**. Ik gebruik de tool voor mezelf, er is geen werkgever. Voor een werkgever zou het € 22,50 zijn (€ 15 × 1,5). | aanname: mijn uurloon in de beachbar |
| Waarde | 892 × 15 = **€ 13.381 per jaar** | |
| Kost van de tool | 7.200 × € 0,00677 = **± € 49 per jaar** (Sonnet 5.5, mijn deel: 1.631 tokens in, 426 uit) | gemeten (`modellen.md`) |
| Netto | **± € 13.332 per jaar** | |
| Bereik | Bij 97 op 100: ± € 13.091 · bij 98 op 100: ± € 13.451 | foutmarge |
| Met uurkost werkgever (€ 22,50) | ± € 20.023 per jaar | ter vergelijking |
| Zwakste cijfer | 20 advertenties per dag: geschat. Bij 10 per dag blijft er ± € 6.666 per jaar over. | |

De foutmarge verschuift het netto met ± € 180. Het volume (20 of 10 per dag) verschuift het met ± € 6.666. Mijn zwakste cijfer is dus het volume, niet de score.

Met Haiku 5.5 (94–95 op 100) zou herstellen 60–72 s per advertentie kosten in plaats van 28 s.
