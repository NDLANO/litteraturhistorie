<template lang="pug">
PageBook(:showAuthor="false")

  figure.col.col6.right-image
    img(src="./Beowulf_utklipp.jpg" alt="Første side av ”Beowulf”-kvadet i et manuskript skrevet en gang mellom 700 og 1000")
    figcaption Første side av ”Beowulf”-kvadet i et manuskript skrevet en gang mellom 700 og 1000.
      NdlaAudio(source="media/books/beowulf/beowulf_sitat_britishlibary.mp3")
      a(href="http://www.heimskringla.no/wiki/Beowulf" target="_blank") Les teksten

  p «Beowulf» er et angelsaksisk heltekvad. Kvadet regnes for å være det engelske  nasjonaleposet og er det viktigste enkeltverket fra angelsaksisk tid (om lag 400–1066).

  p Forskerne mener at teksten først ble overlevert muntlig, og at den er skrevet ned mellom 700 og 1000. Dikteren er ukjent. 

  p Kvadet er skrevet på gammelengelsk (angelsaksisk), som er et vestgermansk språk. Angelsakserne er etterkommere av germanske stammer fra Nord-Tyskland og Jylland som invaderte England mellom 400 og 600.

  p Den engelske forfatteren J.R.R. Tolkien var sterkt inspirert av «Beowulf» da han skrev Hobbiten og Ringenes herre. Tolkien var professor i litteratur i Oxford og hadde studert kvadet nøye. 

  p Det finnes dessuten to moderne filmversjoner av Beowulf. 

  h3 Innhold
  figure.col.col6.left-image
    img(src="./Beowulf_film.jpg" alt="Det finst også to moderne filmversjoner av Beowulf.")
    figcaption Det finst også to moderne filmversjoner av Beowulf.

  p Handlingen i eposet er lagt til Danmark og Sverige i urnordisk tid. Uhyret Grendel herjer i riket til danskekongen Hrothgar. Hver natt hjemsøker Grendel kongshallen og dreper kongens menn. Da drar helten Beowulf ut for å hjelpe Hrothgar. Han bekjemper først Grendel og deretter mor hans, som prøver å hevne sønnen. 

  p Seinere blir Beowulf konge i hjemlandet sitt, Gautland (kanskje dagens Götaland i Sør-Sverige). Siste del av kvadet skildrer hvordan han drar ut sammen med mennene sine for å drepe en drake som ødelegger landet hans. Men det er bare én av mennene som tør å møte draken sammen med han. Beowulf greier å ta livet av draken, men blir selv drept. Han blir så hauglagt av mennene sine. 

  figure.col.col4.left-image
    img(src="./Beowulf_Gautland.jpg" alt="Senere blir Beowulf konge i hjemlandet sitt, Gautland")
    figcaption Senere blir Beowulf konge i hjemlandet sitt, Gautland

  p Samfunnet som skildres i eposet, legger stor vekt på egenskaper som æresfølelse og mot. Kongens oppgave er å forsvare landet. Derfor trenger han menn som gjør krigstjeneste for han, og han lønner dem med våpen, rikdommer og land. Krigerne er høyt verdsatt i denne typen samfunn. 

  p Helten Beowulf er preget av en sterk skjebnetro. Han er overbevist om at det er skjebnen som bestemmer når han skal dø. Denne skjebnetroen er dypt forankret i germansk krigertradisjon. Vi finner den samme troen også i de norrøne heltediktene og i islendingesagaene. 
  
  h3 Heltedikt 
  figure.col.col6.right-image
    img(src="./Beowulf_i_kamp_med_draken.jpg" alt="Beowulf i kamp med dragen. Til høyre gravhaugen i Skalunda i Götaland der Beowulf skal være hauglagt.")
    figcaption Beowulf i kamp med dragen. Til høyre gravhaugen i Skalunda i Götaland der Beowulf skal være hauglagt.

  p Alle stammer og nasjoner har sagn og myter som bekrefter hvem de er, hvor de kommer fra, og formidler tenkemåter og verdier som er viktige for dem. 

  p Dikt som bygger på slike sagn og myter fra ei heroisk fortid, kaller vi heltedikt. 

  p Vi regner de to eposene til den greske dikteren Homer for den eldste heltediktningen i Europa. I «Iliaden» skildrer Homer kampen om Troja, mens «Odysseen» handler om Odyssevs’ farefulle hjemreise fra Troja.

  figure.col.col6.right-image
    img(src="./Beowulf_Prakthjelm.jpg" alt="Prakthjelm i jern og bronse funnet i en svensk båtgrav fra den tida da Beowulf levde.")
    figcaption Prakthjelm i jern og bronse funnet i en svensk båtgrav fra den tida da Beowulf levde.

  p Romerne har sitt nasjonalepos i «Æneiden», skrevet av dikteren Vergil. Eposet handler om helten Æneas, som flykter fra Troja og seinere blir stamfar til romerne. 

  p Fra og med 900-tallet blir mange europeiske heltedikt skrevet ned. Samtidig blir de utvidet til omfattende helteepos etter mønster av sine antikke forbilder, med brede skildringer og tallrike parallellhandlinger. 

  p De mest kjente europeiske heltediktene i tillegg til «Beowulf «er det franske «Rolandskvadet» fra 1000-tallet, det spanske heltediktet om El Cid, som ble skapt rundt 1140, og «Nibelungen-eposet» fra tidlig på 1200-tallet.   

  figure
    img(src="./Beowulf_Heltedikt.jpg" alt="Eposet handler om helten Æneas som flykter fra Troja og senere blir stamfar til romerne.")
    figcaption Eposet handler om helten Æneas som flykter fra Troja og senere blir stamfar til romerne.


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
