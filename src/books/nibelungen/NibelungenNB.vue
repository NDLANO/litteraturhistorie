<template lang="pug">
PageBook(:showAuthor="false")

  img.col.col6.left-image.mt20(src="./Nibelungen_utklipp.jpg" alt="Gammelt håndskrevet dokument med tekst i to spalter. Rikt dekorert med ornamentale bokstaver. Foto")

  p.mt20 «Nibelungen-eposet» («Nibelungenlied») er et tysk heltedikt som er skrevet ned på 1200-tallet. Det blir regnet som det tyske nasjonaleposet. 

  p Diktet bygger på sagnmotiv fra folkevandringstida. Stoffet går igjen i ulike versjoner både i Tyskland og de nordiske landene. I norrøn diktning har helten fått navnet Sigurd Fåvnesbane. 

  p Eposet er delt i to. Første del handler om helten og kongssønnen Siegfried, som vil gifte seg med burgunderprinsessen Kriemhild. Hun har tre brødre, som sammen hersker over Burgund. Siegfried kommer til burgunderhoffet og blir godt mottatt.

  p Gunther, den eldste av burgunderkongene, vil dra til Island for å fri til dronning Brünhild. Hun har kjempekrefter og vil bare gifte seg med den mannen som vinner over henne i kamp. Siegfried hjelper Gunther med å få Brünhild. Blant annet har han en kappe som gjør han usynlig, og derfor skjønner ikke Brünhild at hun blir lurt. Etter at Gunther har fått Brünhild, får også Siegfried gifte seg med Kriemhild. 

  figure.col.col12.mt20
    img(src="./Nibelungen_Handling1.jpg" alt="Kvinne står foran en gruppe menn som bærer skjold og våpen. Illustrasjon")
    figcaption Styrkeprøven. Brünhild kaster et spyd mot Gunther.

  p Etter noen år kommer Kriemhild og Siegfried på besøk til Burgund. Brünhild, som er svært stolt, krangler med Kriemhild om hvem som har høyest rang, Gunther eller Siegfried. Krangelen fører til at Kriemhild røper at det var Siegfried som vant over Brünhild, ikke Gunther. 

  figure.col.col6.right-image
    img(src="./Nibelungen_Handling2.jpg" alt="Mann stikker spyd i ryggen på en annen mann som drikker fra et horn.En tredje person, gjemt bak et tre, ser på. Illustrasjon ")
    figcaption Hagen dreper Siegfried mens han drikker av bekken. Gunther ser på uten å gjøre noe for å hindre det
  
  p.mt20 Brünhild er rasende og sverger hevn, og det ender med at Hagen, en venn av burgunderkongene, dreper Siegfried. Gunther og brødrene hans gjør ikke noe for å hindre det. Hagen stjeler også Nibelung-skatten, en gullskatt som Kriemhild har fått i morgengave av Siegfried, og kaster den i Rhinen. Slik vil han hindre Kriemhild i å reise en hær for å hevne ektemannen.

  p Andre del handler om hvordan Kriemhild tar hevn. Hun gifter seg med hunerkongen Atle og ber brødrene på besøk. De kommer, selv om de aner uråd. Det ender med at alle burgunderne blir drept, også Kriemhild selv, og ingen får noen gang vite hvor Nibelung-skatten er skjult. 

  NdlaVideo.mt40(
    source="https://www.youtube.com/watch?v=hQM97_iNXhk" 
    description="Her kan du høre det kjente «Valkyrierittet» fra Richard Wagners operasyklus Nibelungenringen."
    playerType="youtube")

  // Medieinnhold: beholde både bilder og lydspor om mulig
  
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
