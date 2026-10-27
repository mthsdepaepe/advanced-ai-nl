# Testset

Het juiste antwoord staat er vóór de eerste run. Namen van verkopers zijn weggelaten. De volledige advertenties staan onder de tabel.

Beoordelingsregels:
- Bij `servicegeschiedenis` telt dezelfde inhoud in andere woorden als juist, ook met een extra detail uit de advertentie (zoals een meegeleverde factuur).
- Bij `model` telt een extra detail uit de advertentie (zoals de diameter) als juist, zolang het model zelf klopt.
- Hoofdletters tellen niet mee (bv. "OMEGA" = "Omega").

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | Rolex Datejust 1603, particulier, NL (zie onder) | merk: Rolex<br>model: Datejust<br>referentienummer: 1603<br>bouwjaar: 1970<br>staat: zeer goed<br>doos_papieren: geen<br>vraagprijs: 4195<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: onbekend | Merk, model, referentienummer, bouwjaar, staat, ontbreken van doos en papieren, prijs en particuliere verkoper staan rechtstreeks in de advertentie. Servicegeschiedenis wordt niet vermeld. Bouwjaar 1970, omdat de advertentie letterlijk "Bouwjaar 1970 (Schatting)" vermeldt. | 10/10 juist | 10/10 juist |
| T02 | Omega Seamaster Dynamic vintage, particulier, FR (zie onder) | merk: Omega<br>model: Seamaster Dynamic<br>referentienummer: onbekend<br>bouwjaar: onbekend<br>staat: gedragen<br>doos_papieren: onbekend<br>vraagprijs: 650<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: onbekend | De advertentie noemt Omega Seamaster Dynamic, calibre 1430, gebruikssporen en kleine krassen en een prijs van €650. Er wordt geen referentienummer, bouwjaar, informatie over doos of papieren of servicegeschiedenis vermeld. De staat is "gedragen" omdat de advertentie enkele gebruikssporen en kleine krassen vermeldt. "Calibre 1430" is geen referentienummer. Bouwjaar niet afleiden uit "vintage" of het kaliber. | 10/10 juist | 10/10 juist |
| T03 | Rolex Datejust 41, handelaar, DE (zie onder) | merk: Rolex<br>model: Datejust 41<br>referentienummer: onbekend<br>bouwjaar: onbekend<br>staat: zeer goed<br>doos_papieren: enkel doos<br>vraagprijs: 10500<br>munt: EUR<br>verkoper: handelaar<br>servicegeschiedenis: onbekend | De advertentie vermeldt Rolex Datejust 41, bouwjaar/koopdatum 2025, zeer goede staat, een aanwezige Rolex-box en geen expliciete garantiekaart of certificaat. De overige documenten worden alleen vaag genoemd als "weitere Unterlagen/Zubehör", waardoor dit volgens onze regel niet als papieren telt. Ook "Papieren" in de titel telt niet: alleen een expliciet genoemde garantiekaart of certificaat telt als papieren. Het referentienummer en de servicegeschiedenis worden niet vermeld. "Gewerblicher Nutzer" = handelaar. Bouwjaar aangepast op 2026-10-27, vóór de runs van week 5 (was 2025): "Baujahr / Kaufdatum: 2025" kan ook een aankoopjaar zijn, en volgens de prompt is dat "onbekend". Zie `log.md`. | 10/10 juist | 10/10 juist |
| T04 | Audemars Piguet Royal Oak Offshore Safari, handelaar, NL (zie onder) | merk: Audemars Piguet<br>model: Royal Oak Offshore<br>referentienummer: 26020ST.OO.D091CR.01<br>bouwjaar: 2012<br>staat: zeer goed<br>doos_papieren: enkel doos<br>vraagprijs: 16995<br>munt: EUR<br>verkoper: handelaar<br>servicegeschiedenis: laatste revisie 8 mei 2026 (interne revisie) | Staat "zeer goed": lichte gebruikssporen, een paar krasjes die niet opvallen. "Full set" in de titel en "met originele papieren" in de vaste velden zijn algemene vermeldingen en tellen niet als papieren. Het "echtheidscertificaat" op de pagina is uitleg van Chrono24, niet iets dat de verkoper meelevert. | 9/10 juist (doos_papieren fout, F1) | 9/10 juist (doos_papieren fout, F1) |
| T05 | Tudor Black Bay Chrono Panda, particulier, NL (zie onder) | merk: Tudor<br>model: Black Bay Chrono<br>referentienummer: onbekend<br>bouwjaar: onbekend<br>staat: zeer goed<br>doos_papieren: onbekend<br>vraagprijs: 3999<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: onbekend | Referentienummer en bouwjaar staan niet in de tekst, dus "onbekend", ook al is het referentienummer van dit model bekend. Het hoogste bod (€ 3.800) is geen vraagprijs. Staat "zeer goed": "zeer weinig gedragen" betekent gedragen, dus niet "nieuw", ondanks "zo goed als nieuw". Doos, papieren en service worden niet vermeld. | 10/10 juist | 10/10 juist |
| T06 | Omega Seamaster Planet Ocean, particulier, DE (zie onder) | merk: Omega<br>model: Seamaster Planet Ocean<br>referentienummer: 21530442103001<br>bouwjaar: onbekend<br>staat: zeer goed<br>doos_papieren: onbekend<br>vraagprijs: 3999<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: onbekend | Regel: alleen tellen wat letterlijk genoemd wordt. Merk Omega: Tudor staat in de titel omdat de verkoper een Tudor wil inruilen. Bouwjaar onbekend: "aus 2020" zegt niet of het om het bouwjaar of het aankoopjaar gaat. Staat "zeer goed": "Sehr Gut" en "Topzustand", maar wel gedragen. Doos_papieren onbekend: "Full-Set" noemt geen doos, garantiekaart of certificaat apart. "Vom offiziellen Konzessionär" zegt waar het horloge gekocht is, niet wat erbij zit. | 9/10 juist (bouwjaar fout, F1) | |
| T07 | Omega Seamaster Planet Ocean 600m, particulier, DE (zie onder) | merk: Omega<br>model: Seamaster Planet Ocean 600m<br>referentienummer: 23230422101003<br>bouwjaar: onbekend<br>staat: zeer goed<br>doos_papieren: enkel doos<br>vraagprijs: 3650<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: revisie bij Omega in 03.2026 | Model met "600m": zo staat het letterlijk bij "Modell:". Bouwjaar onbekend: er staat nergens een bouwjaar. "Garantie bis 05.2028" is een einddatum van de garantie, geen bouwjaar. Staat "zeer goed": "keine Kratzer" is heel goed, maar het horloge is wel gedragen en gereviseerd, en "nieuw" betekent nooit gedragen. Doos_papieren "enkel doos": de Holzbox wordt apart genoemd. "Papieren" en "Dokumenten" zijn algemeen. "24 Monate Garantie vom Hersteller" zegt dat er garantie is, maar noemt geen garantiekaart, dus telt het niet. Vraagprijs 3650: dat is de huidige prijs (VB = bespreekbaar). 4.150 is doorgestreept, dus de oude prijs. | 9/10 juist (doos_papieren fout, F3) | |
| T08 | Omega Seamaster Professional 300 "Bond", DE (zie onder) | merk: Omega<br>model: Seamaster Professional Diver 300M<br>referentienummer: onbekend<br>bouwjaar: onbekend<br>staat: gedragen<br>doos_papieren: enkel papieren<br>vraagprijs: 2450<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: batterij vervangen op 15.01.2024 | Referentienummer onbekend: er staan twee verschillende nummers (2221.8000 en "Referenz: 196 1504"), dus het is niet duidelijk welk het referentienummer is. Model: "Seamaster Professional 300" in de titel is een verkorte vorm van dezelfde naam, geen tegenstrijdigheid. Staat "gedragen": 32 kleine krassen op de lunette zijn duidelijke gebruikssporen. Doos_papieren "enkel papieren": een certificaat telt volgens de regel als papieren, en "Ohne Box" staat er letterlijk. Een batterijwissel is onderhoud, dus het hoort bij servicegeschiedenis. | 9/10 juist (referentienummer fout, F1) | |
| T09 | Tudor Black Bay 58 Blue, Engels, BE (zie onder) | merk: Tudor<br>model: Black Bay 58<br>referentienummer: 79030B<br>bouwjaar: 2021<br>staat: zeer goed<br>doos_papieren: full set<br>vraagprijs: onbekend<br>munt: EUR<br>verkoper: particulier<br>servicegeschiedenis: onbekend | Merk Tudor: "Overige merken" is een keuzelijst van 2dehands, de tekst zegt letterlijk Tudor. Bouwjaar 2021: anders dan bij T06 staat hier letterlijk "Year: 2021". Staat "zeer goed": "worn with care, no major scratches". Doos_papieren "full set": doos en warranty card worden apart genoemd. Vraagprijs onbekend: er staan twee prijzen (3100 en 3200) zonder uitleg welke geldt, net als de twee nummers bij T08. Verkoper particulier: "Private sale". | 9/10 juist (vraagprijs fout, F1) | |
| T10 | Rolex-opkoper Antwerpen, BE (zie onder) | merk: onbekend<br>model: onbekend<br>referentienummer: onbekend<br>bouwjaar: onbekend<br>staat: onbekend<br>doos_papieren: onbekend<br>vraagprijs: onbekend<br>munt: onbekend<br>verkoper: onbekend<br>servicegeschiedenis: onbekend | Dit is geen verkoopadvertentie maar een opkoper: er is geen horloge te koop. "Merk: Rolex" is alleen de categorie, er worden tien merken genoemd. De adverteerder is een handelaar, maar verkoopt niets, dus ook verkoper onbekend. | 8/10 juist (merk fout, F1; verkoper fout, F1) | |

