// use jquery // concert these 3 steps with in for loop and 1 second gap

STOP_WORDS_SET = new Set(["able", "about", "above", "abroad", "according", "accordingly", "across", "actually", "adj", "after", "afterwards", "again", "against", "ago", "ahead", "ain't", "all", "allow", "allows", "almost", "alone",
"along", "alongside", "already", "also", "although", "always", "am", "amid", "amidst", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere",
"apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "a's", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "back", "backward", "backwards", "be", "became",
"because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by",
"came", "can", "cannot", "cant", "can't", "caption", "cause", "causes", "certain", "certainly", "changes", "clearly", "c'mon", "co", "co.", "com", "come", "comes", "concerning",
"consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "c's", "currently", "dare", "daren't", "definitely", "described", "despite", "did",
"didn't", "different", "directly", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "during", "each", "edu", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough",
"entirely", "especially", "et", "etc", "even", "ever", "evermore", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "fairly", "far", "farther", "few", "fewer", "fifth",
"first", "five", "followed", "following", "follows", "for", "forever", "former", "formerly", "forth", "forward", "found", "four", "from", "further", "furthermore", "get", "gets", "getting", "given", "gives", "go",
"goes", "going", "gone", "got", "gotten", "greetings", "had", "hadn't", "half", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "hello", "help", "hence", "her", "here",
"hereafter", "hereby", "herein", "here's", "hereupon", "hers", "herself", "he's", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "hundred", "i'd", "ie", "if", "ignored", "i'll",
"i'm", "immediate", "in", "inasmuch", "inc", "inc.", "indeed", "indicate", "indicated", "indicates", "inner", "inside", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "its", "it's",
"itself", "i've", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "likewise",
"little", "look", "looking", "looks", "low", "lower", "ltd", "made", "mainly", "make", "makes", "many", "may", "maybe", "mayn't", "me", "mean", "meantime", "meanwhile", "merely", "might", "mightn't", "mine",
"minus", "miss", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "must", "mustn't", "my", "myself", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needn't", "needs", "neither", "never",
"neverf", "neverless", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "no-one", "nor", "normally", "not", "nothing", "notwithstanding", "novel", "now",
"nowhere", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "one's", "only", "onto", "opposite", "or", "other", "others", "otherwise", "ought", "oughtn't", "our", "ours",
"ourselves", "out", "outside", "over", "overall", "own", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provided", "provides", "que",
"quite", "qv", "rather", "rd", "re", "really", "reasonably", "recent", "recently", "regarding", "regardless", "regards", "relatively", "respectively", "right", "round", "said", "same", "saw", "say", "saying",
"says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "shan't", "she", "she'd",
"she'll", "she's", "should", "shouldn't", "since", "six", "so", "some", "somebody", "someday", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified",
"specify", "specifying", "still", "sub", "such", "sup", "sure", "take", "taken", "taking", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that's", "that've", "the", "their",
"theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "there'd", "therefore", "therein", "there'll", "there're", "theres", "there's", "thereupon", "there've", "these", "they", "they'd",
"they'll", "they're", "they've", "thing", "things", "think", "third", "thirty", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "till", "to", "together", "too",
"took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "t's", "twice", "two", "un", "under", "underneath", "undoing", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon",
"upwards", "us", "use", "used", "useful", "uses", "using", "usually", "v", "value", "various", "versus", "very", "via", "viz", "vs", "want", "wants", "was", "wasn't", "way", "we", "we'd", "welcome", "well", "we'll",
"went", "were", "we're", "weren't", "we've", "what", "whatever", "what'll", "what's", "what've", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "where's", "whereupon",
"wherever", "whether", "which", "whichever", "while", "whilst", "whither", "who", "who'd", "whoever", "whole", "who'll", "whom", "whomever", "who's", "whose", "why", "will", "willing", "wish", "with", "within",
"without", "wonder", "won't", "would", "wouldn't", "yes", "yet", "you", "you'd", "you'll", "your", "you're", "yours", "yourself", "yourselves", "you've", "zero", "a", "how's", "i", "when's", "why's", "b", "c", "d",
"e", "f", "g", "h", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "uucp", "w", "x", "y", "z", "I", "www", "amount", "bill", "bottom", "call", "computer", "con", "couldnt", "cry", "de", "describe", "detail",
"due", "eleven", "empty", "fifteen", "fifty", "fill", "find", "fire", "forty", "front", "full", "give", "hasnt", "herse", "himse", "interest", "itse”", "mill", "move", "myse”", "part", "put", "show", "side", "sincere",
"sixty", "system", "ten", "thick", "thin", "top", "twelve", "twenty", "abst", "accordance", "act", "added", "adopted", "affected", "affecting", "affects", "ah", "announce", "anymore", "apparently", "approximately",
"aren", "arent", "arise", "auth", "beginning", "beginnings", "begins", "biol", "briefly", "ca", "date", "ed", "effect", "et-al", "ff", "fix", "gave", "giving", "heres", "hes", "hid", "home", "id", "im", "immediately",
"importance", "important", "index", "information", "invention", "itd", "keys", "kg", "km", "largely", "lets", "line", "'ll", "means", "mg", "million", "ml", "mug", "na", "nay", "necessarily", "nos", "noted", "obtain",
"obtained", "omitted", "ord", "owing", "page", "pages", "poorly", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "promptly", "proud", "quickly", "ran", "readily", "ref", "refs",
"related", "research", "resulted", "resulting", "results", "run", "sec", "section", "shed", "shes", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "slightly", "somethan",
"specifically", "state", "states", "stop", "strongly", "substantially", "successfully", "sufficiently", "suggest", "thered", "thereof", "therere", "thereto", "theyd", "theyre", "thou", "thoughh", "thousand", "throug",
"til", "tip", "ts", "ups", "usefully", "usefulness", "'ve", "vol", "vols", "wed", "whats", "wheres", "whim", "whod", "whos", "widely", "words", "world", "youd", "youre",])

