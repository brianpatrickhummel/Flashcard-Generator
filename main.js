var ClozeCard = require('./Clozecard.js');
var BasicCard = require('./BasicCard');
var inquirer = require('inquirer');

var askQuestion = function() {
    inquirer.prompt([
      {
        type: "list",
        name: "doWhat",
        message: "What would you like to do ?",
        choices: ["Practice", "Create New Cards"]
      },
      {
        type: "list",
        message: "Which type of card(s) do you want to create?",
        name: "cardType",
        when: function(answers){return answers.doWhat === "Create New Cards";},
        choices: ["Create Basic", "Create Cloze"]   
      },
      {
        type: "list",
        message: "Practice with which flashcard deck?",
        name: "cardType",
        when: function(answers){return answers.doWhat === "Practice";},
        choices: ["Basic Deck", "Cloze Deck"]   
      }
    ]).then(function(answers) {
        var action = answers.cardType;
        var lookup = {
            logError: function(){
                console.log("cloze not contained in text");
                fs.appendFile("log.txt", "cloze not contained in text", function(error){
                        if(error)console.log("error");
                    });
            },
            "Create Basic": 0,
            "Create Cloze": function(){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "fullText",
                        message: "Enter full text of statement",
                    },
                    {
                        type: "input",
                        message: "Enter portion of text to be cloze deleted",
                        name: "clozeText"
                    }
                    ]).then(function(answers) {
                        if ((answers.fullText).includes(answers.clozeText)){
                            console.log("success!");
                            // this.partial = fullText.substr(clozeText);
                            // console.log(ClozeCard);
                            // console.log(this.partial);
                            // clozeDeck.push()
                        }
                        else this.logError();



                        // new ClozeCard()
                    });
            },
            "Basic Deck": "",
            "Cloze Deck": ""
        }; 
        lookup[action]();   
    });
};
        
  
 

askQuestion();