Resultaat v1, T01–T05, na run 1 en 2: 98 op 100 velden juist. Beide fouten: T04 doos_papieren (F1), in beide runs hetzelfde.

Resultaat v2, T06–T10: 44 op 50 velden juist (n = 5, 1 run). Fouten: 5 × F1, 1 × F3.
- T06 bouwjaar (F1): "2020" stond wel in de advertentie, maar als aankoopjaar. Het model las het vol overtuiging als bouwjaar.
- T07 doos_papieren (F3): de Holzbox stond er letterlijk, het model heeft ze gemist.
- T08 referentienummer (F1): er stonden twee nummers, het model koos er zonder twijfel één.
- T09 vraagprijs (F1): twee prijzen, het model koos zonder twijfel 3200.
- T10 merk (F1): "Merk: Rolex" stond er, maar er werd geen horloge verkocht.
- T10 verkoper (F1): door de prompt, bij verkoper staat geen optie "onbekend".

Na wijziging (v3), alleen de foute inputs opnieuw, 1 run:
- T06: 9/10 juist (bouwjaar opnieuw fout, F1)
- T08: 9/10 juist (referentienummer nu juist; doos_papieren fout, F1: het model zegt het omgekeerde van "Ohne Box". De nieuwe regel gaat niet over doos of papieren, dus dit is waarschijnlijk variatie en geen gevolg van de wijziging. In Run 1 was dit veld juist.)
- T09: 10/10 juist (vraagprijs nu juist)

