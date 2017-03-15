var request = require("request");

//populates the game object with the synonyms of the random word and passes it to initGame to start the word game.
module.exports = function(word, game, callback){
    request("http://api.wordnik.com/v4/word.json/" + word + "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            if(response && (response.statusCode === 200)) {
                body = JSON.parse(body);
                var found = false;
                body.forEach(function(relation){
                    if(relation.relationshipType === "synonym"){
                        found = true;
                        game.syn = relation.words;
                        callback(game);
                    }
                });
                if(!found){
                    game.syn = [];
                    callback(game);
                }
            }
        }
    });
};