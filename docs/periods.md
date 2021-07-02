# Perioder

Periodene er definert i to filer. Disse inneholder til en hvis grad de samme dataene. Ikke ideelt, men det var den enkleste måten å

- `src/js/periodsData.js` - Denne filen er i utgangspunktet generert ut fra XML-filene til originalen. Den har blitt oppdatert med endringer og tillegg.

  **Disse dataene blir brukt i TimeLine.vue og TimelineSection.vue.**

  Inneholder en array med et objekt for hver periode. Eksempel

  ```javascript
  {
    id: "opplysning", // ID. Må være unik
    nnTitle: "Opplysningstid", // Nynorsk tittel
    nbTitle: "Opplysningstid", // Bokmålstittel
    from: "1700", // Når perioden starter
    to: "1800", // Når perioden slutter
    nnTimeLabel: "1700-talet", // Nynorsk tidsbeskrivelse, ikke påkrevd
    nbTimeLabel: "1700-tallet", // Bokmål tidsbeskrivelse, ikke påkrevd
    layer: 0, // Ikke i bruk
    left: 0, // Ikke i bruk
    widthMultiplier: 1.3, // Påvirker hvor bred hvert år i perioden skal være i timeline. Ikke påkrevd.
    yearMarkings: [ // Array som sier hvilke årstall (med vertikale striper) som skal være synlig i timeline
      [1700, 268], // Årstall, antall piksler
      [1750, 321],
    ],
  },
  ```

  Kommentarer

  - Hvis `nn/nbTimeLabel` brukes som tekst i det lille blå feltet over periodetittelen i timeline. Hvis variabelen ikke er definert eller er en tom streng vil `from` og `to` bli brukt i stedet.
  - `widthMultiplier` påvirker hvor bred perioden skal være. Denne verdien ganges med pikselverdien til `yearMarkings` når timeline blir generert. Det betyr at en verdi mindre enn `1` vil gjøre perioden smalere, større enn `1` vil gjøre den bredere. Dette kan være nyttig hvis man har f.eks. en kort periode med mange bøker/sentrale personer. For å få plass til disse uten at timeline blir alt for høy kan den strekkes. `1` vil bli brukt i utregningen hvis den ikke er definert.
  - Ikke inkluder siste år i perioden i `yearMarkings`. Koden vil automatisk bruke `from` fra neste periode. **Unntaket er siste periode**

- `src/router/periods.js` - Dette er router-filen for periodene, dvs. filen som bestemmer URL for hver enkelt periode og hvilke komponenter som skal lastes. Den inneholder også en del data i `meta` objektet.

  Siden hver målform har sin egen URL ligger hver periode inne med to objekter

  ```javascript
    {
    path: "/nn/periods/opplysning", // URL. Må være unik
    name: "OpplysningNN", // ID. Må være unik
    meta: {
      title: "Opplysningstid",
      from: "1700",
      to: "1800",
      timeLabel: "1700-talet",
      color: "0xFF9900", // Ikke i bruk
      fillColor: "0xFFCC7F", // Ikke i bruk
      y: "20", // Ikke i bruk
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'opplysningnn' */ "../periods/opplysning/OpplysningNN.vue" // Path til vue-fil som inneholder nynorsk-artikkelen
        ),
    },
  },
  {
    path: "/nb/periods/opplysning",
    name: "OpplysningNB",
    meta: {
      title: "Opplysningstid",
      from: "1700",
      to: "1800",
      timeLabel: "1700-tallet",
      color: "0xFF9900",
      fillColor: "0xFFCC7F",
      y: "20",
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: 'opplysningnb' */ "../periods/opplysning/OpplysningNB.vue" // Path til vue-fil som inneholder bokmåls-artikkelen
        ),
    },
  },
  ```

  `title`, `from`, `to` og `timeLabel` bør ha det samme innholdet som i `periodsData.js`.

  Disse metadataene brukes i PagePeriod/Book.vue og PageBanner.
