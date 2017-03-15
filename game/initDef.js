var request = require("request");
var initGame = require("./initGame");
var game = {};

//initializes an empty game object then populate it with the random word and definitions for it then passes it to initSyn.
module.exports = function(word, callback){
    request("http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error){
            console.log(error);
        } else {
            if( response && (response.statusCode === 200) ){
                body = JSON.parse(body);
                game.word = word.toLowerCase();
                game.def = body;
                callback(word, game ,initGame);
            }
        }
    });
};