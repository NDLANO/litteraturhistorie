<template lang="pug">
PageBook(:showAuthor="false")

  img.col.col6.left-image.mt20(src="./Nibelungen_utklipp.jpg" alt="")

  p «Nibelungen-eposet» («Nibelungenlied») er eit tysk heltedikt som er nedskrive på 1200-talet. Det blir sett på som det tyske nasjonaleposet.

  p Diktet byggjer på segnmotiv frå folkevandringstida. Vi finn att stoffet i ulike versjonar både i Tyskland og dei nordiske landa. I norrøn dikting har helten fått namnet Sigurd Fåvnesbane. 

  p Eposet er delt i to. Første del handlar om helten og kongssonen Siegfried, som vil gifte seg med burgundarprinsessa Kriemhild. Ho har tre brør, som saman herskar over Burgund. Siegfried kjem til burgundarhoffet og blir teken godt imot.

  .clear

  p Gunther, den eldste av burgundarkongane, vil dra til Island for å fri til dronning Brünhild. Ho har kjempekrefter og vil berre gifte seg med den mannen som vinn over henne i kamp. Siegfried hjelper Gunther med å få Brünhild. Han har mellom anna ei kappe som gjer han usynleg, og derfor skjønner ikkje Brünhild at ho blir lurt. Etter at Gunther har fått Brünhild, får også Siegfried gifte seg med Kriemhild.

  figure.col.col12.mt20
    img(src="./Nibelungen_Handling1.jpg" alt="")
    figcaption Styrkeprøva. Brünhild kastar eit spyd mot Gunther.

  p Etter nokre år kjem Kriemhild og Siegfried på besøk til Burgund. Brünhild, som er svært byrg, kranglar med Kriemhild om kven som har høgast rang, Gunther eller Siegfried. Krangelen fører til at Kriemhild røper at det var Siegfried som vann over Brünhild, ikkje Gunther.

  figure.col.col6.right-image
    img(src="./Nibelungen_Handling2.jpg" alt="")
    figcaption Hagen drep Siegfried mens han drikk av bekken. Gunther ser på utan å gjere noko for å hindre det.

  p Brünhild er rasande og sver hemn, og det endar med at Hagen, ein venn av burgundarkongane, drep Siegfried. Gunther og brørne hans gjer ikkje noko for å hindre det. Hagen stel også Nibelung-skatten, ein gullskatt som Kriemhild har fått i morgongåve av Siegfried, og kastar han i Rhinen. Slik vil han hindre Kriemhild i å reise ein hær for å hemne ektemannen.

  p Andre delen handlar om korleis Kriemhild tek hemn. Ho gifter seg med hunarkongen Atle og ber brørne på besøk. Dei kjem, jamvel om dei aner uråd. Det endar med at alle burgundarane blir drepne, også Kriemhild sjølv, og ingen får nokon gong vite kvar Nibelung-skatten er gøymd. 

  NdlaVideo.mt40(
    source="https://www.youtube.com/watch?v=hQM97_iNXhk" 
    description="Wagner - valkyrierittet fra operaens tredje akt"
    playerType="youtube")




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
