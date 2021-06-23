<template lang="pug">
PageBook

  .mt40
  figure.col.col12
    img(src="./Bergens_Kapitelsbok.jpg" alt="Bebyggelse som omkranser en bukt med et seilskip. Rundt bukta er høye fjell. Navnet Bergen står skrevet over bebyggelsen. Illustrasjon")
    figcaption 
      em Bergens Kapitelsbog 
      | skildrer dagliglivet i byen Bergen på 1500-tallet

  p 
    em Bergens Kapitelsbog 
    | er ei dagbok fra årene mellom 1552 og 1571, skrevet av presten Absalon Pedersson Beyer. Beyer skildrer dagliglivet i Bergen, som på den tida er den eneste storbyen i Norge. Her kan vi lese om alt fra pest og drap til bryllup og festligheter. Boka inneholder også noen mer personlige innslag, for eksempel kommentarer til enkelte hendinger og små glimt fra Beyers privatliv. 

  p Beyer skriver først på latin, men går så over til å skrive på «morsmålet», det vil si dansk, med innslag av bergensmål. 

  p Nesten hele dagboka er bevart, men først i 1858 ble den gitt ut i sin helhet. Boka regnes som den viktigste kilden til norsk sosial- og kulturhistorie på 1500-tallet. 

  a(href="media/books/bergenskapitelsbok/bergen_tekst.html" target="_blank") Les utdrag

  h3 Forfatteren 
  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Forfatteren.jpg`)"
    :imageColumns="5"
    imageCaption="Anne Pedersdotter, Absalons kone, ble dømt som heks og brent på bålet. Saken mot henne er en av de best dokumenterte hekseprosessene i Norge"
    altText="Tilskuere ser på at en kvinne blir brent på bål. Illustrasjon"
    )
    p Absalon Pedersson Beyer (1528–1575) var prest fra Bergen. Han virket både som prest, historiker, forfatter og lærer. Hovedverket hans, 
      em Om Norgis Rige
      | , kom ut i 1567. Boka gir en historisk framstilling av Norges fortid og en skildring av samtida. 

    p Pedersson Beyer utdannet seg i København og Wittenberg og kom til Bergen i 1552. Han ble lektor i teologi ved katedralskolen og seinere slottsprest ved Bergenhus. Absalon Pedersson Beyer var en høyt aktet mann i Bergen, men han fikk også sine fiender fordi han refset tøylesløs og umoralsk livsførsel. 

  h3 Dagboksjangeren 
  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Dagboksjangeren.jpg`)"
    :imageColumns="5"
    imageCaption="Henrettelsen på Nordnes"
    altText="Offentlig henrettelse. Mann svinger et sverd mot en knelende kvinne som har bind for øynene. Illustrasjon "
  )
    p Dagbøker er saktekster med opplysninger som er ordnet kronologisk, gjerne dag for dag. Dagbøker på 1500-tallet ble skrevet for bestemte hendinger: visitasbøker fra bispebesøk, regnskapsbøker og andre offentlige protokoller. Disse dagbøkene ble gjerne skrevet på oppdrag fra myndighetene. 

    p En 
      em annal 
      | (årbok) er ei dagbok som kort og tørt refererer historiske hendinger kronologisk. 
      em Krøniken 
      | gir også en kronologisk framstilling av historiske hendinger. Framstillingen er malende og livfull, men lite kritisk utformet og ofte upålitelig. 

  h3 Bergens-miljøet
  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Bergens-miljoet.jpg`)"
    :imageColumns="5"
    imageCaption="Minnestein ved Vangen kirke i Aurland"
    altText="Gravstøtte over Absalon Pederssøn Beyer. Foto"
  )
    p Humanismen fikk ikke særlig gjennomslag i Norge. Det fantes likevel noen få og små humanistiske miljøer rundt om i landet. Bergens-miljøet var ett av dem. 

    p Absalon Pedersson Beyer hadde en sentral plass i dette miljøet fordi han var en representant for 1500-tallets humanistiske dannelsesideal. Dessuten var han med på å starte et skolemiljø som seinere fikk mye å si for litteratur og åndsliv her i landet. 

</template>

<script>
import PageBook from "@/components/PageBook";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";
import ImageTextBlock from "@/components/ImageTextBlock";

export default {
  name: "Book",
  components: {
    ImageTextBlock,
    NdlaAudio,
    NdlaVideo,
    PageBook,
  },
};
</script>

<style lang="scss" scoped></style>
