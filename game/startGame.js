var request = require("request");
var initSyn = require("./initSyn");
var initDef = require("./initDef");

//bootstraps the game process by fetching a random word and calling initDef with it.
module.exports = function(){
    request("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=25&minLength=4&maxLength=20&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error){
            console.log(error);
        } else {
            if(response && (response.statusCode === 200)){
                body = JSON.parse(body);
                initDef(body.word, initSyn);
            }
        }
    });
}