Totaal op T06, T08 en T09: van 27/30 (v2, Run 1) naar 28/30 (v3) velden juist (n = 3, 1 run).

Resultaat v4, T01–T10, run 1 en run 2: 188 op 200 velden juist (n = 10, 2 runs, v4, Haiku 5.5). Gedraaid met `claude -p --model haiku`, niet in ChatGPT. Ruwe uitvoer in `runs-v4/`. Fouten, telkens in beide runs:
- T03 bouwjaar (F3): "Baujahr / Kaufdatum: 2025" stond er, het model gaf "onbekend".
- T05 vraagprijs (F3): "€ 3.999,00" stond er, het model gaf "onbekend".
- T07 vraagprijs (F3): "3.650 € VB" stond er, het model gaf "onbekend".
- T08 doos_papieren (F3): "mit Zertifikat" en "Ohne Box" stonden er, het model gaf "onbekend".
- T10 merk (F1): "Rolex", maar er werd geen horloge verkocht.
- T10 verkoper (F1): "handelaar", ook met "onbekend" als optie in de prompt.

Juist gerekend: T06, T08 en T09 model, en alle servicegeschiedenissen (andere woorden of een extra detail, zie de beoordelingsregels).

## Inputs

### T01

```
Titel: Rolex Datejust 36 Rolex Oyster Perpetual Datejust – Tijdloze Klassieker – Zond

Tekst:
Tweedehands (Zeer goed) | Bouwjaar 1970 (Schatting) | Zonder originele doos | Zonder originele papieren

€ 4.195

Basisgegevens:
* Merk: Rolex
* Collectie: Datejust
* Model: Datejust
* Referentienummer: 1603
* Opwinden: Automatisch
* Materiaal horlogekast: Staal
* Materiaal horlogeband: Staal
* Bouwjaar: 1970 (Schatting)
* Staat: Tweedehands (Zeer goed)
* Het product heeft lichte gebruikssporen, zoals een paar krasjes, maar deze vallen niet op.
* Inbegrepen bij de levering: Zonder originele doos, zonder originele papieren
* Geslacht: Herenhorloge/Unisex
* Locatie: Nederland
* Prijs: € 4.195 (Vraagprijs)
* Beschikbaarheid: Product op voorraad

Beschrijving:
Mooi klassiek horloge. Verkeerd in zeer goede staat. Lichte gebruikssporen van het dragen. Ik heb het horloge uit een erfenis en vindt het een te duur horloge om zelf te dragen.

Verkoper: particulier
```

