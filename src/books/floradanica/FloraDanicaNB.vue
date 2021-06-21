<template lang="pug">
PageBook(:showAuthor="false")

  .mt40
  img.col.col6.right-image(src="./Flora_Danica_Flora_Danica.jpg" alt="")

  p Flora Danica er tittelen på to bøker som i tekst og bilder skildrer dansk og norsk flora (planterike). Den eldste boka ble gitt ut i 1648 av den danske legen Simon Paulli. Han var professor og kirurg ved Universitetet i København. 

  p Det var danskekongen Fredrik 3. som gav Paulli oppdraget. Formålet var å lage en plantesamling som kunne være til opplysning for vanlige folk. 

  p Boka har 384 illustrasjoner som viser viltvoksende planter i Danmark og Norge. Alle plantene som er tatt med, ble brukt som legemiddel for ulike sykdommer. Om lag halvparten av de omtalte plantene er hageplanter. 

  p I 1752 tok kong Fredrik 5. initiativ til en ny utgave av Flora Danica. Den nye boka skulle vise viltvoksende planter ikke bare i Norge og Danmark, men også på Island, Grønland og i Schleswig-Holstein. På dette tidspunktet rådde danskekongen over hele området. Underveis ble målsettingen for dette store prosjektet endret flere ganger. Den siste utgaven av Flora Danica kom ut i 1874.

  h3 Norsk botanikk i Flora Danica og Flora Norvegica 
  p I 1755 startet den tyske professoren Georg Christian Oeder arbeidet med å kartlegge norske planter for Flora Danica. Med seg hadde han en illustratør som tegnet alle plantene som ble registrert. Tegningene ble overført til kopperplater, som så ble brukt i trykkeprosessen. Det ble utgitt både kolorerte (fargelagte) og ukolorerte hefter med disse kopperstikkene. 

  img.col.col6.left-image.mt5(src="./Flora_Danica_Flora_Norvegica.jpg" alt="")

  p Flere norske botanikere deltok i arbeidet med verket, blant annet Hans Strøm, biskop Johann Ernst Gunnerus, som også gav ut Flora Norvegica, og bergenseren Martin Vahl, som danskekongen utnevnte til redaktør av Flora Danica i 1785. 

  p Gunnerus’ verk Flora Norvegica kom ut for første gang i 1766. I alt er 1118 norske arter omtalt. Boka er skrevet på latin, men Gunnerus fører også opp de tilsvarende norske, danske og tyske navnene. Mange av de plantene Gunnerus skriver om, hadde han selv funnet på visitasreisene han gjorde som biskop i Nordland og Finnmark. 

  p Gunnerus beskriver plantene, han forteller hvilke medisinske egenskaper de har, og hva de ellers kan brukes til. Samtidig gir han ofte kulturhistoriske opplysninger. 

  h3 Barn av opplysingstida 

  figure.col.col6.right-image.mt5
    img(src="./Flora_Danica_Barn_av_opplysningstida.jpg" alt="")
    figcaption Illustrasjon fra Flora Norvegica 

  p Flora Danica er ett av mange oppslagsverk som så dagens lys i den perioden vi kaller opplysningstida. Bøkene skulle spre kunnskap og skape grobunn for et samfunn bygd på opplysning og fornuft. 

  p Professor Oeder var også opptatt av at mandatet hans var å drive folkeopplysning. På 1600- og 1700-tallet ble lærde verk skrevet på latin. Flora Danica kom ut i tre parallellutgaver, på latin og på «landets Sprog, det Danske og det Tydske», slik at vanlige folk skulle kunne lese bøkene. Innholdet var også tilrettelagt for folk som ikke hadde studert botanikk. 

  p Verket ble distribuert over hele kongeriket Danmark-Norge. Fortsatt finnes det flere eksemplarer i bibliotekene til de norske katedralskolene. 

  p Den svenske vitenskapsmannen Carl von Linné (1707–1778) klassifiserte helt systematisk alle arter han kjente til i plante- og dyreriket. Klassifiseringen hans er ennå gjeldende i biologien, bare med mindre endringer.
  
  h3 Andre læreverk i opplysningstida 

  figure.col.col4.left-image.mt5
    img(src="./Flora_Danica_Andre_læreverk.jpg" alt="")
    figcaption Tittelbladet på Det første Forsøg paa Norges naturlige Historie av Erik Pontoppidan

  p I samme periode kom det ut flere opplysningsbøker, blant annet reiseskildringer og bøker om språk, geografi og historie. Den danskfødte bergensbiskopen Erik Pontoppidan gav ut ei norsk ordbok i 1749, og en skildring av norsk historie i 1755. Mest kjent er han nok likevel for sin forklaring til Luthers katekisme. Den ble brukt i kristendomsopplæringen i Norge til langt ut på 1900-tallet. 

  p Presten Hans Egede ble født på Trondenes i Nordland. I 1721 reiste han til Grønland for å lete etter etterkommerne av de norske vikingene. Han ville også omvende folket der til protestantismen. Som mange andre prester i samtida var Egede opptatt av naturvitenskap og geografi. I 1741 gav han ut boka Grønlands naturelle historie. 

  p Hans Strøm var prest i Borgund prestegjeld på Sunnmøre. Han var inspirert av Linné og Pontoppidans opplysningsskrifter. I 1755 begynte han å nedtegne systematisk det folk fortalte han, og ting han selv observerte. Han laget også egne tegninger. Det viktigste samlet han i ei notisbok som han kalte Annotations Boog over de Merkværdigheder som udi Syndmørs Fogderie forefindes. I 1766 gav han ut hovedverket sitt, Søndmørs Beskrivelse. 

  NdlaAudio(
    source="media/periods/opplysning/tekst5_Egede_gronlands_naturelle_historie.mp3"
    description="Hans Egede: Grønlands naturelle historie"
    )
    img.col.col12(src='media/periods/opplysning/Egede.jpg' alt='')

  NdlaAudio(
    source="media/periods/opplysning/tekst6_Pontoppidan_Geografisk_beskivelse.mp3"
    description="Erik Pontoppidan: Geografisk beskrivelse av det sydlige Norge"
    )
    img.col.col12(src='media/periods/opplysning/Pontoppidan.jpg' alt='')


  //Medieinnhold: Beholde bilder og de to nederste lydklippene

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
