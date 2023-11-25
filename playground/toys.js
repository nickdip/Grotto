const natural = require("natural");
const ignoredWords = require("./ignoreWords.js");

function getResults(toyData, str) {
  const resultObj = { faveCategories: {} };
  const words = findKeyWords(new natural.WordTokenizer().tokenize(str));

  const seen = []; // seen toys

  const getTypoToys = () => {
    const secondaryMatches = [];

    let allWords = [];

    for (let toy in toyData) {
      for (let word in toyData[toy].words) {
        allWords.push(toyData[toy].words[word]);
      }
    }

    const spellcheck = new natural.Spellcheck(allWords);
    words.forEach((wordInText) => {
      spellcheck.getCorrections(wordInText, 1).forEach((correction) => {
        if (
          !(correction === wordInText && secondaryMatches.includes(correction))
        )
          secondaryMatches.push(correction);
      });
    });

    return secondaryMatches;
  };

  const getMatches = (rank, words) => {
    const matches = [];

    words.forEach((word) => {
      if (ignoredWords.includes(word)) return;

      toyData.forEach((toy) => {
        if (word === toy.Category)
          resultObj.faveCategories[toy.Category] =
            resultObj.faveCategories[toy.Category] + 1 || 1;

        if (toy.words.includes(word)) {
          resultObj.faveCategories[toy.Category] =
            resultObj.faveCategories[toy.Category] + 1 || 1;
          if (!seen.includes(toy)) {
            matches.push(toy);
            seen.push(toy);
          }
        }
      });
    });

    resultObj[rank] = matches;
  };

  getMatches("Primary", words);
  getMatches("Secondary", getTypoToys());

  const finalResults = []; // final results (show up to 8)

  for (let i = 0; i < 4; i++) {
    if (resultObj.Primary[i]) finalResults.push(resultObj.Primary[i]);
    if (resultObj.Secondary[i]) finalResults.push(resultObj.Secondary[i]);
  }

  if (finalResults.length < 4) {
    const faveCategories = Object.keys(resultObj.faveCategories).sort(
      (a, b) => resultObj.faveCategories[b] - resultObj.faveCategories[a],
    );

    faveCategories.forEach((category) => {
      toyData.forEach((toy) => {
        if (toy.Category === category && !finalResults.includes(toy))
          finalResults.push(toy);
      });
    });
  }

  while (finalResults.length < 4) {
    finalResults.push(toyData[Math.floor(Math.random() * toyData.length)]);
  }

  return finalResults.slice(0, 4);
}

function findKeyWords(wordsArray) {
  const keyWords = [];
  wordsArray.forEach((word) => {
    if (!ignoredWords.includes(word)) keyWords.push(word);
  });
  return keyWords;
}

export default getResults;
