

var clozeDeck = [];

var ClozeCard = function(fullText, cloze, callback){
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = "";
    this.callback = this.compareInputs();
};

//check to be sure full text contains cloze statement
ClozeCard.prototype.compareInputs = function(fullText, clozeText){
    if (fullText.includes(clozeText)){
        this.partial = fullText.substr(clozeText);
        console.log(ClozeCard);
        console.log(this.partial);
        clozeDeck.push()
    }
    else logError();
};
// if cloze statement is not contained in full text, throw/log error
ClozeCard.prototype.logError = function(){
    console.log("cloze not contained in text");
    fs.appendFile("log.txt", "cloze not contained in text", function(error){
            if(error)console.log("error");
        });
};


// var clozeCard1 = new ClozeCard("My father is Jim Hummel", "Jim Hummel");
// clozeCard1.compareInputs();
module.exports = ClozeCard;