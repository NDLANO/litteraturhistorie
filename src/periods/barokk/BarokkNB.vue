<template lang="pug">
PagePeriod(
  :bannerImage="require(`./banner.jpg`)"
  :circleImage="require(`./circle.png`)"
  )
  // Content here
  h3 Heimstaddiktning
  p
    | Tida rundt århundreskiftet var preget av motstridende tankestrømmer. På den ene siden skapte den teknologiske utviklingen en forventning om nye og bedre tider. Mange flyttet fra landet til byene for å få seg arbeid i ulike bedrifter og fabrikker. På den andre siden savnet folk levemåten i bondesamfunnet som de kom fra. De fryktet at samfunnet slik de kjente det, ville gå tapt, og de lengtet hjem.
  p
    | Litteraturen i 1890-årene gjenspeilte denne uroen, og det utviklet seg en skrivetradisjon som seinere fikk betegnelsen heimstaddiktning. I denne tradisjonen vokste det fram en vilje til å ta vare på og dyrke det folkelige.
  p
    | Med heimstaddiktning mener vi at forfatterne skrev om miljøet på hjemstedet sitt. De ville framheve egenarten ved landsdelen eller hjemstedet, skildre det særegne ved miljø, folk og natur.
  p
    | Storbylivet ble i denne typen diktning framstilt som noe usunt og som en motsetning til livet på landsbygda eller i småbyen. En vanlig oppfatning var at det urbane livet førte til rotløshet, mens livet på landet gav ro i sjela. Det var her folk hadde røttene sine.
  blockquote
    | «Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.»
    br
    | (My Author)
  h3 Rasmus Løland – en pioner i norsk barnelitteratur
  p
    | I 1892 gav Nordahl Rolfsen ut Læsebog for folkeskolen. Boka fikk mye å si for framveksten av en egen barnelitteratur i Norge. Skolefolk mente at det var viktig med tilgang til kvalitetslitteratur for å fremme leseevnen hos de yngste. Samtidig ble det åpnet skoleboksamlinger (bibliotek) rundt om i landet.
  p
    | Rasmus Løland (1861–1907) var en av pionerene i moderne norsk barnelitteratur. Han kom fra Ryfylke i Rogaland og skrev i alt 30 bøker, de aller fleste for barn. Han var banebrytende som barnebokforfatter fordi diktningen hans var blottet for moralisme og sentimentalitet. Barneverdenen til Løland var realistisk og fylt av barnlig fantasi og fabulering.
  p
    | Perioden fra 1890 til 1910 var en gullalder for norsk barnelitteratur. Hos landsmålsforfattere som Rasmus Løland, Per Sivle og Hans Seland finner vi en sterk forankring i det hjemlige og lokale, og noe av det samme ser vi hos Gabriel Scott og Hans Aanrud.
  p
    | Utover på 1900-tallet videreførte Marie Hamsun og Halvor Floden barneboka og heimstadtradisjonen. I 1930-årene var det nyrealistiske strømninger som satte farge på barnelitteraturen, for eksempel i bøkene til Ingeborg Refling Hagen og Kåre Holt.
  a(href='https://www.google.no') Rasmus Løland biography on Wikipedia        
  h3 Kvitebjørnen
  p
    | Barneboka Kvitebjørnen var høydepunktet i Lølands produksjon. Boka utkom i 1906, året før han døde. Handlingen foregår i et bygdemiljø, og i sentrum står fire gutter i alderen ni til tolv år. Vi følger dem gjennom ni kapitler, fra den første snøen faller seinhøstes og fram til våren kommer på nytt.
  p
    | Løland lar barna dagdrømme og fantasere. Blant annet lager de en stor bjørn av snø. De graver ut snøbjørnen og drar av gårde på en fantasireise til Nordpolen. Guttene er også på alle andre måter som barn ellers: De rømmer hjemmefra, de er i opposisjon til de voksne, og de gjør ikke alltid slik foreldrene har formanet dem om. For eksempel blir en lekmannspredikant som kommer til bygda, utsatt for snøballkasting.
  p
    | I den samme boka gir Løland også et innblikk i lekmannsbevegelsen på Vestlandet seint på 1800-tallet. De lekmannskristne mente det ikke var tilstrekkelig å tilhøre kirka, en skulle i tillegg ha gjennomgått en åndelig vekkelse for å kunne kalle seg ekte kristen. I Kvitebjørnen blir lekmannsbevegelsen skyteskive for Løland både i bokstavelig og overført betydning.
  a(href='https://www.google.no') Kvitebjørnen on wikipedia
  h3 En antididaktisk skrivemåte
  p
    | Kvitebjørnen bryter med den tradisjonelle didaktiske barneboka, som var moraliserende, advarende og formanende. Det blir sagt om Løland at han bruker en antididaktisk skrivemåte, særlig i Kvitebjørnen, og at han var en forløper for den moderne, realistiske barneboklitteraturen som vokste fram på 1900-tallet.
  p
    | Rasmus Løland bryter med lange, nedarvete opplæringstradisjoner og tradisjonelle rollemønstre. Han har evnen til å sette seg inn i hvordan barn tenker og føler, og han har innsikt i barns sjeleliv.
  p
    | I 1959 kom Kvitebjørnen ut i ny utgave, forkortet og dels omskrevet av Halldis Moren Vesaas.
  h3 En pådriver for landsmålet
  img(src='https://dummyimage.com/1280x720/cecece/ffffff&text=myName' alt='')
  p
    | Rasmus Løland engasjerte seg sterkt i målsaken. Han var en ivrig pådriver for nynorsk teater, og han var med på å stifte Noregs Ungdomslag. I tillegg var han en sentral person i unionsspørsmålet og en forkjemper for demokratisering og stemmerett.
  p
    | I første del av forfatterskapet var Løland ivrig purist. Han mente at en ikke skulle bruke ord som kom fra tysk eller dansk. Seinere skiftet han holdning i dette spørsmålet, han syntes det viktigste var at målet var norsk i stil og tonelag.
  p
    | Arbeidet for norsk mål var nok en viktig grunn til at Løland skrev for barn. Han ville skape interesse for litteratur og lesing hos de yngste, og denne litteraturen skulle være på et mål som barna følte seg trygge på. Tanken var at en på denne måten skulle vinne kampen om skriftmålet etter hvert.

</template>

<script>
import PagePeriod from "@/components/PagePeriod";
import NdlaVideo from "@/components/NdlaVideo";
import NdlaAudio from "@/components/NdlaAudio";

export default {
  name: "Book",
  components: {
    NdlaAudio,
    NdlaVideo,
    PagePeriod,
  },
};
</script>