function calculateMatchScore(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    function calculateSubsequenceScore(string1, string2) {
        let i = 0; // Pointer for string1
        let commonSubsequence = '';
        if (string1.length === 0 || string2.length === 0) {
            return 0;
        }
        smallest = Math.min(string1.length, string2.length)
        while (i < smallest) {
            if (string1[i] === string2[i]) {
                commonSubsequence += string1[i];
            } else {
                
            }
            i++;
        }
        // console.log(commonSubsequence);
        
        const subsequenceScore = commonSubsequence.length ** 2;
        return subsequenceScore;
    }
    
    
    function calculateCardinalityScore(string1, string2) {
        function countCharacters(string) {
            const charCount = {};
            
            for (const char of string) {
                charCount[char] = (charCount[char] || 0) + 1;
            }
            
            return charCount;
        }
        
        const charCount1 = countCharacters(string1);
        const charCount2 = countCharacters(string2);
        
        // Calculate cardinality score
        let cardinalityScore = 0;
        for (const char in charCount1) {
            if (charCount2[char]) {
                cardinalityScore += Math.min(charCount1[char], charCount2[char]);
            }
        }
        return cardinalityScore;
        
        
    }
    const subsequenceScore = calculateSubsequenceScore(string1, string2);
    const cardinalityScore = calculateCardinalityScore(string1, string2);
    const continuityScore = subsequenceScore;
    const matchScore = continuityScore + cardinalityScore;
    return matchScore;
}


EXPERIENCES = {
    4: ["total","python", "django", "flask", "javascript", "node","node.js","nodejs", "express", "elysia","elysiajs", "css", "less", "bootstrap", "npm", "yarn", "jquery", "ajax", "json", "xml", "rest", "api",],
    3: ["mongo", "postgresql", "sql", "mysql", "nosql", "mongodb", "linux", "aws","gcp","azure","docker", "bash", "shell", "git", "github"],
    2: ["jira", "agile", "scrum", "kanban", "trello", "slack","tailwind",],
    1: [ "react", "angular","graphql"]
}

