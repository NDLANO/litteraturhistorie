<template lang="pug">
PageBook(:showAuthor="false")

  .mt40
  img.col.col6.right-image(src="./Flora_Danica_Flora_Danica.jpg" alt="")

  p Flora Danica er tittelen på to bøker som i tekst og bilete skildrar dansk og norsk flora (planteriket). Den eldste boka vart gitt ut i 1648 av den danske legen Simon Paulli. Han var professor og kirurg ved Universitetet i København.

  p Det var danskekongen Fredrik 3. som gav Paulli oppdraget. Formålet var å lage ei plantesamling som kunne vere til opplysning for vanlege folk.

  p Boka har 384 illustrasjonar som viser viltveksande plantar i Danmark og Noreg. Alle plantane som er tekne med, blir nytta som lækjemiddel for ulike sjukdommar. Om lag halvparten av plantane som er omtalte i boka, er hageplantar.

  p I 1752 tok kong Frederik 5. initiativ til ei ny utgåve av Flora Danica. Den nye boka skulle vise viltveksande plantar ikkje berre i Noreg og Danmark, men også på Island, Grønland og i Schleswig-Holstein. På dette tidspunktet rådde danskekongen over heile området. Undervegs vart målsetjinga for dette store prosjektet endra fleire gonger. Den siste utgåva av Flora Danica kom i 1874. 

  h3 Norsk botanikk i Flora Danica og Flora Norvegica
  p I 1755 startar den tyske professoren Georg Christian Oeder arbeidet med å kartleggje norske plantar for Flora Danica. Med seg har han ein illustratør som teiknar alle plantane som blir registrerte. Teikningane blir overførte til koparplater, som så blir brukte i trykkeprosessen. Det blir gitt ut både kolorerte (fargelagde) og ukolorerte hefte med desse koparstikka.

  img.col.col6.left-image.mt5(src="./Flora_Danica_Flora_Norvegica.jpg" alt="")
  
  p Fleire norske botanikarar er med i arbeidet med verket, mellom anna Hans Strøm, biskop Johann Ernst Gunnerus, som også gav ut Flora Norvegica, og bergensaren Martin Vahl, som danskekongen utnemner til redaktør av Flora Danica i 1785.

  p Gunnerus´ verk Flora Norvegica kjem ut for første gong i 1766. I alt er 1118 norske artar omtalte. Boka er skriven på latin, men Gunnerus fører også opp dei tilsvarande norske, danske og tyske namna. Mange av dei plantane Gunnerus skriv om, hadde han sjølv funne på visitasreisene han gjorde som biskop i Nordland og Finnmark.

  p Gunnerus omtaler plantane, han fortel kva slags medisinske eigenskapar dei har, og kva dei elles kan brukast til. Samstundes gir han ofte kulturhistoriske opplysningar. 
  
  h3 Barn av opplysingstida

  figure.col.col6.right-image.mt5
    img(src="./Flora_Danica_Barn_av_opplysningstida.jpg" alt="")
    figcaption Illustrasjon frå Flora Norvegica 

  p Flora Danica er eitt av mange oppslagsverk som blir til i den perioden vi kallar opplysningstida. Bøkene skulle spreie kunnskap og skape grobotn for eit samfunn bygd på opplysning og fornuft.
  
  p Professor Oeder er også oppteken av at mandatet hans er å drive folkeopplysning. På 1600- og 1700-talet blir lærde verk skrivne på latin. Flora Danica kjem ut i tre parallellutgåver: på latin og på «landets Sprog, det Danske og det Tydske», slik at vanlege folk skal kunne lese bøkene. Innhaldet er også lagt til rette for folk som ikkje har studert botanikk.

  p Verket blir distribuert over heile kongeriket Danmark-Noreg. Framleis finst det fleire eksemplar i biblioteka til dei norske katedralskolane. 

  p Den svenske vitskapsmannen Carl von Linné (1707–1778) klassifiserer heilt systematisk alle artar han kjenner til i plante- og dyreriket. Klassifiseringa hans gjeld framleis i biologien, berre med mindre endringar.
  
  h3 Andre læreverk i opplysningstida

  figure.col.col4.left-image.mt5
    img(src="./Flora_Danica_Andre_læreverk.jpg" alt="")
    figcaption Tittelbladet på Det første Forsøg paa Norges naturlige Historie av Erik Pontoppidan

  p I same perioden kjem det ut fleire opplysningsbøker, mellom anna reiseskildringar og bøker om språk, geografi og historie. Den danskfødde bergensbiskopen Erik Pontoppidan gir ut ei norsk ordbok i 1749, og ei skildring av norsk historie i 1755. Mest kjend er han nok likevel for si forklaring til Luthers katekisme, som blir brukt i kristendomsopplæringa i Noreg til langt ut på 1900-talet.

  p Presten Hans Egede var fødd på Trondenes i Nordland. I 1721 reiste han til Grønland for å leite etter etterkommarane av dei norske vikingane. Han ville også omvende folket der til protestantismen. Som mange andre prestar i samtida er Egede oppteken av naturvitskap og geografi. I 1741 gav han ut boka Grønlands naturelle historie.

  p Hans Strøm var prest i Borgund prestegjeld på Sunnmøre. Han var inspirert av opplysningsskriftene til Linné og Pontoppidan. I 1755 byrja han systematisk å skrive ned det folk fortalde han, og ting han observerte sjølv. Han laga også eigne teikningar. Det viktigaste samla han i ei notisbok som han kalla Annotations Boog over de Merkværdigheder som udi Syndmørs Fogderie forefindes. I 1766 gav han ut hovudverket sitt, Søndmørs Beskrivelse.

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
