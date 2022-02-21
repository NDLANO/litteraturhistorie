<template lang="pug">
PageBook(:showAuthor="false")
  br
  img.col.col6.right-image.mt20(src="./Kongespegelen_utklipp.jpg" alt="Gamalt handskrive dokument med tekst i to spaltar. Foto")
  p Til den høviske litteraturen høyrer også Kongsspegelen, ei lærebok i høvisk framferd. Å vere høvisk vil seie å gå fram på ein edel og moralsk måte. Boka er utforma som ein dialog mellom far og son. Sonen stiller spørsmål til faren, og faren gir råd om korleis ein ung mann skal te seg, anten han er kjøpmann, riddar eller konge. Forfattaren av Kongsspegelen er ukjend, men han viser stor kunnskap om det han skriv om.

  p 
    em Kongsspegelen 
    | høyrer til det aller siste frå perioden norrøn litteratur, og er truleg nedskriven rundt 1250. Boka er ei lærebok, og tittelen seier litt om kven boka var tiltenkt. Truleg er ho skriven for sønene til kong Håkon Håkonsson.

  h3 Høvisk litteratur
  figure.col.col6.right-image
    img(src="./Kongespegelen_En_ridder_blir_badet.jpg" alt="Riddar sit i badekar av tre. Omkransa av kvinner som har med seg vin, blomekrans og steller sår. Illustrasjon")
    figcaption Ein riddar blir bada, frå eit handskrift på 1300-talet
  
  p Med høvisk litteratur meiner vi litteratur som er knytt til kongen og hoffet. «Høvisk» kjem av hoff. 

  p På 1200-talet var kongemakta stor i Noreg, og kong Håkon Håkonsson var interessert i europeisk litteratur. Han fekk omsett ein del fransk og engelsk litteratur til norrønt. Ved det franske hoffet skreiv dei forteljingar på folkespråket, ikkje på latin. Den norske kongen fekk omsett somme av dei til norrønt. Eit eksempel på ei slik forteljing er «Tristram og Isond», som handlar om forboden og tragisk kjærleik. 

  p Handlinga i desse forteljingane går føre seg i eit riddarmiljø ved eit hoff. Derfor kallar vi dei riddarromanar. Riddaren var eit mannsideal på den tida, og desse historiene handlar gjerne om kamp og tragisk kjærleik mellom to som ikkje får kvarandre.

  p Kong Håkon Håkonsson får òg omsett Strengleikar, ei samling kjærleiksnoveller med erotisk innhald.

  figure.col.col4.right-image
    img(src="./Kongespegelen_Kristen_litteratur.jpg" alt="Utskore figur av mann som sit på trone. Han har krone på hovudet, øks og rikseple i hendene. Føtene kviler på ryggen til ein soldat. Foto")
    figcaption Olav den heilage frå Överslö kyrkje i Sverige
  h3 Kristen litteratur
  
  p Den kristne litteraturen i norrøn tid omfattar preiker, helgenlegender og krist ne kvad. Tekstane vart skrivne ned av prestar, munkar og nonner, og dei brukte latinske bokstavar. 

  p Den eldste boka som er funnen, er Gammalnorsk Homiliebok. Det er ei bok med utvalde bibeltekstar og preiker.  I tillegg finst det helgenlegender om personar som på grunn av trua må gå gjennom store pinsler før dei døyr. Så skjer det under og mirakel som viser at dei er helgenar. Slike legender er det mange av om Olav den heilage.

  h3 Det norrøne språket
  p Perioden frå rundt 1050 til 1350 kallar vi yngre norrøn tid eller gammalnorsk tid. Talespråket i Noreg i denne perioden, seinare også på Island, kallar vi norrønt. 

  p Med kristendommen kom det skrivekunnige folk til Noreg. Dei skreiv først på latin og brukte det latinske alfabetet. Etter 1050 vart det skrive mange religiøse, historiske og administrative tekstar både på latin og på norrønt språk.

  p Frå 1200-talet og utover fekk vi mange lågtyske ord gjennom hanseatane. Hanseatiske kjøpmenn slo seg ned i Bergen, Tønsberg, Oslo og andre norske byar. Lågtysk var det allmenne handelsspråket i heile Nord-Europa og påverka derfor alle dei nordiske språka.

  p Kong Håkon Håkonsson fekk omsett utanlandsk litteratur til norsk, mellom anna franske kvad og riddarromanar. Slik kom ein del ord frå det europeiske riddarmiljøet inn i språket, som fru, herra og jungfru frå tysk.

  a(href="media/books/kongespegelen/kongespegelen_utdrag.html" target="_blank") Utdrag frå Kongsspegelen

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
