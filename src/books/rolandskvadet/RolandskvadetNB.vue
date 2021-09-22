<template lang="pug">
PageBook(:showAuthor="false")

  figure.col.col7.left-image
    img.mt5(src="./Rolandskvadet_Rolandskvadet.jpg" alt="Grupper av riddere i et landskap med åsrygger og skog. Illustrasjon")
    figcaption Åtte hendelser fra «Rolandskvadet» samlet i ett bilde

  p «Rolandskvadet» er det eldste bevarte franske heltediktet, og det som er mest kjent. Kvadet ble nedskrevet rundt år 1100 og handler om Karl den store og de tolv kjempene hans, blant dem Roland og Holger Danske. Teksten finnes i flere versjoner. Den lengste er på 4000 verselinjer. 

  p Kvadet er oversatt til norrønt («Karlamagnussoga»), og det eksisterer en norsk versjon fra 1934. Vi finner historien om Roland også i folkevisa «Roland og Magnus kongjen». Magnus kongjen er Karl den store («magnus» betyr den store på latin). 

  p Dikteren er en ellers ukjent mann ved navn Turold (Thorvald). Navnet kan tyde på at han var fra Normandie, den delen av Frankrike som ble erobret av vikinger på 900-tallet. Disse vikingene blandet seg med lokalbefolkningen og gikk over til å snakke fransk. 

  a(href="media/books/rolandskvadet/roland.html" target="_blank") Les hele kvadet

  h3 Handlingen i kvadet

  p Roland er nevø av Karl den store og leder for baktroppen i keiserens hær. Keiseren er sammen med hæren sin på vei tilbake fra Spania over Pyreneene. En sviker sørger for at Roland og baktroppen blir utsatt for et bakholdsangrep fra maurerne. Roland har et horn, Olifant, som han kan bruke for å tilkalle hovedtroppen. Men han nekter først å bruke hornet. Han er overmodig og tror han kan slå fienden uten hjelp. Roland og mennene hans makter å drive maurerne på flukt, men prisen for seieren er høy: alle som en faller i kampen. 

  p Når nesten alle mennene hans er døde, blåser Roland i hornet. Han vil at keiseren skal hevne han og de andre døde. Det gjør Karl den store. Han bekjemper fienden og straffer svikeren og ætta hans. Før Roland dør, innrømmer han at han har syndet. Det er hans skyld at alle mennene er døde, han burde ikke ha ventet med å blåse i hornet for å tilkalle hjelp. Han rekker hansken sin til Gud, og Gud tar imot hansken. Gud har gjort Rolands overmodige handling til et redskap for kristendommen: Fienden er slått tilbake. 


  h3 Historisk bakgrunn for «Rolandskvadet» 
  figure.col.col7.right-image.mt5
    img(src="./Rolandskvadet_Grandes_chroniques_de_France.jpg" alt="En ridder ber for en døende person. I bakgrunnen foregår et slag. Illustrasjon")
    figcaption Slaget ved Roncesvalles i 778. Rolands død, fra «Grandes chroniques de France», miniatyrmaleri av Jean Fouquet.

  p Vi har bare én historisk kilde som forteller om Roland, og det er Einhard, en lærd historiker som skrev en biografi om Karl den store få år etter keiserens død. I 778 dro Karl den store på et felttog mot maurerne (araberne), som hadde erobret store deler av Spania. På vei tilbake til Frankrike ble baktroppen hans overfalt ved Roncesvalles, et fjellpass i Pyreneene. Det var baskere, ikke maurere, som stod bak overfallet. 

  p I biografien om Karl den store ­nevner Einhard at både Hruodland, som var markgreve i Britannia (Bretagne), og flere andre ble drept i slaget ved Roncesvalles i 778. Den kristne gjenerobringen av Spania og Portugal tok for øvrig mange hundre år, og først i 1492 ble den siste mauriske herskeren kastet ut av Granada. 

  h3 Chansons de geste
  figure.col.col7.right-image.mt5
    img(src="./Rolandskvadet_Chanson_de_Roland.jpg" alt="Ridder med vinger sitter på en hest. En soldat holder en skadet soldat i fanget. Over dette håndskrevet tekst. Faksimile")
    figcaption Et fargelagt manuskript til 
      em Chanson de Roland
      | , fra 1300-talet

  p De franske heltediktene kalles 
    em Chansons de geste
    | , noe vi kan oversette med sanger om (helte)dåder. Mange av de gammelfranske heltediktene handler om Karl den store (742– 814) og kampene hans mot hedninger, særlig i Spania. Heltediktene ble egentlig skrevet som propaganda for felttogene mot maurerne (araberne) i Spania på 1000-tallet.

  p Kildene er historiske fortellinger, men de er brukt svært fritt. Om lag 200 gammelfranske heltedikt er bevart fra perioden 1050–1350 (høymiddelalderen). 

  p Heltediktene var populær underholdning. De ble sunget av omvandrende sangere og spillemenn, såkalte sjonglører. 

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
