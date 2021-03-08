const fs = require("fs-extra");
const path = require("path");
const yargs = require("yargs");

const fsutil = require("./js/filesystem");
const vueTemplates = require("./js/vueTemplates");

const rootDir = path.dirname(require.main.filename);

console.log("rootDir = ", rootDir);

let fileName = "../public/config/books";

let args = yargs.argv;

console.log("Lang = ", args.lang);

async function generateFile() {
  try {
    let fileString = `import TimeLine from "@/views/TimeLine.vue";

    export default`;

    const lcNN = "nn";
    const ucNN = lcNN.toUpperCase();
    const lcNB = "nb";
    const ucNB = lcNB.toUpperCase();

    const orgJson = await fs.readJSON(
      "../public/config/books" + lcNN + ".json",
    );
    console.log("orgJson[0] = ", orgJson[0]);

    let routeString = "[\n";
    for (let i = 0; i < orgJson.length; i++) {
      let tmpName = orgJson[i].ID;
      if (args.lang == "nb") tmpName = tmpName.slice(0, -2);
      console.log("tmpName = ", tmpName);

      routeString += `{
        path: '/${lcNN}/books/${tmpName}${ucNN}',
        name: '${tmpName}${ucNN}',
        meta: {
          author: '${tmpName}',
          title: '${orgJson[i].TITTEL}',
          year: ${orgJson[i]["ÅR"]},
          cover: ${orgJson[i].COVER},
        },
        components: {
          default: TimeLine,
          books: () =>
          import(/* webpackChunkName: '${tmpName}${lcNN}' */ '../books/${tmpName}/${tmpName}${ucNN}.vue'),
        },
      },
      `;
      routeString += `{
        path: '/${lcNB}/books/${tmpName}${ucNB}',
        name: '${tmpName}${ucNB}',
        meta: {
          author: '${tmpName}',
          title: '${orgJson[i].TITTEL}',
          year: ${orgJson[i]["ÅR"]},
          cover: ${orgJson[i].COVER},
        },
        components: {
          default: TimeLine,
          books: () =>
          import(/* webpackChunkName: '${tmpName}${lcNB}' */ '../books/${tmpName}/${tmpName}${ucNB}.vue'),
        },
      },
      `;

      // * create Vue template files if they do not exist
      await fs.ensureFile(`./templates/${tmpName}${ucNN}.vue`);
      fs.outputFile(
        `./templates/${tmpName}${ucNN}.vue`,
        vueTemplates.bookTemplate(tmpName + ucNN),
      );
      await fs.ensureFile(`./templates/${tmpName}${ucNB}.vue`);
      fs.outputFile(
        `./templates/${tmpName}${ucNB}.vue`,
        vueTemplates.bookTemplate(tmpName + ucNB),
      );
    }

    routeString += "];\n";
    fileString += routeString;

    const outputFilename = "books.js";
    console.log("routeString = ", routeString);
    await fs.outputFile(outputFilename, fileString);
  } catch (err) {
    console.error(err);
  }
}

generateFile();
