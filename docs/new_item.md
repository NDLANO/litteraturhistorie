# Hvordan legge inn en ny bok

Krever grunnlegende kunnskap om Javascript

** NB! Navn på filer og foldere skal være uten mellomrom norske tegn/spesialtegn.**

## Opprette nye filer og foldere

1. Lag en ny folder for boken i `src/books`. Eksisterende bøker bruker etternavnet på forfatteren eller navnet på boken i tilfeller hvor forfatteren er ukjent. Det oppfordres til å følge samme system.

2. Deretter må det lages to `.vue` filer i den nye folderen, en for hvert språk. I folderen `_src/books/templates` ligger det to tomme filer som man kan bruke som utgangspunkt.  
    * Kopier disse to filene over i den nye folderen og gi dem samme navn som folderen, men med stor forbokstav og med NB og NN til slutt.

3. Bilder som skal brukes i artikkelen kopieres over i den nye folderen.

4. Hvis artikkelen skal inneholde lyd og bilder må det lages enda en ny folder under `public/media/books`. Denne bør ha samme navn som den nye foldere du laget i steg 1. Kopier lyd og videofiler over i denne folderen.

## Legge inn de nye artiklene i programmet

For at den nye artikkelen skal dukke opp i programmet må vi legge inn en del informasjon i forskjellige filer.

### src/router/books.js

Denne filen inneholder informasjon om alle bøkene som er tilgjengelige. Denne informasjonen ligger som en array med objekter. For hver bok legges det inn to objekter, et for bokmål, et for nynorsk.

Bøkene ligger sortert etter årstall. For å gjøre det enklere å finne fram i filen anbefales det at nye bøker føler denne sorteringen.

5. Dupliser de to objektene for en eksisterende bok.

6. Endre følgende felter i begge de nye objektene
    * **path** - teksten etter `books/` endres til navnet på den nye folderen du laget i steg 1.
    Dette blir urlen til de nye artiklene.
    * **name** - Her anbefales det å sette det samme som navnet på `.vue`-filene fra steg 2
    * **author** - Navn på forfatter. Hvis forfatter ikke er kjent, putt tomme hermetegn.
    * **year** - Publiseringsår. Dette brukes også til å bestemme hvilken periode boken tilhører.
    * **cover** - Ikke i bruk. Henger igjen fra Flash-versjonen.
    * **components** - Her er det to endringer som må gjøres;
        * webpackChunkName - navnet som står i enkle hermetegn endres til et unikt navn. Kan for eksempel være forfatternavn med nn og nb til slutt. 
        * Teksten i dobble hermetegn er path til de nye `.vue`-filene fra steg 2. Her endres teksten etter `books/` med foldernavn fra steg 1 og navn på vue-filer fra steg 2.

### src/js/booksData.js

Informasjon om de nye bøkene må også legges til i denne filen. Den er også sortert på publiseringsår. Her er det imidlertid bare ett objekt pr. bok.

7. Dupliser objektet til en eksisterende bok.

8. Endre følgende felter:
    * **id** - Må være likt navnet på folderen fra steg 1
    * **nnTitle** - Nynorsk boktittel
    * **nbTitle** - Bokmålstittel
    * **author** - forfatternavn
    * **year** - publiseringsår
    * **top** - Bestemmer hvor langt ned på skjermen knappen til boken kommer (i antall piksler). Større verdi = lenger ned på siden.
    
  `left` og `period` er ikke i bruk. `left` var opprinnelig tenkt brukt til å bestemme horisontal posisjon av knappen, men denne blir nå regnet ut automatisk basert på `year`.

  ## Legge inn innhold

  Nå skal knappen være synlig og man kan trykke på den for å gå inn på artikkelen. 
  
  Innhold legges inn i `.vue`-filene i [pug-format](https://pugjs.org/api/getting-started.html). 