### T02

```
Titel: Omega Seamaster Dynamic vintage – Calibre 1430

Tekst:
Je vends une Omega Seamaster Dynamic vintage, avec mouvement quartz Omega calibre 1430. Très jolie montre avec son cadran noir/crème et ses détails rouges. Bracelet d’origine Omega. La montre présente quelques traces d’usure et petites rayures liées à son âge, visibles sur les photos. Vendue dans son état actuel. Prix : 650 €. Faire offre raisonnable. Possibilité seulement de remise en main propre.

Verkoper: particulier
```

### T03

Bron: kleinanzeigen.de, advertentie 3534218681.

```
Titel: Rolex Datejust 41mm mit Box und Papieren

Tekst:
Zum Verkauf steht eine Rolex Datejust 41 mit dem begehrten Wimbledon-Zifferblatt aus 2025.

Die Uhr befindet sich in einem sehr guten, unpolierten Zustand. Dadurch sind die originalen Konturen und Oberflächen erhalten. Die Kombination aus dem grauen Wimbledon-Zifferblatt mit grünen römischen Indizes, glatter Lünette und Jubilee-Band wirkt sportlich und gleichzeitig elegant.

Ausstattung / Details:
* Rolex Datejust 41
* Wimbledon-Zifferblatt
* Glatte Lünette
* Jubilee-Armband
* Edelstahl
* Baujahr / Kaufdatum: 2025
* Unpoliert
* Sehr guter Zustand
* Rolex Box vorhanden
* Weitere Unterlagen/Zubehör je nach Lieferumfang

Preis: 10.500 € VB
Art: Uhren
Zustand: Sehr Gut
Material: Stahl

Verkoper: handelaar (Gewerblicher Nutzer)
```

### T04

Bron: chrono24.nl, advertentie id46293295.

```
Titel: Audemars Piguet Royal Oak Offshore
Safari 26020s ''Full set 2012'' Like new!

Tekst:
Tweedehands (Zeer goed) | Bouwjaar 2012 | Met originele doos | Met originele papieren
€ 16.995

Locatie: Nederland, Franeker

Basisgegevens
Merk: Audemars Piguet
Collectie: Royal Oak Offshore
Model: Royal Oak Offshore
Referentienummer: 26020ST.OO.D091CR.01
Opwinden: Automatisch
Materiaal horlogekast: Staal
Materiaal horlogeband: Leer
Bouwjaar: 2012
Staat: Tweedehands (Zeer goed)
Het product heeft lichte gebruikssporen, zoals een paar krasjes, maar deze vallen niet op.
Most Recent Servicing: 8 mei 2026 Interne revisie
Inbegrepen bij de levering: Met originele doos, met originele papieren
Prijs: € 16.995

Verkoper: handelaar (Professionele handelaar)
```

### T05

Bron: 2dehands.be, advertentie m2422923233.

```
Titel: Tudor Black Bay (panda)

Tekst:
€ 3.999,00
Conditie: Zo goed als nieuw
Beschrijving:
Tudor Black Bay Chrono - Panda
Zeer weinig gedragen - uitstekende conditie
Biedingen: hoogste bod € 3.800,00

Verkoper: particulier
```

