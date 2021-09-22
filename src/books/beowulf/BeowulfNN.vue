<template lang="pug">
PageBook(:showAuthor="false")

  figure.col.col6.right-image
    img(src="./Beowulf_utklipp.jpg" alt="Gamalt handskrive dokument. Foto")
    figcaption Første side av ”Beowulf”-kvadet i eit manuskript skrive ein gong mellom 700 og 1000
      NdlaAudio(source="media/books/beowulf/beowulf_sitat_britishlibary.mp3")
      a(href="http://www.heimskringla.no/wiki/Beowulf" target="_blank") Les teksten

  p «Beowulf» er eit angelsaksisk heltekvad. Kvadet blir rekna for å vere det engelske nasjonaleposet og er det viktigaste enkeltverket frå angelsaksisk tid (om lag 400–1066). 

  p Forskarane meiner at teksten først er overlevert munnleg, og at han er skriven ned mellom 700 og 1000. Diktaren er ukjend. 

  p Kvadet er skrive på gammalengelsk (angelsaksisk), som er eit vestgermansk språk. Angelsaksarane er etterkommarar av germanske stammar frå Nord-Tyskland og Jylland som invaderte England mellom 400 og 600.

  p Den engelske forfattaren J.R.R. Tolkien var sterkt inspirert av ”Beowulf” da han skreiv 
    em Hobbiten 
    | og 
    em Ringenes herre
    | . Tolkien var professor i litteratur i Oxford og hadde studert kvadet nøye.


  h3 Innhald
  figure.col.col6.left-image.mb50
    img(src="./Beowulf_film.jpg" alt="Mann i bar overkropp rettar eit sverd mot ein person i forgrunnen. Personane står ansikt til ansikt. Foto")
    figcaption Det finst òg to moderne filmversjonar av Beowulf.

  p Handlinga i eposet er lagd til Danmark og Sverige i urnordisk tid. Uhyret Grendel herjar i riket til danskekongen Hrothgar. Kvar natt heimsøkjer Grendel kongshallen og drep mennene til kongen. Da dreg helten Beowulf ut for å hjelpe Hrothgar. Han nedkjempar først Grendel og deretter mor hans, som prøver å hemne sonen.

  p Seinare blir Beowulf konge i heimlandet sitt, Gautland (kanskje dagens Götaland i Sør Sverige). Siste del av kvadet skildrar korleis han dreg ut saman med mennene sine for å drepe ein drake som legg landet hans i øyde. Men det er berre éin av mennene som torer møte draken saman med han. Beowulf maktar å ta livet av draken, men blir sjølv drepen. Han blir så hauglagd av mennene sine.

  figure.col.col6.left-image.mb50
    img(src="./Beowulf_i_kamp_med_draken.jpg" alt="Kriger med langt skjegg held eit skjold opp som vern mot flammer frå ein drake. Mannen ber eit sverd i den andre handa. Måleri")
    figcaption Beowulf i kamp med draken. 

  p Samfunnet som blir skildra i eposet, legg stor vekt på eigenskapar som ærekjensle og mot. Oppgåva til kongen er å forsvare landet. Derfor treng han menn som gjer krigsteneste for han, og han lønner mennene sine med våpen, rikdommar og land. Krigarane er høgt verdsette i denne typen samfunn. 

  p Helten Beowulf er prega av ei sterk lagnadstru. Han er overtydd om at det er lagnaden som avgjer når han skal døy. Denne lagnadstrua er djupt forankra i germansk krigartradisjon. Vi finn den same trua også i dei norrøne heltedikta og i islendingesogene. 


  h3 Heltedikt
  p Alle stammar og nasjonar har segner og mytar som stadfestar kven dei er, kvar dei kjem frå, og formidlar tenkjemåtar og verdiar som er viktige for dei.

  p Dikta som byggjer på slike segner og mytar frå ei heroisk fortid, kallar vi heltedikt.

  p Vi reknar dei to eposa til den greske diktaren Homer for den eldste heltediktinga i Europa. I ”Iliaden” skildrar Homer kampen om Troja, mens ”Odysseen” handlar om den farefulle heimreisa til Odyssevs frå Troja.

  figure.col.col6.right-image
    img(src="./Beowulf_Prakthjelm.jpg" alt="Forgylt og rikt dekorert hjelm med ansiktsbeskyttelse. Foto")
    figcaption Prakthjelm i jarn og bronse funnen i ei svensk båtgrav frå den tida då Beowulf levde.

  p Romarane har sitt nasjonalepos i ”Æneiden”, skrive av diktaren Vergil. Eposet handlar om helten Æneas som flyktar frå Troja og seinare blir stamfar til romarane.

  p Frå 900-talet blir mange europeiske heltedikt skrivne ned. Samstundes blir dei utvida til omfattande helteepos etter mønster av dei antikke førebileta, med breie skildringar og talrike parallellhandlingar.

  p Dei mest kjende europeiske heltedikta i tillegg til ”Beowulf” er det franske ”Rolandskvadet” frå 1000-talet, det spanske heltediktet om El Cid, som blei skapt rundt 1140, og ”Nibelungen-eposet” frå tidleg på 1200-talet.

  figure
    img(src="./Beowulf_Enes-som-flykter-fra-Troja.jpg" alt="Mann med hjelm ber ein gamal mann. To kvinner ser på med eit fortvila uttrykk. Foto")
    figcaption Eposet handlar om helten Æneas som flyktar frå Troja og seinare blir stamfar til romarane.



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
