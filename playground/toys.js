const toyData = require("./toyData.js");
const natural = require("natural");

class childLetter {
  constructor(str) {
    this.tokenizer = new natural.WordTokenizer().tokenize(str);
    (this.toyData = toyData),
      (this.favCategories = {}),
      Object.keys(this.toyData).forEach((category) => {
        this.favCategories[category] = 0;
      }),
      (this.possibleToys = []);
  }

  getToys() {
    const matches = [];
    this.tokenizer.forEach((word) => {
      Object.keys(this.toyData).forEach((category) => {
        if (word === category || word + "s" === category) {
          this.favCategories[category] += 1;
          matches.push(word);
        } else if (
          this.toyData[category].includes(word) ||
          this.toyData[category].includes(word + "s")
        ) {
          this.favCategories[category] += 1;
          matches.push(word);
        }
      });
    });

    this.possibleToys.push(matches);
  }

  getTypoToys() {
    const secondaryMatches = [];
    const spellcheck = new natural.Spellcheck(
      Object.values(this.toyData).flat(),
    );
    this.tokenizer.forEach((wordInText) => {
      spellcheck.getCorrections(wordInText, 1).forEach((correction) => {
        if (correction !== wordInText && !secondaryMatches.includes(correction))
          secondaryMatches.push(correction);
      });
    });
    this.possibleToys.push(secondaryMatches);
  }

  showToys() {
    console.log(this.possibleToys);
  }
}

const child1 = new childLetter("I want a bicycle for christmas!");

child1.getToys();
child1.getTypoToys();
child1.showToys();
console.log(child1.favCategories);
