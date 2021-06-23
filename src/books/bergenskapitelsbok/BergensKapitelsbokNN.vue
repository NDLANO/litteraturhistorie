<template lang="pug">
PageBook

  .mt40
  figure.col.col12
    img(src="./Bergens_Kapitelsbok.jpg" alt="Bygningar som omkransar ei bukt med eit seilskip. Rundt bukta er høge fjell. Navnet Bergen står skrive over bygningane. Illustrasjon")
    figcaption 
      em Bergens Kapitelsbog 
      | skildrar dagleglivet i byen Bergen på 1500-talet.

  p 
    em Bergens Kapitelsbog 
    | er ei dagbok frå åra mellom 1552 og 1571, skriven av presten Absalon Pedersson Beyer. Beyer skildrar dagleglivet i Bergen, som på den tida er den einaste storbyen i Noreg. Her kan vi lese om alt frå pest og drap til bryllaup og fest. _ Boka inneheld også meir personlege innslag, for eksempel kommentarar til somme hendingar og små glimt frå Beyers privatliv.

  p Beyer skriv først på latin, men går så over til å skrive på «morsmålet», det vil seie dansk, med innslag av bergensmål.

  p Nesten heile dagboka er bevart, men først i 1858 kjem ho ut i bokform. Boka er rekna som den viktigaste kjelda til norsk sosial- og kulturhistorie på 1500-talet.

  a(href="media/books/bergenskapitelsbok/bergen_tekst.html" target="_blank") Les utdrag

  h3 Forfattaren

  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Forfatteren.jpg`)"
    :imageColumns="5"
    imageCaption="Anne Pedersdotter, Absalons kone, vart dømd som heks og brend på bålet. Saka mot henne er ein av dei best dokumenterte hekseprosessane i Noreg."
    altText="Tilskodarar ser på at ei kvinne blir brend på bål. Illustrasjon"
    )
    p Absalon Pedersson Beyer (1528–1575) var prest frå Bergen. Han arbeidde både som prest, historikar, forfattar og lærar. Hovudverket hans, 
      em Om Norgis Rige
      | , kom ut i 1567. Boka gir ei historisk framstilling av Noregs fortid og ei skildring av samtida. 

    p Pedersson Beyer utdanna seg i København og Wittenberg og kom til Bergen i 1552. Han var lektor i teologi ved katedralskolen og seinare slottsprest ved Bergenhus. Absalon Pedersson Beyer var ein høgt akta mann i Bergen, men han fekk også fiendar fordi han refsa hemningslaus og umoralsk livsførsel.


  h3 Dagboksjangeren
  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Dagboksjangeren.jpg`)"
    :imageColumns="5"
    imageCaption="Avrettinga på Nordnes"
    altText="Offentleg henretting. Mann svingar eit sverd mot ei knelande kvinne som har bind for auga. Illustrasjon "
  )
    p Dagbøker er saktekstar med opplysningar som er ordna kronologisk, gjerne dag for dag. _ Dagbøker på 1500-talet gjeld visse hendingar: visitasbøker frå bispebesøk, rekneskapsbøker og andre offentlege protokollar. Desse dagbøkene er gjerne skrivne på oppdrag frå styresmaktene.

    p Ein 
      em annal 
      | (årbok) er ei dagbok som kort og tørt refererer historiske hendingar i tidsrekkefølgje. 
      em Krønika 
      | gir også ei kronologisk framstilling av historiske hendingar. Framstillinga er målande og livfull, men lite kritisk utforma og ofte upåliteleg.

  h3 Bergens-miljøet
  ImageTextBlock(
    :image="require(`./Bergens_Kapitelsbok_Bergens-miljoet.jpg`)"
    :imageColumns="5"
    imageCaption="Minnestein ved Vangen kyrkje i Aurland"
    altText="Gravstøtte over Absalon Pederssøn Beyer. Foto"
  )
    p Humanismen får ikkje særleg gjennomslag i Noreg. Det finst likevel nokre få og små humanistiske miljø rundt om i landet. Bergens-miljøet er eitt av dei.

    p Absalon Pedersson Beyer har ein sentral plass i dette miljøet fordi han er ein representant for 1500-talets humanistiske danningsideal. Dessutan er han med på å starte eit skolemiljø som seinare får mykje å seie for litteratur og åndsliv her i landet.

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
