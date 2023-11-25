const natural = require("natural");

function analyseText(str) {
  const matches = [];
  const words = [];
  const tokenizer = new natural.WordTokenizer();
  const tokenized = tokenizer.tokenize(str);
  console.log(tokenized); // splits the string into an array of words

  const spellcheck = new natural.Spellcheck(
    Object.values(toyCategories).flat(),
  );

  tokenized.forEach((wordInText) => {
    spellcheck.getCorrections(wordInText, 1).forEach((correction) => {
      console.log(wordInText, "wordInText", correction, "CORRECTION");
      words.push(correction);
    });
  });

  console.log(words, "WORDS");

  console.log(matches, "MATCHES");
}

console.log(natural.HammingDistance("cad", "car", false));

analyseText("I want a cad for christmas!");

console.log(natural.HammingDistance("karolin", "kathrin", false));
console.log(natural.HammingDistance("karolin", "kerstin", false));

//Jaro–Winkler distance does not give desired result
