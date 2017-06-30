var ClozeCard = function(fullText, clozeText){
    this.fullText = fullText;
    this.cloze = clozeText;
    this.partial = fullText.replace(clozeText, "...");
};


module.exports = ClozeCard;