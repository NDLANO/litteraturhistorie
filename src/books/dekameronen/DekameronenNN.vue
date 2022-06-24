<template lang="pug">
PageBook(:showAuthor="false")
  br
  img.col.col6.left-image.mt20(src="./Dekameronen_Innhold.jpg" alt="Gamalt handskrive dokument. Over teksten kan du sjå eit bilete av ei kvinne i ei seng. Framfor det sit ein mann med strengeinstrument. Eit anna bilete viser ei gruppe kvinner og menn. Foto ")
  
  p 
    em Dekameronen 
    | er ei samling på hundre noveller av den italienske diktaren Giovanni Boccaccio. Samlinga er truleg skriven i åra 1348–1353. Boka er hovudverket til Boccaccio og det einaste verket som er bevart. Boccaccio skreiv novellene sine på folkespråket, italiensk, og blir rekna for grunnleggjaren av den italienske prosadiktinga.

  p Tittelen 
    em Il Decamerone 
    | tyder tidagarsverket. Rammeforteljinga i boka gir oss bakgrunnen for denne tittelen: Ti ungdommar flyktar frå pesten som heimsøkjer byen Firenze, til eit hus på landet. For å korte tida fortel dei kvarandre historier. Alle må finne på ei ny historie kvar dag, og etter ti dagar har dei fortalt hundre noveller. Så dreg dei attende til Firenze.

  p 
    em 
      a(href="https://www.nb.no/items/cd9f952d7ebfd65f7e0b8e7f84d3986c?page=9&searchText=dekameronen" target="blank") Dekameronen 
    | er eit bevisst komponert verk. Boccaccio samlar novellene tematisk ved hjelp av rammeforteljinga: Kvar dag vel ungdommane ein ny konge eller ei ny dronning, som så avgjer temaet som alle forteljingane denne dagen skal handle om. 

  NdlaAudio(source="media/books/dekameronen/dekameronen_Giovanni_Boccaccio.mp3")
    template(v-slot:description)
      em Dekameronen
      | . 
      a(href="https://www.nb.no/items/cd9f952d7ebfd65f7e0b8e7f84d3986c?page=9&searchText=dekameronen" target="blank") Les teksten.

  Brightcove("5796643528001")

  h3 Innhald
  p Bakgrunnen for rammeforteljinga i 
    em Dekameronen 
    | er ein pestsjukdom som rammar Firenze. Denne pestsjukdommen er ein historisk realitet, for våren og sommaren 1348 vart byen heimsøkt av pesten.

  p Samlinga inneheld ein del kjærleikshistorier, men også mange tekstar om heilt andre emne. Boccaccio er ikkje oppteken av å skildre fysisk kjærleik i detalj, men han vil vise kva for ei sterk kraft kjærleiken er, og kor mykje menneska er villige til å gjere for å vinne den dei elskar.

  p Persongalleriet i novellene omfattar menneske frå alle lag av folket. Hovudpersonane må ofte kjempe mot dumskap og vanetenking, for eksempel unge forelska par som er i konflikt med vrange foreldre. Andre forteljingar handlar om kor gale det kan gå når ein ikkje kan leve i pakt med naturgitte kjensler og drifter. Det er særleg munkane og munkevesenet som blir latterleggjorde i desse forteljingane.

  h3 Sjanger
  img.col.col7.right-image(src="./Dekameronen_Sjanger.jpg" alt="Gamalt handskrive dokument med tekst i to spaltar. Rikt dekorert med ulike motiv. Foto")
  p Ordet 
    em novelle 
    | kjem frå italiensk og tyder nyhende. På 1200-talet vart omgrepet for første gong brukt om forteljingar. På den tida var novellene korte, populære forteljingar om meir eller mindre aktuelle hendingar.

  p Boccaccio blir rekna som skaparen av den skjønnlitterære novella. Verket hans har inspirert andre europeiske diktarar som Geoffrey Chaucer, Margarete av Navarra og Miguel de Cervantes til å skrive liknande samlingar. Mange har også utnytta stoffet i forteljingane til å skape nye verk, for eksempel William Shakespeare og Jonathan Swift.

  p I dag bruker vi omgrepet novelle berre om relativt korte skjønnlitterære forteljingar, gjerne slike som konsentrerer seg om ei hending som utgjer eit vendepunkt i livet til ein person.

</template>

<script>
import PageBook from "@/components/PageBook";
import NdlaVideo from "@/components/NdlaVideo";
import Brightcove from "@/components/BrightcoveVideo";
import NdlaAudio from "@/components/NdlaAudio";

export default {
  name: "Book",
  components: {
    NdlaAudio,
    Brightcove,
    NdlaVideo,
    PageBook,
  },
};
</script>

<style lang="scss" scoped></style>
