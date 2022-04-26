let quotes = [
    "help",
    "this is it",
    "what you say of this",
    "yupp"
];

function getQuote(quoteArray) {
    let quote = quoteArray[quoteArray.length * Math.random()];
    return(quoteArray[quote]);
};

var here = getQuote(quotes)

var q = document.getElementById("quote");
var printQuote = document.createTextNode(here);
q.appendChild(printQuote);