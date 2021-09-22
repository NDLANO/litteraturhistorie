<template lang="pug">
PageBook(:showAuthor="false")
  br
  img.col.col6.left-image.mt20(src="./Dekameronen_Innhold.jpg" alt="Gammelt håndskrevet dokument. Over teksten sees et bilde av en kvinne i en seng. Foran sitter mann med strengeinstrument. Et annet bilde viser ei gruppe kvinner og menn. Foto ")

  p 
    em Dekameronen 
    | er en samling på hundre noveller av den italienske dikteren Giovanni Boccaccio. Samlingen er trolig  skrevet i årene 1348–1353. Boka er Boccaccios hovedverk og det eneste verket hans som er bevart. Boccaccio skrev novellene sine på folkespråket, italiensk, og regnes som grunnleggeren av italiensk prosadiktning. 

  p Tittelen 
    em Il Decamerone 
    | betyr tidagersverket. Rammefortellingen i boka gir oss bakgrunnen for denne tittelen: Ti ungdommer flykter fra pesten som hjemsøker byen Firenze, til et hus på landet. For å få tida til å gå forteller de hverandre historier. Alle må finne på en ny historie hver dag, og etter ti dager har de fortalt hundre noveller. Så drar de tilbake til Firenze.

  p Dekameronen er et bevisst komponert verk. Boccaccio samler novellene tematisk ved hjelp av rammefortellingen: Hver dag velger ungdommene en ny konge eller en ny dronning, som så avgjør temaet som alle fortellingene skal handle om denne dagen. 

  NdlaAudio(source="media/books/dekameronen/dekameronen_Giovanni_Boccaccio.mp3")

  NdlaVideo(
    source="media/books/dekameronen/Dekameronen.mp4"
    captionsUrl="media/books/dekameronen/Dekameronen.nb-no.vtt"
  )


  //Film her. Hva viser den?

  h3 Innhold
  p Bakgrunnen for rammefortellingen i Dekameronen er en pestsykdom som rammer Firenze. Denne pestsykdommen er en historisk realitet, for våren og sommeren 1348 ble byen hjemsøkt av pesten. 

  p Samlingen inneholder en del kjærlighetshistorier, men også mange tekster om helt andre emner. Boccaccio er ikke opptatt av å skildre fysisk kjærlighet i detalj, men han vil vise hvilken sterk kraft kjærligheten er, og hvor mye menneskene er villige til å gjøre for å vinne den de elsker. 

  p Persongalleriet i novellene omfatter mennesker fra alle lag av folket. Hovedpersonene må ofte kjempe mot dumskap og vanetenkning, for eksempel unge forelskete par som er i konflikt med vrange foreldre. Andre fortellinger handler om hvor galt det kan gå når en ikke kan leve i pakt med naturgitte følelser og drifter. Det er særlig munkene og munkevesenet som blir latterliggjort i disse fortellingene. 

  h3 Sjanger
  img.col.col7.right-image(src="./Dekameronen_Sjanger.jpg" alt="Gammelt håndskrevet dokument med tekst i to spalter. Rikt dekorert med ulike motiv. Foto")
  p Ordet 
    em novelle 
    | kommer fra italiensk og betyr nyhet. På 1200-tallet ble begrepet første gang brukt om fortellinger. På den tida var novellene korte, populære fortellinger om mer eller mindre aktuelle hendinger fra virkeligheten.

  p Boccaccio regnes som skaperen av den skjønnlitterære novellen. Verket hans har inspirert andre europeiske diktere som Geoffrey Chaucer, Margarete av Navarra og Miguel de Cervantes til å skrive liknende samlinger. Mange har også utnyttet stoffet i fortellingene til å skape nye verk, for eksempel William Shakespeare og Jonathan Swift. 
  
  p I dag bruker vi begrepet novelle bare om relativt korte skjønnlitterære fortellinger, gjerne slike som konsentrerer seg om en hending som utgjør et vendepunkt i en persons liv.    


  //Medieinnhold: Beholde bilder. Vurdere filmen. Tror kanskje denne er for gammel, om det er den jeg tror

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
