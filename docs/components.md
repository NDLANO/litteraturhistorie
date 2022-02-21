# Komponenter

For å forenkle innlegging av data har vi laget noen egne komponenter.

## PagePeriod og PageBook

Dette er hovedkomponentene for henholdsvis perioder og bøker. Alle artikkelsider for perioder og bøker bør bruke disse.

I `src/books/_templastes` ligger det to tomme filer, en for bokmål, en for nynorsk, som kan brukes som utgangspunkt for både nye bøker og nye perioder.

Her ligger `PageBook` som eneste komponent i roten. Skal man lage en ny periode erstattes denne med `PagePeriod`. **NB! Husk å oppdatere import og components i `<script>`-delen av koden også.**

![Book template](./book_template.JPG)

Alt innholdet legges en `tab` inn (og erstatter `p Bokmålsinnhold plasseres her`).

## ImageTextBlock

Plasserer et bilde til venstre og tekst til høyre.

![ImageTextBlock eksempel](./ImageTextBlock.JPG)

Parametre:
`image`: Filnavn relativt til lokasjonen til filen den brukes i. Ligger innholdsfil og bilde i samme folder kan image f.eks. bli `./mitt-bilde.jpg`.

`imageColumns`: Hvor mange kolonner (av 12) bildet skal ta. Standard er 4. Ikke nødvendig.

`imageCaption`: Bildetekst. Ikke nødvendig. NB! Man kan også bruke slots til bildetekst (se forklaring under).

`altText`: Alt-tekst til bildet. Ikke nødvendig, men påkrevd hvis man skal følge reglene for universell utforming.

Teksten som kommer til høyre legges inn i selve taggen. I PUG-koden vil det si at den må ha et innrykk i forhold til `ImageTextBlox`. Eksempel:
![ImageTextBlock bruk](./ImageTextBlock_eksempel1.JPG)

Må man bruke HTML i bildeteksten, for eksempel for å få kursiv i tittelen som i bildet av Tor over, må man legge teksten i en såkalt "slot" i steden for å bruke `imageCaption`. Dette gjør man ved å legge bildeteksten i følgende tag: `template(slot:caption)`.

Eksempel:

![ImageTextBlock Caption med slot](./ImageTextBlock_eksempel2.JPG)

For å bruke komponenten må den legges til siden hvor man vil bruke den. Se seksjonen for **NrkVideo** under for hvordan dette gjøres, men erstatt `NrkVideo` med `ImageTextBlock`;

## NdlaAudio

Komponenten brukes for å spille av lydfiler. Basert på [Plyr](https://plyr.io/) open source media player.

Den har to parametre:

`source` - Url til lydfilen. Kan være både en lokal eller ekstern URL. For lokale URLer er roten `/public`.

`description` - En tekst som vises under lydfilen.

Komponenten har også to slots som kan brukes til å legge inn henholdssvis mer tekst og description med HTML.

Default slot brukes primært til å legge inn tekstversjon av det som sies i lydfilen. Hvis det legges noe i slotten vil playeren få en knapp "Vis tekst". Ved å trykke på denne kan brukeren få opp innholdet i slotten.

Man kan også legge inn description ved å bruke `template(slot:description)` taggen. Dette kan f.eks. brukes til å legge inn en lenke i beskrivelsen av lydfilen. Hvis det både er lagt inn description som parameter og slot er det parameteret som vil vises.

NB! Legger man inn bildetekst både som imageCaption og slot så vil det være imageCaption teksten som blir vist.

**Eksempel på bruk**

![NdlaAudio bruk](./NdlaAudio_eksempel.JPG)

![NdlaAudio resultat](./NdlaAudio_readmore02.JPG)

## NdlaVideo

Komponent for å spille av video. Basert på [Plyr](https://plyr.io/) open source media player. Kan spille av lokale og eksterne filer, i tillegg til YouTube.

Har følgende parametre:

`source` - URL til videofilen. Kan både være lokal URL, ekstern URL eller URL til YouTube. For lokale URLer er roten `/public`.

`captionsUrl` - URL til `.vtt` fil med teksting. Ikke nødvendig.

`description` - Tekstbeskrivelse som vises under videovinduet?

`poster` - URL til bildefil som kan vises før videoen er lastet. Ikke testet.

`playerType` - Brukes hvis man vil vise YouTube-videoer. Dette er en streng som må være enten `local` eller `youtube`. Default er `local`, så det er kun nødvendig å definere den hvis man skal spille av YouTube.

**Eksempel på bruk**

![NdlaVideo bruk](./NdlaVideo_eksempel.JPG)

![NdlaVideo resultat](./NdlaVideo_resultat.JPG)

## NrkVideo

Dette er en komponent for å integrere videoer fra [NRK Skole](https://www.nrk.no/skole). Det er i utgangspunktet embed-koden som er hentet fra NRK sine sider, men gjort om til en Vue-komponent.

1. Når man har søkt opp og funnet videoklippet man vil bruke må man gå inn på **EMBED** fanen og finne koden som står i feltet `data-nrk-id`. I bildet under er dette `3636`.

![Eksempel på embed-kode](./nrk.JPG)

2. Sørg for at komponenten `NrkVideo` er importert og lagt til listen av komponenter.

![NrkVideo import](./nrkvideo_import.JPG)

3. Legg inn komponenten på ønsket sted på siden. Koden fra steg 1 legges inn i parameter `id`.

![NrkVideo bruk](./nrkvideo_bruk.JPG)
