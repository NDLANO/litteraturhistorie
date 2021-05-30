<template lang="pug">
PageBook(:showAuthor="false")
  p «Nibelungen-eposet» («Nibelungenlied») er et tysk heltedikt som er skrevet
  ned på 1200-tallet. Det blir regnet som det tyske nasjonaleposet. 

  p Diktet bygger på sagnmotiv fra folkevandringstida. Stoffet går igjen i ulike versjoner både i Tyskland og de nordiske landene. I norrøn diktning har helten fått navnet Sigurd Fåvnesbane. 

  p Eposet er delt i to. Første del handler om helten og kongssønnen Siegfried, som vil gifte seg med burgunderprinsessen Kriemhild. Hun har tre brødre, som sammen hersker over Burgund. Siegfried kommer til burgunderhoffet og blir godt mottatt.

  p Gunther, den eldste av burgunderkongene, vil dra til Island for å fri til dronning Brünhild. Hun har kjempekrefter og vil bare gifte seg med den mannen som vinner over henne i kamp. Siegfried hjelper Gunther med å få Brünhild. Blant annet har han en kappe som gjør han usynlig, og derfor skjønner ikke Brünhild at hun blir lurt. Etter at Gunther har fått Brünhild, får også Siegfried gifte seg med Kriemhild. 

  p Etter noen år kommer Kriemhild og Siegfried på besøk til Burgund. Brünhild, som er svært stolt, krangler med Kriemhild om hvem som har høyest rang, Gunther eller Siegfried. Krangelen fører til at Kriemhild røper at det var Siegfried som vant over Brünhild, ikke Gunther. 

  p Brünhild er rasende og sverger hevn, og det ender med at Hagen, en venn av burgunderkongene, dreper Siegfried. Gunther og brødrene hans gjør ikke noe for å hindre det. Hagen stjeler også Nibelung-skatten, en gullskatt som Kriemhild har fått i morgengave av Siegfried, og kaster den i Rhinen. Slik vil han hindre Kriemhild i å reise en hær for å hevne ektemannen.

  p Andre del handler om hvordan Kriemhild tar hevn. Hun gifter seg med hunerkongen Atle og ber brødrene på besøk. De kommer, selv om de aner uråd. Det ender med at alle burgunderne blir drept, også Kriemhild selv, og ingen får noen gang vite hvor Nibelung-skatten er skjult. 

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
