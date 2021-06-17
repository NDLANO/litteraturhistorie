<template lang="pug">
PageBook
  
  img.col.col7.right-image(src='./NielsKlim_Utklipp.jpg' alt='')
  P Niels Klims underjordiske rejse var den eneste romanen Ludvig Holberg skrev, og det gjorde han på latin: Nicolai Klimii Iter Subterraneum kom ut i 1741. 

  P Boka er en fantastisk fortelling om en ung mann som faller ned i en hule og får besøke mange ulike samfunn i jordas indre. Men formålet med fortellingen er mer enn underholdning: Gjennom skildringen av slike fantasisamfunn kritiserer Holberg indirekte samfunnsforholdene i Danmark-Norge og i andre europeiske land han hadde besøkt. 

  P Holberg visste at innholdet ville vekke harme hos myndighetene, og sørget for at boka ble gitt ut i Tyskland. På den måten unngikk han sensur (statlig kontroll eller forbud). 

  P Romanen ble straks en suksess og oversatt til flere språk. Alt i 1742 kom boka ut også på dansk, med tittelen Niels Klims underjordiske rejse. Kirka og den danske kongen likte boka dårlig, men Holberg var en populær forfatter i Danmark, og det var derfor nytteløst å forby boka. 
  
  h3 Innhold 
  img.col.col6.left-image.mt5(src='./NielsKlim_Innhold1.jpg' alt='')
  p Bokas hovedperson, Niels Klim, er nylig uteksaminert fra Universitetet i København og reiser hjem til fødebyen Bergen. Her dyrker han interessene sine i naturvitenskap, og han er stadig på forskerferd. En dag er han på Fløyfjellet og oppdager en hule i jorda. Ved et uhell ramler han ned i denne hula, og dermed starter reisen. 

  p Klim lander på en planet i jordas indre som innbyggerne kaller Nazar. Det første landet han kommer til, er Potu. Her finnes det ingen adel, og kvinner og menn er likestilt. Dessuten er det religionsfrihet i Potu. Klim kan ikke skjønne at kvinner skal ha de samme rettighetene som menn. Han foreslår derfor at kvinnene skal nektes høye stillinger i landet. Men dette synes ikke innbyggerne er noen god idé, og Klim blir forvist fra Potu. 

  p Klim blir også kjent med flere andre samfunn på planeten Nazar. Til slutt faller han igjen i en hule og er plutselig tilbake i Bergen. Her får han vite at han har vært borte i tolv år. En gammel venn, borgermesteren Abelin, gir Klim husrom og skriver ned alt han forteller om reisen sin. 

  .flex.flex-justify-space-evenly
    img.col.col5(src="./NielsKlim_Innhold2.jpg" style="height: 100%; align-self: center")
    img.col.col5(src="./NielsKlim_Innhold3.jpg")

  
  h3 Sjanger 
  p Niels Klims underjordiske rejse er en satirisk roman. Satire er kritikk blandet med humor og latterliggjøring, et sterkt våpen som ofte blir brukt for å ramme de mektige i samfunnet. Mange av de fantasisamfunnene som er skildret i boka, har fellestrekk med land som Holberg selv hadde reist i, og som han nå kritiserte og latterliggjorde. Men kritikken er indirekte: Leseren må selv tenke seg denne sammenhengen mellom fortelling og virkelighet. Vi kan derfor si at deler av romanen skal oppfattes allegorisk, som et bilde på noe annet. 

  figure.col.col4.right-image.mt5
   img(src='./NielsKlim_Førsteutgaven_av_Gullivers_reise.jpg' alt='')
   figcaption Førsteutgaven av Gullivers reiser

  p Av de samfunnsforholdene Holberg kritiserte, nevner vi mangel på åndsfrihet, religionsfrihet og likestilling. Men også svakheter som pyntesyke og dumskap var han opptatt av. Holberg var en typisk representant for opplysningstida og ville at folk skulle bruke fornuften sin som rettesnor for alt de gjorde. 

  p På 1700-tallet kom det ut mange bøker som spekulerte i hva menneskene ville oppdage i jordas indre, på månen eller på andre uoppdagete steder. Holberg var helt klart inspirert av romanen Gullivers reiser av Jonathan Swift, som kom ut allerede i 1726. Både Gullivers reiser og Niels Klims underjordiske rejse kan sies å være forløpere for sciencefictionsjangeren. 
  
  h3 Språket på Holbergs tid 
  img.col.col6.left-image(src='./NielsKlim_Holberg.jpg' alt='')
  p Ludvig Holberg skrev romanen Niels Klims underjordiske rejse på latin. Det var vanlig blant lærde menn på 1700-tallet. Dansk og norsk var lavstatusspråk. Ved hoffet snakket de bare tysk og fransk, og fransk ble også brukt i skrift og tale av den norske overklassen. 

  p Etter hvert begynte Holberg å gjøre narr av denne pompøse stilen. Han skrev på dansk og var dermed med på å utvikle et moderne dansk skriftspråk. Holberg ville begrense bruken av tyske, franske og latinske ord i det danske språket, men slike ord kunne også gjøre det danske språket rikere. 

  p Holbergs Epistler (1748–1754) er skrevet på dansk. Her legger Holberg fram meningene sine om så mangt, fra parykkens historie til nestekjærlighet. En av epistlene heter ”Hvorfor jeg foretrekker fruentimmer-selskab”. 
  
  h3 Ludvig Holberg 
  p Ludvig Holberg (1684–1754) var satiriker, komedieforfatter, historiker og opplysningsmann. Han skrev det satiriske verket Peder Paars som en parodi på antikkens helteepos, og hele 26 komedier. I tillegg skrev han essay og vitenskapelige verk. Niels Klims underjordiske rejse er Holbergs eneste roman.  

  p Ludvig Holberg slo seg ned i København etter flere reiser. Her gjorde han en vitenskapelig karriere. Han vurderte også å gifte seg, og her kan du høre hvordan det gikk til. 

  //Medieinnhold. Beholde bilder. 

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
