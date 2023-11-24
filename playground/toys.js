const toyData = require('./toyData.js');
const natural = require('natural')
const ignoredWords = require('./ignoreWords.js')

class childLetter {
    constructor(str) {
        this.words = this.findKeyWords(new natural.WordTokenizer().tokenize(str))
        this.toyData = toyData,
        this.favCategories = {},
        this.possibleToys = {"Primary": [], "Secondary": []}
        this.secondaryWords = []
    }

    getToys(isPrimary) {

        const words = isPrimary ? this.words : this.secondaryWords

        const matches = []
        words.forEach(word => {

            if (ignoredWords.includes(word)) return


            console.log(word)

            this.toyData.forEach(toy => {




                if (word === toy.Category) {
                    this.favCategories[toy.Category] = this.favCategories[toy.Category] + 1 || 1
                }

                if (toy.words.includes(word)) {
                    this.favCategories[toy.Category] = this.favCategories[toy.Category] + 1 || 1
                    if (!(matches.includes(toy) || this.possibleToys.Primary.includes(toy) || this.possibleToys.Secondary.includes(toy) )) matches.push(toy)
                }
        })})

        if (isPrimary) this.possibleToys.Primary = matches
        else this.possibleToys.Secondary = matches
    
    }

    getTypoToys() {
        const secondaryMatches = []

        let allWords = []

        for (let toy in this.toyData) {
            for (let word in this.toyData[toy].words) {
                allWords.push(this.toyData[toy].words[word])
            }
        }



        const spellcheck = new natural.Spellcheck(allWords)
        this.words.forEach(wordInText => {
            spellcheck.getCorrections(wordInText, 1).forEach(correction => {
                if (correction !== wordInText && secondaryMatches.includes(correction)) this.secondaryWords.push(correction)
            })
        })
        
        this.getToys(false)
    }

    showToys() {
        console.log(this.possibleToys)
    }

    findKeyWords(wordsArray) {
        const keyWords = []
        wordsArray.forEach(word => {
            if (!ignoredWords.includes(word)) keyWords.push(word)
        })
        return keyWords

    }
    
}


const child1 = new childLetter("I want a bike for christmas!")

child1.getToys(child1.words)
child1.getTypoToys()
child1.showToys()
console.log(child1.favCategories)
