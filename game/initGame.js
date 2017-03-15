var prompt = require("prompt");
var shuffle = require("../helper_functions/shuffle");
var dictionary = require("../helper_functions/detail_functions/dictionary");
module.exports = function(game){
    
    game.hints = [];
    
    generateHints();
    
    console.log("You have to guess the word from its definition , if you cant ; you will be given three hints :-");
    var def = game.def.pop();
    def = def.text;
    console.log("def :-" + def + "\n Can you guess the word:");
    prompt.start();
    accept_answer();
    
    


    
    
    function accept_answer(){
        prompt.get("guess", function(error, result){
            if(error){
                console.log(error);
            } else {
                if(check_answer(result.guess.toLowerCase())){
                    console.log("Your answer is correct");
                    prompt.stop();
                } else {
                    wrong_answer();
                }
            }
        });
    }//end accept answer
    
    function check_answer(word){
        var correct = false;
        game.syn.forEach(function(syn){
            if(syn === word){
                correct = true;
            }
        });
        if( word === game.word ){
                correct = true;
            }
        return correct;    
    }//check answer
    
    function wrong_answer(){
        console.log("1.Try again\n2.Hint\n3.Quit");
        console.log("input either 1 2 or 3");
        prompt.get("choice", function(error, result){
            if(error){
                console.log(error);
            } else {
                switch(result.choice){
                    case "1":
                        accept_answer();
                        break;
                    case '2':
                        give_hint();
                        break;
                    case '3':
                        console.log("YOU QUIT THE GAME!!!");
                        quit();
                        break;
                    default:
                        console.log("Wrong choice , try again");
                        wrong_answer();
                }
            }
        });
        
    }//end wrong answer
    
    function give_hint(){
        if(game.hints.length > 0){
            var hint = game.hints.pop();
            if(hint.type === "synonym"){
                game.syn.splice(game.syn.indexOf(hint.text), 1);
                console.log("you cannot use this synonym as the answer");
            }
            console.log("you have got " + game.hints.length + " hints left!");
            console.log("Hint: " + hint.type + ":" + hint.text);
            accept_answer();
        } else {
            console.log("you have no more hints left");
            quit();
        }
    }
    
    function quit(){
        console.log("The answer is:");
        dictionary(game.word);
        prompt.stop();
    }
    
    
    function generateHints(){
        var hint_text = null;
        var hint = {};
        if(game.def.length > 1){
            hint_text = game.def.pop();
            hint.type = "def";
            hint.text = hint_text.text;
            game.hints.push(hint);
            hint = {};
        }
        
        if(game.syn.length > 0){
            hint_text = game.syn.pop();
            hint.type = "synonym";
            hint.text = hint_text;
            game.hints.push(hint);
            hint = {};
        }
        
        hint.type = "shuffled word";
        hint.text = shuffle(game.word);
        game.hints.push(hint);
    }//end generate hints
    
};
