
//Common Verbs

const commonVerbs = [
    "be", "have", "do", "say", "get", "make", "go", "know", "take", "see",
    "come", "think", "look", "want", "give", "use", "find", "tell", "ask", "work",
    "seem", "feel", "try", "leave", "call", "need", "become", "keep", "let", "begin",
    "help", "show", "hear", "move", "like", "live", "believe", "hold",
    "bring", "happen", "write", "provide", "sit", "stand", "lose", "pay", "meet", "include",
    "continue", "set", "learn", "change", "lead", "understand", "watch", "follow", "stop", "create",
    "speak", "allow", "add", "open", "walk", "win", "offer",
    "remember", "love", "consider", "appear", "buy", "wait", "serve","send", "expect",
     "stay", "fall", "cut", "reach", "kill", "raise", "pass", "sell", "decide",
    "return", "explain", "hope", "develop", "carry", "break", "receive", "agree", "support"
];


//Common Connectives

const commonConnectives = [
    "for", "and", "nor", "but", "or", "yet", "so",
    "after", "although", "as", "because", "before", "even if", "even though",
    "if", "in order that", "once", "provided that", "since", "so that",
    "though", "unless", "until", "when", "whenever", "where", "whereas",
    "wherever", "while", "however", "moreover", "therefore", "consequently", "furthermore", 
    "nevertheless", "thus", "meanwhile", "nonetheless", "otherwise",
    "still", "then", "thereafter", "thereby", "hence", "accordingly"
];


//Common pronouns

const commonPronouns = [
    "I", "you", "he", "she", "it", "we", "they",
    "me", "him", "her", "us", "them",
    "my", "your", "his", "her", "its", "our", "their",
    "mine", "yours", "his", "hers", "ours", "theirs",
    "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves",
    "this", "that", "these", "those",
    "who", "whom", "whose", "which", "what",
    "someone", "something", "anyone", "anything", "everyone", "everything", "no one", "nothing", "few", "many", "none",
    "each other", "one another"
];

//articles

const articles = ["a", "an", "the"]


//Other ignored words

const otherWords = ["santa",  "hello", "hi", "bye", "goodbye", "thanks", "thank", "dear", "merry", "christmas", "xmas", "happy", "new", "year", "letter"]



const ignoredWords = [...commonVerbs, ...commonConnectives, ...commonPronouns, ...articles, ...otherWords]

module.exports = ignoredWords