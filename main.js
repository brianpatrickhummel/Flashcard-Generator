var ClozeCard = require('./Clozecard.js');
var BasicCard = require('./BasicCard');
var inquirer = require('inquirer');
var fs = require('fs');

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
        var currentdate = new Date();   // used to set date information when writing to log.txt
        var action = answers.cardType;
        var clozeDeck = [];
        var lookup = {
            // text to be written as log entry header
            logTime: "Log entry created on " + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
            // if cloze statement is not contained in full text, throw/log error
            logError: function(){
                console.log("cloze not contained in text, please try again: \n");
                fs.appendFile("log.txt", lookup.logTime + "\ncloze not contained in text\n", function(error){
                        if(error)console.log("error");
                        else lookup[action]();
                    });
            },
            // create basic flashcards------------------------------------
            "Create Basic": 0,
            // create cloze flashcards------------------------------------
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
                            var newClozeCard = new ClozeCard(answers.fullText, answers.clozeText);
                            clozeDeck.push(newClozeCard);
                            console.log(clozeDeck);
                        }
                        else lookup.logError();
                    });
            },
            // practice: read from basic deck----------------------------
            "Basic Deck": "",
            // practice: read from cloze deck-----------------------------
            "Cloze Deck": ""
        }; 
        lookup[action]();   
    });
};
        
  
 

askQuestion();