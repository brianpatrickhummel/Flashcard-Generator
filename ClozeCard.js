// scope-safe constructor
function ClozeCard(fullText, clozeText){
     if(!(this instanceof ClozeCard)){
        return new ClozeCard(fullText, clozeText);
    }
    this.fullText = fullText;
    this.answer = clozeText;
    this.question = fullText.replace(clozeText, "...");
}

module.exports = ClozeCard;