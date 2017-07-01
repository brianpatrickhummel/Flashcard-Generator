// scope-safe constructor
function BasicCard(question, answer){
    if(!(this instanceof BasicCard)){
        return new BasicCard(question, answer);
    }
    this.question = question;
    this.answer = answer;
}

module.exports = BasicCard;