SKILL_MAP = {}
Object.keys(EXPERIENCES).reverse().map((key) => {
    EXPERIENCES[key].map((skill) => {
        SKILL_MAP[skill] = key
    })
})


function logicalString(string) {
    string = string.toLowerCase()
    // keep only alphanumaric characters
    string = string.replace(/[^a-z0-9]/gmi, " ")
    // remove stop words
    string = string.split(" ").filter((word) => {
        return !STOP_WORDS_SET.has(word)
    }).join(" ")
    return string
}



function respondExpQuestion(question) {
    question = logicalString(question)
    // split question and check for each word if exist in skill map
    var words = question.split(" ")
    words = words.filter(Boolean)
    for (w of words) {
        if (SKILL_MAP[w]) {
            return SKILL_MAP[w]
        }
    }
    tmp_score_map = {}
    for (w of words) {
        for (skill in SKILL_MAP) {
            s= calculateMatchScore(w, skill)
            // console.log(w, skill, s);
            if (tmp_score_map[w] && tmp_score_map[w].score > s) {
                continue
            }
            tmp_score_map[w] = {skill: skill, score: s}
        }
    }
    // return skill with max score
    
    console.log(tmp_score_map);
    
    max_score = Math.max(...Object.values(tmp_score_map).map((o) => o.score))
    correct_skill = Object.values(tmp_score_map).filter((o) => o.score == max_score)[0].skill
    return SKILL_MAP[correct_skill]
    
}

// question = "How many years of work experience do you have with Amazon Web Services (AWS)?"
// question = "How many years of exp do you have in MangoDB or DynamoDB?"
// respondExpQuestion(question)

fillAllExpQuestions = () => {
    let form = document.querySelectorAll("form")
    let inputs = form[0].querySelectorAll("input")
    labels = [...inputs].map((input) => {
        // get labels as previous element of input
        return input.previousElementSibling
    })
    // if label contains year or years
    // then start filling
    for (label of labels) {
        if (label.innerText.toLowerCase().includes("year")) {
            // find input
            input = label.nextElementSibling
            // find value
            value = respondExpQuestion(label.innerText)
            // fill value parse integer
            input.click()
            input.value = parseInt(value)
            console.log("filled", label.innerText, value);
        }
    }
    
    console.log(labels);
    
}
// fillAllExpQuestions()





// _____________________________________
window.$ = $
window.$$ = $$
var el_timings_map = {
    ".jobs-apply-button" : 1000,
    "#ember3150": 2000,
    "#ember3157" : 3000
}


//  promisify all click actions

function click(el) {
    return new Promise(function(resolve, reject) {
        $(el).click()
        resolve()
    })
}

async function nextStep() {
    await sleep(500)
    return new Promise(function(resolve, reject) {
        // find all buttons
        q= document.querySelectorAll("form button")
        // click last button
        q[q.length - 1].click()
        resolve()
    })
}

fillSelectOption = () => {
    // ! use only plain JS
    return new Promise(function (resolve, reject) {
        try {
            selectopt = document.querySelectorAll("form select")[0]
            options = [...selectopt.querySelectorAll("option")]
            options[1].selected = true

            
            
            
            
            resolve()
        } catch (error) {
            // continue
            console.log(error);
            resolve()
        }
        
    })
}

fillSelectOption()


function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms)
    })
}



click(".jobs-apply-button").then(nextStep).then(nextStep).then(async function () {
    // maybe questions
    if (document.querySelectorAll("form")[0].innerText.toLowerCase().includes("question")) {
        // alert("questions found")
        fillSelectOption()
    }
    fillAllExpQuestions()
    // return nextStep()
})