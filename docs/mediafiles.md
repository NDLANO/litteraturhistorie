# Mediafiler

I dette prosjektet er det stort sett tre forskjellige typer eksterne mediafiler. Video, lyd og HTML-filer. Dette er filer som enten er for store eller som det ikke er ønskelig å inkludere i Vue-builden.

De ligger i følgende foldere

`public/media/books/<bok/forfatternav>/<filnavn>` - Filer som tilhører bøker

`public/media/periods/<periodenavn>/<filnavn>` - Filer som tilhører perioder

`public/media/videos/<periode-/bok/forfatternavn>/filnavn` - Videofiler over 100Mb (se under)

## Lenke til filer

`public`-folderen er roten til applikasjonen når den kjører, så den skal ikke inkluderes i URLen. En link til video vil da ca se ut som dette:

```
NdlaVideo(source = "media/periods/humanisme/en_video_fil.mp4")
```

## Videoer / filer over 100Mb

Github anbefaler at man ikke legger opp større filer enn 50Mb og tillater ikke filer over 100Mb. Dette betyr at en del av videofilene i prosjektet ikke kan inkluderes i git repositoriet.

På grunn av dette må slike filer legges under `public/media/videos`.

Denne folderen er ikke en del av Git repositoriet.

**NB! Av den grunn må innholdet i denne folderen lastes opp og ned manuelt vha FTP e.l.**
