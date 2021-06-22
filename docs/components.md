# Komponenter

For å forenkle innlegging av data har vi laget noen egne komponenter

## NdlaAudio

## NdlaVideo

## NrkVideo

Dette er en komponent for å integrere videoer fra [NRK Skole](https://www.nrk.no/skole).

1. Når man har søkt opp og funnet videoklippet man vil bruke må man gå inn på **EMBED** fanen og finne koden som står i feltet `data-nrk-id`. I bildet under er dette `3636`.

![Eksempel på embed-kode](./nrk.JPG)

2. Sørg for at komponenten `NrkVideo` er importert og lagt til listen av komponenter.

![NrkVideo import](./nrkvideo_import.JPG)

3. Legg inn komponenten på ønsket sted på siden. Koden fra steg 1 legges inn i parameter `id`.

![NrkVideo bruk](./nrkvideo_bruk.JPG)
