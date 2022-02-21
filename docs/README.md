# NDLA Litteraturhistorie

Docsify-dokumentasjon for NDLA Litteraturhistorie

MD-filene i `docs`-folderen kan ses rendret ved å åpne kjøre en webserver i folderen. Dette kan f.eks. gjøres ved å bruke [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) i VS Code.

NB! Denne webappen bruker Vue 3, ikke Vue 2 som vi har brukt tidligere

Komponentene bruker Vues [Single File Components](https://v3.vuejs.org/guide/single-file-component.html) og sidene er organisert ved hjelp av [vue-router](https://router.vuejs.org/)

HTML-sidene er bygget med [PUG](https://pugjs.org/api/getting-started.html), CSS med [SASS](https://sass-lang.com/)

## Node pakker brukt i klienten:

- [vue-router](https://router.vuejs.org/) - Sidestruktur
- [vue-i18n](https://github.com/kazupon/vue-i18n) - Språkhåndtering for UI
- [plyr](https://plyr.io/) - Videospiller
- [gsap](https://greensock.com/gsap/) - Drag-funksjonalitet på timeline.
- [core-js](https://github.com/zloirock/core-js) - JS polyfills

## Build pakker

ESLint, Prettier, Sass, Pug satt opp vha [Vue CLI](https://cli.vuejs.org/)

## Redigering av kode

Hvis man skal gjøre endringer i koden anbefales det å klone prosjeket fra Github, gjøre endringer lokalt og teste med utviklingsserveren som er en del av prosjektoppsettet.

Når man redigerer Pug-filer kan man risikere å gjøre endringer som gjør at man får feilmelding under en build. Tester man endringer på dev-server lokalt fanger man opp feilene opp tidligere å man unngår at kode med feil blir liggende i Github repositoryet.

Alternativt kan man også gjøre endringer direkte på Github, enten ved å gå inn på filen man vil redigere og trykke "Edit"-knappen (blyant-ikon) eller endre github.com til github.dev i URLen. Sistnevnte vil gjøre at man får opp en online editor i nettleseren som ligner på VS Code

### Anbefalt editor

Det anbefales å bruke Visual Studio Code som editor.

Anbefalte extensions:

- **Vetur** - Støtte for `.vue` filer
- **Prettier** - Autoformattering av koden
- **indent-rainbow** - Visualisering av tabulator-innrykk
- **ESLint** - Kontrollerer koden for feil o.l.

## Språkvalg

Man velger mellom forskjellige versjoner ved å bruke `/nb/` eller `/nn/` i URLen rett etter domenet. Hvis dette ikke er definert eller man har definert ugyldige verdier så vil man bli videresendt til bokmålsversjonen (`/nb/`)

## Kodetips

Se [egen side]("./pug.md") for mer informasjon om Pug.

### Runde periode-bilder i timeline

Disse bildene ligger er `png-filer` som ligger i folderen til hver enkelt periode. Dette er det samme bildet som blir vist i toppen av siden hvis man går inn på en periode.

Filnavnet er låst og må være **sirkel\_\<periode-id\>.png**, f.eks. `sirkel_norron.png`.

**NB!** Hvis det skal legges til nye perioder, pass på at størrelsen på sirkel-bildene er den samme som for de andre og at folderen perioden ligger i og period-id (som definert i `router/periods.js`) er likt.

### Tekstlinker til statiske filer i public folderen

Det er ikke alle lenkene som går til eksterne sider eller router-sider. Noen ligger som statiske filer i `public` folderen. For å lenke til disse må man bruke den globale variabelen `globalVars.publicPath`.

For å få tilgang til denne må man injecte den i script-delen.

```javascript
export default {
  name: "Book",
  inject: ["globalVars"],
  components: {
```

Deretter kan man bruke den på følgende måte

```
  p
    | Les
    a(:href="globalVars.publicPath + 'media/books/edda/haavamaal.html'" target="_blank") utdrag
    | fra Håvamål

eller evt.

  p Les <a :href="globalVars.publicPath + 'media/books/edda/haavamaal.html'" target="_blank">utdrag</a>fra
```
