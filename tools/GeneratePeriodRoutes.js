const fs = require("fs-extra");
const path = require("path");
const yargs = require("yargs");

const vueTemplates = require("./js/vuePeriodTemplate");

const rootDir = path.dirname(require.main.filename);

console.log("rootDir = ", rootDir);

let fileName = "../public/config/periods";

let args = yargs.argv;

console.log("Lang = ", args.lang);

async function generateFile() {
  try {
    let fileString = `import Timeline from "@/views/Timeline.vue";

    export default`;

    const lcNN = "nn";
    const ucNN = lcNN.toUpperCase();
    const lcNB = "nb";
    const ucNB = lcNB.toUpperCase();

    const orgJson = await fs.readJSON(
      "../public/config/periods" + lcNN + ".json",
    );
    console.log("orgJson[0] = ", orgJson[0]);

    let routeString = "[\n";

    let periodDataString = "export const periods = [\n";

    for (let i = 0; i < orgJson.length; i++) {
      let tmpName = orgJson[i].ID;
      if (args.lang == "nb") tmpName = tmpName.slice(0, -2);
      console.log("tmpName = ", tmpName);

      // * Nynorsk book
      routeString += `{
        path: '/${lcNN}/periods/${tmpName.toLowerCase()}',
        name: '${tmpName}${ucNN}',
        meta: {
          title: '${orgJson[i].TITTEL}',
          from: '${orgJson[i].FRA}',
          to: '${orgJson[i].TIL}',
          color: '${orgJson[i].FARGE}',
          fillColor: '${orgJson[i].FYLLFARGE}',
          y: '${orgJson[i].Y}',
        },
        components: {
          default: () =>
          import(/* webpackChunkName: '${tmpName.toLowerCase()}${lcNN}' */ '../periods/${tmpName.toLowerCase()}/${tmpName}${ucNN}.vue'),
        },
      },
      `;
      // * Bokmål book
      routeString += `{
        path: '/${lcNB}/periods/${tmpName.toLowerCase()}',
        name: '${tmpName}${ucNB}',
        meta: {
          title: '${orgJson[i].TITTEL}',
          from: '${orgJson[i].FRA}',
          to: '${orgJson[i].TIL}',
          color: '${orgJson[i].FARGE}',
          fillColor: '${orgJson[i].FYLLFARGE}',
          y: '${orgJson[i].Y}',
        },
        components: {
          default: () =>
          import(/* webpackChunkName: '${tmpName.toLowerCase()}${lcNB}' */ '../periods/${tmpName.toLowerCase()}/${tmpName}${ucNB}.vue'),
        },
      },
      `;

      // Only one version since the data is the same in the NN and NB original
      periodDataString += `{
        id: '${tmpName.toLowerCase()}',
        nnTitle: '${orgJson[i].TITTEL}',
        nbTitle: '${orgJson[i].TITTEL}',
        from: '${orgJson[i].FRA}',
        to: '${orgJson[i].TIL}',
        layer: 0,
        left: 0,
        yearMarkings: [[1000, 400], [1200, 600]],
      },
      `;

      // * create Vue template files if they do not exist
      const baseTemplatePath = `./templates/periods/${tmpName}/`.toLowerCase();
      console.log("baseTemplatePath = ", baseTemplatePath);
      await fs.ensureFile(`${baseTemplatePath}${tmpName}${ucNN}.vue`);
      fs.outputFile(
        `${baseTemplatePath}${tmpName}${ucNN}.vue`,
        vueTemplates.template(tmpName + ucNN),
      );
      await fs.ensureFile(`${baseTemplatePath}${tmpName}${ucNB}.vue`);
      fs.outputFile(
        `${baseTemplatePath}${tmpName}${ucNB}.vue`,
        vueTemplates.template(tmpName + ucNB),
      );
    }

    routeString += "];\n";
    periodDataString += "];\n";
    fileString += routeString;

    const outputFilename = "periods.js";
    // console.log("routeString = ", routeString);
    await fs.outputFile(outputFilename, fileString);

    const periodDataFileName = "periodsData.js";
    fileString = periodDataString;
    await fs.outputFile(periodDataFileName, fileString);
  } catch (err) {
    console.error(err);
  }
}

generateFile();