### T06

Bron: kleinanzeigen.de, advertentie 3539629410.

```
Titel: OMEGA SEAMASTER PLANET OCEAN, FULL-SET 2020, TOPZUSTAND, TUDOR

Tekst:
Prijs: 3.999 €
Zustand: Sehr Gut
Material: Stahl

Beschreibung:
Zum Festpreisverkauf oder mit einer marktgerechten Inzahlungnahme einer TUDOR Herrenuhr steht meine sich in einem technischen und optischen TOPZUSTAND befindliche

OMEGA SEAMASTER PLANET OCEAN 43 MM

Referenz 21530442103001

Full-Set aus 2020 vom offiziellen Konzessionär!

Privatverkauf, ohne Gewährleistung oder Garantie nach geltendem EU-Recht und gegen Barzahlung bei Selbstabholung oder mittels Wertversand nach vorheriger Banküberweisung oder Zahlung per Paypal Freunde & Familie!

Verkoper: Privater Nutzer
```

### T07

Bron: kleinanzeigen.de, advertentie 3532703164.

```
Titel: Omega Seamaster Planet Ocean 600m mit orig. Dokumenten + Box

Tekst:
Prijs: 3.650 € VB
Doorgestreepte prijs: 4.150 €
Zustand: Sehr Gut
Material: Stahl
Nur Abholung

Beschreibung:
Ich verkaufe meine Omega Seamaster in einem sehr gepflegten Zustand, keine Kratzer oder Gebrauchsspuren. Die Uhr kommt inklusive der originalen Holzbox und allen dazugehörigen Papieren.

- Modell: Omega Seamaster Planet Ocean 600m
- Inklusive Originalverpackung und Dokumenten
- Letzte Revision: 03.2026 bei Omega - Rechnung wird mitgeliefert
- 24 Monate Garantie vom Hersteller bis 05.2028
- Hochwertiges Edelstahlgehäuse und Armband
- Klassisches schwarzes Zifferblatt
- 42mm
- Keramik Lünette
- 60std Gangreserve
- Saphire Glas

REF 23230422101003

Versand inkl. Versicherung ist möglich

Verkoper: Privater Nutzer
```

### T08

Bron: kleinanzeigen.de, advertentie 3539972590. Juridische tekst onderaan ingekort.

```
Titel: Omega Seamaster Professional 300 Bond Version!

Tekst:
Prijs: 2.450 € VB
Zustand: Gut
Material: Stahl

Beschreibung:
Omega Seamaster Professional 300
Original Bond-Uhr Rote Schrift auf Zifferblatt „Seamaster" 2221.8000
Werk: ETA 1538 Quartz #
Details
Uhrengehäuse Nr.903....
- Versand Versand möglich
Beschreibung
Original Omega Seamaster Professional Diver 300M

41mm Quarzwerk Eta 1538 Giuchiert/Batterie 395 oder 399 oder 371 am15.01.2024 gewechselt
Referenz: 196 1504
Die Uhr hat bei der 32 kleine Kratzer auf der Lünette, siehe Bilder.

mit Zertifikat, ohne Papiere da Erbstück meines Vaters.
Ohne Box
Nur Selbstabholung und Bezahlung wegen schlechter Erfahrungen.
Sehr geehrter Käufer,
ich bin kein Händler, sondern nach BGB eine Privatperson und schließe hiermit die nach neuem EU-Recht vorgeschriebene Garantie und Umtauschrecht von einem Jahr auf alle hier angebotenen Produkte aus. [...]

Verkoper: Privater Nutzer
```

### T09

Bron: 2dehands.be, advertentie m2450197904.

