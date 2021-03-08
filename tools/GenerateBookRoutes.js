const fs = require("fs-extra");
const path = require("path");
const yargs = require("yargs");

const fsutil = require("./js/filesystem");

const rootDir = path.dirname(require.main.filename);

console.log("rootDir = ", rootDir);

let fileName = "../public/config/books";

let args = yargs.argv;

if (!args.lang) {
  console.log("lang property is required. Has to be nn or nb");
  process.exit();
}

switch (args.lang) {
  case "nn":
  case "nb":
    break;
  default:
    console.log("Error: Lang has to be nn or nb");
    process.exit();
}

console.log("Lang = ", args.lang);

async function generateFile() {
  try {
    let fileString = `import TimeLine from "@/views/TimeLine.vue";

    export default`;

    const ucLang = args.lang.toUpperCase();
    const lcLang = args.lang;

    const orgJson = await fs.readJSON(
      "../public/config/books" + ucLang + ".json",
    );
    console.log("orgJson[0] = ", orgJson[0]);

    let routeString = "[\n";
    for (let i = 0; i < orgJson.length; i++) {
      let tmpName = orgJson[i].ID;
      if (args.lang == "nb") tmpName = tmpName.slice(0, -2);
      console.log("tmpName = ", tmpName);

      routeString += `{
        path: '/${lcLang}/books/${tmpName}${ucLang}',
        name: '${tmpName}${ucLang}',
        meta: {
          author: ${tmpName},
          title: '${orgJson[i].TITTEL}',
          year: ${orgJson[i]["ÅR"]},
          cover: ${orgJson[i].COVER},
        },
        components: {
          default: TimeLine,
          books: () =>
          import(/* webpackChunkName: '${tmpName}${lcLang}' */ '../books/${tmpName}/${tmpName}${ucLang}.vue'),
        },
      }`;
    }

    routeString += "];\n";
    fileString += routeString;
    const outputFilename = "books" + args.lang + ".js";
    console.log("routeString = ", routeString);
    await fs.outputFile(outputFilename, fileString);
  } catch (err) {
    console.error(err);
  }
}

generateFile();
