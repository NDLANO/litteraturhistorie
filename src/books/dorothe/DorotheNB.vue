<template lang="pug">
PageBook

  figure.col.col4.right-image
    img(src="./Dorothe_Engelbretsdotter_Taare-Offer.jpg" alt="Gammelt tittelblad med gotisk skrift. Foto")
    figcaption Omslag fra førsteutgaven av 
      em Taare-Offer
      | , et annet verk av Dorothe Engelbretsdotter

  p 
    em Siælens Sang-Offer 
    | er en samling salmer og oppbyggende sanger som kom ut i 1687. Boka var skrevet av bergensdikteren Dorothe Engelbretsdotter. Hun ble raskt svært populær, og boka kom ut i over tjue opplag. 
    em Siælens Sang-Offer 
    | var den første boka av en norskfødt forfatter som ble trykt i Norge. 

  p Dorothe Engelbretsdotter var en typisk representant for den barokke stilen. Kontraster, overdrivelser og sterke bilder preget salmene hennes. Selv om uttrykksmåten kan virke svulstig enkelte ganger, skrev hun også mange dikt der språk og vers flyter naturlig og er lette å huske. 

  p I diktene til Dorothe Engelbretsdotter er det personlige gudsforholdet viktig. Mennesket er underkastet Guds allmakt, og salmene skal hjelpe folk til å få et mer inderlig forhold til Gud og minne dem om å leve riktig.

  h3 Temaet i salmene

  img.col.col4.right-image(src="./Dorothe_Engelbretsdotter_portrett.jpg" alt="Portrett av kvinne iført kappe med sløyfe og hodeplagg. Illustrasjon")
  p Et gjennomgående tema i salmene fra 
    em Siælens Sang-Offer 
    | er ønsket om å få øve bot. Temaet er typisk for mye av den barokke diktningen. Det skyldes at krig, nød, sykdom og død preget livet til mange mennesker på den tida, og all ulykke ble tolket som Guds straff for misgjerninger. Mennesket er syndig, og det finnes alltid  noe å angre. 

  blockquote
    | Kjære sjel, kom det i hu 
    br
    | Og bekjenn i dette nu 
    br
    | At du som et Adams barn 
    br
    | Henger fast i Satans garn. 
    br
    br
    | (Fra «Afften-Sang») 

  p Menneskelivets forgjengelighet er et annet sentralt tema i barokkens diktning. Alt verdslig er forgjengelig, noe menneskene vet av egen smertelig erfaring. De må derfor sette sin lit til Gud og håpe på et liv uten sorg og nød etter døden. Siste strofe av «Afften-Sang» lyder slik: 

  blockquote
    | Alle verdslig ting forgår.  
    br
    | Jeg til herlighet oppstår, 
    br
    | Når Gud ved basunens lyd, 
    br
    | Kaller meg til evig fryd. 

  h3 Sjangeren
  img.col.col6.left-image(src="./Dorothe_Engelbretsdotter_Sjangeren.jpg" alt="Mor med barn sitter i en kirke og leser i en bok. I bakgrunnen en kvinne som ber. Maleri")
  p Salmer er sanger med et religiøst innhold som blir sunget under gudstjenester og i andre religiøse sammenhenger. Formålet med salmene er å styrke folk i troen. Det er derfor viktigere at publikum kjenner seg igjen i salmene enn at salmene er originale og nyskapende. 

  p På 1600-tallet var salmene den vanligste brukslyrikken. Mange mennesker på den tida kunne ikke lese, men så godt som alle kunne salmene utenat. Salmer blir gjerne laget til populære verdslige melodier. Allerede på 1500-tallet tok Martin Luther i bruk kjente melodier og laget salmer til dem. 
  
  NdlaAudio(
    source="media/books/dorothe/julesalme_D_Engelbretsdatter_nrk.mp3"
    description="Julesalme"
  )  

  h3 Dorothe Engelbretsdotter i samtida
  p Dorothe var den første kjente kvinnelige dikteren i Norge. På 1600-tallet var det ennå nokså uhørt at en kvinne skulle være dikter. Dette var noe menn drev med, var den vanlige oppfatningen. Men Dorothe nøt stor respekt i samtida, og samtidige forfattere som Petter Dass og Thomas Kingo satte stor pris på diktningen hennes.

  p På 1600-tallet var det ikke vanlig at dikterne greide å leve av egen diktning, verken menn eller kvinner. Dorothe klarte det, i alle fall i en lang periode. Dette vakte misunnelse hos enkelte menn, som påstod at hun ikke hadde skrevet diktene sine selv. Men Dorothe visste å forsvare seg. Hun sa at de som beskyldte henne for dette, burde «settes i karantene på ei øde øy eller kastreres»! 

  p Også ellers framstod hun som en handlekraftig kvinne. Blant annet fant hun seg ikke i at noen boktrykkere piratkopierte verkene hennes. Mot slutten av livet fikk hun også full skattefrihet av kongen.   

//  Medieinnhold: beholde bilder + julesalmen 

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