```
Titel: Montre Tudor Black Bay 58 Blue 2021

Tekst:
Prijs: € 3.100,00
Conditie: Gebruikt
Merk: Overige merken
Materiaal: Staal

Beschrijving:
Tudor Black Bay 58 Blue (Ref. 79030B), 2021, full set
For sale: a Tudor Black Bay 58 in blue, purchased in 2021, complete with original box and papers. Worn with care and in excellent condition.
The Black Bay 58 brings Tudor's 1958 diver heritage into a compact, wearable size. At 39mm and just 11.9mm thick, it fits most wrists comfortably and slips easily under a cuff. The matte blue dial and bezel give it a classic, vintage-inspired look.

Specifications
Reference: 79030B
Year: 2021
Case: 39mm stainless steel, screw-down crown
Dial and bezel: blue, aluminium bezel insert
Movement: in-house Calibre MT5402, automatic, COSC-certified chronometer
Power reserve: approx. 70 hours
Water resistance: 200m
Crystal: sapphire

Condition
Worn with care, with no major scratches or dents. Keeps excellent time.

Included
Full set: original Tudor box, warranty card, and manuals.

Price
€3,200

Sale details
Private sale, in-person handover in Brussels only.
```

### T10

Bron: 2dehands.be, advertentie m2441511215. Ingekort, de rest is meer van hetzelfde.

```
Titel: Rolex verkopen Antwerpen? Gratis en vrijblijvende taxatie.

Tekst:
Prijs: Zie omschrijving
Merk: Rolex

Beschrijving:
UW HORLOGE VERKOPEN?

Overweegt u uw horloge te verkopen? Dan bent u van harte welkom om contact met mij op te nemen of langs te komen in mijn kantoor in het centrum van Antwerpen, recht tegenover de Vlaamse Opera.
Ik bekijk uw horloge graag persoonlijk en doe u vervolgens een duidelijk en vrijblijvend bod. De waardebepaling is gratis en er is absoluut geen druk om te verkopen.

WELKE HORLOGES KOOP IK?
Ik koop moderne, vintage en antieke horloges van particulieren, families, verzamelaars en andere klanten.
Ik ben onder andere geïnteresseerd in horloges van Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, A. Lange & Söhne, Breguet, Jaeger-LeCoultre, Cartier, Omega, Breitling, Zenith en andere gerenommeerde horlogemerken.

EEN PERSOONLIJKE EN VRIJBLIJVENDE WAARDEBEPALING
Wanneer u langskomt, bekijk ik uw horloge persoonlijk en in uw aanwezigheid.
Ik houd daarbij rekening met het model en de referentie, de staat, originaliteit en leeftijd van het horloge, de doos en papieren, de herkomst en de actuele internationale markt.
```

## Runs

Letterlijke uitvoer van elke run.

### T01 run 1

