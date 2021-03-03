# NDLA Litteraturhistorie

Docsify-dokumentasjon for NDLA Litteraturhistorie

MD-filene i `docs`-folderen kan ses rendret ved å åpne kjøre en webserver i folderen. Dette kan f.eks. gjøres ved å bruke [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) i VS Code.

NB! Denne webappen bruker Vue 3, ikke Vue 2 som vi har brukt tidligere

Komponentene bruker Vues [Single File Components](https://v3.vuejs.org/guide/single-file-component.html) og sidene er organisert ved hjelp av [vue-router](https://router.vuejs.org/)

HTML-sidene er bygget med [PUG](https://pugjs.org/api/getting-started.html), CSS med [SASS](https://sass-lang.com/)

## Node pakker brukt i klienten:

- [vue-router](https://router.vuejs.org/) - Sidestruktur
- [vue-i18n](https://github.com/kazupon/vue-i18n) - Språkhåndtering for UI

## Build pakker

ESLint, Prettier, Sass, Pug satt opp vha [Vue CLI](https://cli.vuejs.org/)

## Språkvalg

Man velger mellom forskjellige versjoner ved å bruke `/nb/` eller `/nn/` i URLen rett etter domenet. Hvis dette ikke er definert eller man har definert ugyldige verdier så vil man bli videresendt til bokmålsversjonen (`/nb/`)
