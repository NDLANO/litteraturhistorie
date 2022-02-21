<template lang="pug">
PageBook(:showAuthor="false")
  br
  img.col.col6.right-image.mt20(src="./Kongespegelen_utklipp.jpg" alt="Gammelt håndskrevet dokument med tekst i to spalter. Foto")
  p Til den høviske litteraturen hører også Kongespeilet, ei lærebok i høflig framferd. Å være høvisk vil si å oppføre seg på en edel og moralsk måte. Boka er utformet som en dialog mellom far og sønn. Sønnen stiller spørsmål til faren, og faren gir råd om hvordan en ung mann skal oppføre seg, enten han er kjøpmann, ridder eller konge. Forfatteren av Kongespeilet er ukjent, men han viser stor kunnskap om det han skriver om. 

  p 
    em Kongespeilet 
    | hører til det aller siste fra perioden norrøn litteratur, og er trolig nedskrevet rundt 1250. Boka er ei lærebok, og tittelen sier litt om hvem boka var tiltenkt. Trolig er den skrevet for sønnene til kong Håkon Håkonsson. 

  h3 Høvisk litteratur 
  figure.col.col6.right-image
    img(src="./Kongespegelen_En_ridder_blir_badet.jpg" alt="Ridder sitter i badekar av tre. Omkranset av kvinner som bringer vin, blomsterkrans og steller sår. Illustrasjon")
    figcaption En ridder blir badet, fra et handskrift på 1300-tallet
  
  p Med høvisk litteratur mener vi litteratur som er knyttet til kongen og hoffet. «Høvisk» kommer av hoff.

  p På 1200-tallet var kongemakta stor i Norge, og kong Håkon Håkonsson var interessert i europeisk litteratur. Han fikk oversatt en del fransk og engelsk litteratur til norrønt. Ved det franske hoffet skrev de fortellinger på folkespråket, ikke på latin. Den norske kongen fikk oversatt noen av dem til norrønt. Et eksempel på en slik fortelling er «Tristram og Isond», som handler om forbudt og tragisk kjærlighet. 

  p Handlingen i disse fortellingene foregår i et riddermiljø ved et hoff. Derfor kaller vi dem ridderromaner. Ridderen var et mannsideal på den tida, og disse historiene handler gjerne om kamp og tragisk kjærlighet mellom to som ikke får hverandre. 

  p Kong Håkon Håkonsson får også oversatt Strengleikar, en samling kjærlighetsnoveller med erotisk innhold. 

  figure.col.col4.right-image
    img(src="./Kongespegelen_Kristen_litteratur.jpg" alt="Utskåret figur av mann som sitter på trone. Han har krone på hodet, øks og rikseple i hendene. Føttene hviler på ryggen til en soldat. Foto")
    figcaption Olav den hellige fra Överslö kirke i Sverige
  h3 Kristen litteratur 
  p Den kristne litteraturen i norrøn tid omfatter prekener, helgenlegender og kristne kvad. Tekstene ble nedskrevet av prester, munker og nonner, og de brukte latinske bokstaver.

  p Den eldste boka som er funnet, er Gammelnorsk Homiliebok. Det er ei bok med utvalgte bibeltekster og prekener. I tillegg finnes det helgenlegender om personer som på grunn av sin tro må gjennomgå store pinsler før de dør. Så skjer det under og mirakler som viser at de er helgener. Slike legender er det mange av om Olav den hellige. 
  
  h3 Det norrøne språket
  p Perioden fra rundt 1050 til 1350 kalles yngre norrøn tid eller gammelnorsk tid. Talespråket i Norge i denne perioden, seinere også på Island, kaller vi norrønt. 
  p Med kristendommen kom det skrivekyndige folk til Norge. De skrev først på latin og brukte det latinske alfabetet. Etter 1050 ble det skrevet mange religiøse, historiske og administrative tekster både på latin og på norrønt språk.

  p Fra 1200-tallet og utover fikk vi mange nedertyske ord gjennom hanseatene. Hanseatiske kjøpmenn slo seg ned i Bergen, Tønsberg, Oslo og andre norske byer. Nedertysk var det vanlige handelsspråket i hele Nord-Europa og påvirket derfor alle de nordiske språkene. 

  p Kong Håkon Håkonsson fikk oversatt utenlandsk litteratur til norsk, blant annet franske kvad og ridderromaner. Slik fikk en del ord fra det europeiske riddermiljøet innpass i språket, som fru, herra og jungfru fra tysk. 

  a(href="media/books/kongespegelen/kongespegelen_utdrag.html" target="_blank") Utdrag fra Kongespeilet

  // Medieinnhold: Beholde bilder

</template>

<script>
import PageBook from "@/components/PageBook";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";

export default {
  name: "Book",
  components: {
    NdlaAudio,
    NdlaVideo,
    PageBook,
  },
};
</script>

<style lang="scss" scoped></style>
