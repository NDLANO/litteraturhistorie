# [Pug](https://pugjs.org/api/getting-started.html)

Pug er en såkalt "template engine". Kort fortalt så gjør den det mulig å skrive HTML i et forenklet format som i steden for start- og ende-tagger (Eks. `<h1>Overskrift</h1>`) så brukes kun start tag (Eks. `h1 Overskrift`). Dette gjør det enklere å legge inn store mengder innhold slik som i dette programmet. I tillegg brukes tabulator for å legge elementer inni hverandre.

Pug-koden man skriver vil bli konvertert til HTML når man kjører en build.

Under er et eksempel som først viser HTML-kode og deretter samme kode i Pug:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Jade</title>
    <script type="text/javascript">
      const foo = true;
      let bar = function() {};
      if (foo) {
        bar(1 + 5);
      }
    </script>
  </head>

  <body>
    <h1>Jade - node template engine</h1>
    <div class="col" id="container">
      <p>You are amazing</p>
      <p>
        Jade is a terse and simple templating language with a strong focus on
        performance and powerful features.
      </p>
    </div>
  </body>
</html>
```

```
doctype html
html(lang='en')
  head
    title Jade
    script(type='text/javascript').
      const foo = true;
      let bar = function() {};
      if (foo) {
      bar(1 + 5)
      }
  body
    h1 Jade - node template engine
    #container.col
      p You are amazing
      p
        | Jade is a terse and simple
        | templating language with a
        | strong focus on performance
        | and powerful features.
```

## Attributter

HTML og Vue-attributter legges inn i parantes før innholdet.

HTML:

```html
<a v-if="showLink" href="https://www.ndla.no">Link til NDLA</a>
```

```
a(v-if="showLink" href="https://www.ndla.no") Link til NDLA
```

## Inline HTML-elementer

Når man skal skrive innline HTML så kan man i pug gjøre det på to måter.

Vi kan ta utgangspunkt i følgende HTML-kode:

```html
<p>Her er en <a href="https://www.ndla.no" target="blank">link</a> til NDLA</p>
```

Alternativ 1 er å brukke innrykk for html-elementer og pipe symbolet (`|`) for tekst som er utenfor inline-elementene.

```
p Her kommer en
  a(href="https:www.ndla.no" target="blank") link
  | til NDLA
```

Alternativ 2 er å bruke vanlig HTML-kode til de elementene som er inni det første elementet.

```
p Her kommer en <a href="https://www.ndla.no" target="blank">link</a> til NDLA
```

Begge metodene er brukt i dette programmet.