```json
{"merk":"Rolex","model":"Datejust","referentienummer":"1603","bouwjaar":1970,"staat":"zeer goed","doos_papieren":"geen","vraagprijs":4195,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T01 run 2

```json
{"merk":"Rolex","model":"Datejust","referentienummer":"1603","bouwjaar":1970,"staat":"zeer goed","doos_papieren":"geen","vraagprijs":4195,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T02 run 1

```json
{"merk":"Omega","model":"Seamaster Dynamic","referentienummer":"onbekend","bouwjaar":"onbekend","staat":"gedragen","doos_papieren":"onbekend","vraagprijs":650,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T02 run 2

```json
{"merk":"Omega","model":"Seamaster Dynamic","referentienummer":"onbekend","bouwjaar":"onbekend","staat":"gedragen","doos_papieren":"onbekend","vraagprijs":650,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T03 run 1

```json
{"merk":"Rolex","model":"Datejust 41","referentienummer":"onbekend","bouwjaar":2025,"staat":"zeer goed","doos_papieren":"enkel doos","vraagprijs":10500,"munt":"EUR","verkoper":"handelaar","servicegeschiedenis":"onbekend"}
```

### T03 run 2

```json
{"merk":"Rolex","model":"Datejust 41","referentienummer":"onbekend","bouwjaar":2025,"staat":"zeer goed","doos_papieren":"enkel doos","vraagprijs":10500,"munt":"EUR","verkoper":"handelaar","servicegeschiedenis":"onbekend"}
```

### T04 run 1

```json
{"merk":"Audemars Piguet","model":"Royal Oak Offshore","referentienummer":"26020ST.OO.D091CR.01","bouwjaar":2012,"staat":"zeer goed","doos_papieren":"full set","vraagprijs":16995,"munt":"EUR","verkoper":"handelaar","servicegeschiedenis":"Interne revisie op 8 mei 2026"}
```

### T04 run 2

```json
{"merk":"Audemars Piguet","model":"Royal Oak Offshore","referentienummer":"26020ST.OO.D091CR.01","bouwjaar":2012,"staat":"zeer goed","doos_papieren":"full set","vraagprijs":16995,"munt":"EUR","verkoper":"handelaar","servicegeschiedenis":"Interne revisie op 8 mei 2026"}
```

### T05 run 1

```json
{"merk":"Tudor","model":"Black Bay Chrono","referentienummer":"onbekend","bouwjaar":"onbekend","staat":"zeer goed","doos_papieren":"onbekend","vraagprijs":3999,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T05 run 2

```json
{"merk":"Tudor","model":"Black Bay Chrono","referentienummer":"onbekend","bouwjaar":"onbekend","staat":"zeer goed","doos_papieren":"onbekend","vraagprijs":3999,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T06 run 1 (v2)

```json
{
  "merk": "Omega",
  "model": "Seamaster Planet Ocean 43 MM",
  "referentienummer": "21530442103001",
  "bouwjaar": 2020,
  "staat": "zeer goed",
  "doos_papieren": "onbekend",
  "vraagprijs": 3999,
  "munt": "EUR",
  "verkoper": "particulier",
  "servicegeschiedenis": "onbekend"
}
```

### T07 run 1 (v2)

```json
{
  "merk": "Omega",
  "model": "Seamaster Planet Ocean 600m",
  "referentienummer": "23230422101003",
  "bouwjaar": "onbekend",
  "staat": "zeer goed",
  "doos_papieren": "onbekend",
  "vraagprijs": 3650,
  "munt": "EUR",
  "verkoper": "particulier",
  "servicegeschiedenis": "Laatste revisie in maart 2026 bij Omega; factuur wordt meegeleverd."
}
```

### T08 run 1 (v2)

```json
{   "merk": "Omega",   "model": "Seamaster Professional 300 Bond Version",   "referentienummer": "196 1504",   "bouwjaar": "onbekend",   "staat": "gedragen",   "doos_papieren": "enkel papieren",   "vraagprijs": 2450,   "munt": "EUR",   "verkoper": "particulier",   "servicegeschiedenis": "Batterij vervangen op 15 januari 2024." }
```

### T09 run 1 (v2)

```json
{
  "merk": "Tudor",
  "model": "Black Bay 58 Blue",
  "referentienummer": "79030B",
  "bouwjaar": 2021,
  "staat": "zeer goed",
  "doos_papieren": "full set",
  "vraagprijs": 3200,
  "munt": "EUR",
  "verkoper": "particulier",
  "servicegeschiedenis": "onbekend"
}
```

### T10 run 1 (v2)

De openende `{` viel weg bij het kopiëren. De uitvoer van het model was volledig.

```json
"merk": "Rolex",
  "model": "onbekend",
  "referentienummer": "onbekend",
  "bouwjaar": "onbekend",
  "staat": "onbekend",
  "doos_papieren": "onbekend",
  "vraagprijs": "onbekend",
  "munt": "onbekend",
  "verkoper": "handelaar",
  "servicegeschiedenis": "onbekend"
}
```

### T06 na wijziging (v3)

```json
{"merk":"OMEGA","model":"Seamaster Planet Ocean","referentienummer":"21530442103001","bouwjaar":2020,"staat":"zeer goed","doos_papieren":"onbekend","vraagprijs":3999,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"onbekend"}
```

### T08 na wijziging (v3)

```json
{"merk":"Omega","model":"Seamaster Professional 300 Bond Version","referentienummer":"onbekend","bouwjaar":"onbekend","staat":"gedragen","doos_papieren":"enkel doos","vraagprijs":2450,"munt":"EUR","verkoper":"particulier","servicegeschiedenis":"Batterij vervangen op 15.01.2024."}
```

### T09 na wijziging (v3)

```json
{   "merk": "Tudor",   "model": "Black Bay 58 Blue",   "referentienummer": "79030B",   "bouwjaar": 2021,   "staat": "zeer goed",   "doos_papieren": "full set",   "vraagprijs": "onbekend",   "munt": "EUR",   "verkoper": "particulier",   "servicegeschiedenis": "onbekend" }
```

### T01 run 1 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "Datejust", "referentienummer": "1603", "bouwjaar": 1970, "staat": "zeer goed", "doos_papieren": "geen", "vraagprijs": 4195, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T02 run 1 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Dynamic", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "gedragen", "doos_papieren": "onbekend", "vraagprijs": 650, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T03 run 1 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "Datejust 41", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": 10500, "munt": "EUR", "verkoper": "handelaar", "servicegeschiedenis": "onbekend"}
```

### T04 run 1 (v4, Haiku 5.5)

```json
{"merk": "Audemars Piguet", "model": "Royal Oak Offshore", "referentienummer": "26020ST.OO.D091CR.01", "bouwjaar": 2012, "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": 16995, "munt": "EUR", "verkoper": "handelaar", "servicegeschiedenis": "interne revisie op 8 mei 2026"}
```

### T05 run 1 (v4, Haiku 5.5)

```json
{"merk": "Tudor", "model": "Black Bay Chrono", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "onbekend", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T06 run 1 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Planet Ocean 43 mm", "referentienummer": "21530442103001", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "onbekend", "vraagprijs": 3999, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T07 run 1 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Planet Ocean 600m", "referentienummer": "23230422101003", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "Laatste revisie maart 2026 bij Omega, factuur wordt meegeleverd."}
```

### T08 run 1 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Professional 300", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "gedragen", "doos_papieren": "onbekend", "vraagprijs": 2450, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "Batterij gewisseld op 15.01.2024"}
```

### T09 run 1 (v4, Haiku 5.5)

```json
{"merk": "Tudor", "model": "Black Bay 58 Blue", "referentienummer": "79030B", "bouwjaar": 2021, "staat": "zeer goed", "doos_papieren": "full set", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T10 run 1 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "onbekend", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "onbekend", "doos_papieren": "onbekend", "vraagprijs": "onbekend", "munt": "onbekend", "verkoper": "handelaar", "servicegeschiedenis": "onbekend"}
```

### T01 run 2 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "Datejust", "referentienummer": "1603", "bouwjaar": 1970, "staat": "zeer goed", "doos_papieren": "geen", "vraagprijs": 4195, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T02 run 2 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Dynamic", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "gedragen", "doos_papieren": "onbekend", "vraagprijs": 650, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T03 run 2 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "Datejust 41", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": 10500, "munt": "EUR", "verkoper": "handelaar", "servicegeschiedenis": "onbekend"}
```

### T04 run 2 (v4, Haiku 5.5)

```json
{"merk": "Audemars Piguet", "model": "Royal Oak Offshore", "referentienummer": "26020ST.OO.D091CR.01", "bouwjaar": 2012, "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": 16995, "munt": "EUR", "verkoper": "handelaar", "servicegeschiedenis": "Interne revisie op 8 mei 2026."}
```

### T05 run 2 (v4, Haiku 5.5)

```json
{"merk": "Tudor", "model": "Black Bay Chrono", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "onbekend", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T06 run 2 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Planet Ocean", "referentienummer": "21530442103001", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "onbekend", "vraagprijs": 3999, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T07 run 2 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Planet Ocean 600m", "referentienummer": "23230422101003", "bouwjaar": "onbekend", "staat": "zeer goed", "doos_papieren": "enkel doos", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "laatste revisie in 03.2026 bij Omega, factuur wordt meegeleverd"}
```

### T08 run 2 (v4, Haiku 5.5)

```json
{"merk": "Omega", "model": "Seamaster Professional 300", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "gedragen", "doos_papieren": "onbekend", "vraagprijs": 2450, "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "batterij vervangen op 15.01.2024"}
```

### T09 run 2 (v4, Haiku 5.5)

```json
{"merk": "Tudor", "model": "Black Bay 58 Blue", "referentienummer": "79030B", "bouwjaar": 2021, "staat": "zeer goed", "doos_papieren": "full set", "vraagprijs": "onbekend", "munt": "EUR", "verkoper": "particulier", "servicegeschiedenis": "onbekend"}
```

### T10 run 2 (v4, Haiku 5.5)

```json
{"merk": "Rolex", "model": "onbekend", "referentienummer": "onbekend", "bouwjaar": "onbekend", "staat": "onbekend", "doos_papieren": "onbekend", "vraagprijs": "onbekend", "munt": "onbekend", "verkoper": "handelaar", "servicegeschiedenis": "onbekend"}
```
