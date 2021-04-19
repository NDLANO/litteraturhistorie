const fs = require("fs-extra");
const path = require("path");
const yargs = require("yargs");

const rootDir = path.dirname(require.main.filename);

let args = yargs.argv;

async function generateFile() {
  try {
    const lcNN = "nn";
    const ucNN = lcNN.toUpperCase();
    const lcNB = "nb";
    const ucNB = lcNB.toUpperCase();

    const nnOrgJson = await fs.readJSON(
      "../public/config/artists" + lcNN + ".json",
    );
    const nbOrgJson = await fs.readJSON(
      "../public/config/artists" + lcNB + ".json",
    );

    console.log("nnOrgJson[0] = ", nnOrgJson[0]);
    console.log(
      "nn length = ",
      nnOrgJson.length,
      ", nb length = ",
      nbOrgJson.length,
    );

    let authorsJsString = "export const authors = [\n";

    for (let i = 0; i < nnOrgJson.length; i++) {
      const tmpNnAuthor = nnOrgJson[i];
      const tmpNbAuthor = nbOrgJson[i];

      // * Use ID if it exist, if not, let new id be the complete name
      let authorId = tmpNnAuthor.NAVN;
      if (tmpNnAuthor.id) {
        authorId = tmpNnAuthor.id;
      }

      let tmpNnText = "";
      let tmpNbText = "";
      if (tmpNnAuthor.OMTALE) {
        tmpNnText = tmpNnAuthor.OMTALE;
        tmpNbText = tmpNbAuthor.OMTALE;
        console.log("typeof text = ", typeof tmpNnText);
        if (typeof tmpNnText !== "object") {
          console.log("Author ", tmpNnAuthor.NAVN, " has string omtale");
          tmpNnText = tmpNnText.replace(/\n/g, "");
          tmpNnText = convertBullets(tmpNnText);
          tmpNbText = tmpNbText.replace(/\n/g, "");
          tmpNbText = convertBullets(tmpNbText);
        }
      }

      authorsJsString += `{
      id: '${authorId}',
      name: '${tmpNnAuthor.NAVN}',
      from: ${tmpNnAuthor.FRA},
      to: ${tmpNnAuthor.TIL},
      nnText: '${tmpNnText}',
      nbText: '${tmpNbText}',
      type: '${tmpNnAuthor.TYPE}',
      sted: '${tmpNnAuthor.STED}',
    },
    `;
    }

    authorsJsString += "]\n";

    const outputFilename = "authorsData.js";
    let fileString = authorsJsString;
    await fs.outputFile(outputFilename, fileString);
  } catch (err) {
    console.error(err);
  }
}

function convertBullets(text) {
  const textArray = text.split("•");
  console.log("textArray.length = ", textArray.length);
  console.log("textArray = ", textArray);
  let convertedText = "";
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] !== "") convertedText += "<li>" + textArray[i] + "</li>";
  }

  return convertedText;
}

generateFile();
