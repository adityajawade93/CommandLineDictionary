var request = require("request");
var related_display = require("../display_functions/related_display");

module.exports = function(word, type, callback){
    request("http://api.wordnik.com:80/v4/word.json/" + word + "/relatedWords?useCanonical=false&relationshipTypes=" + type + "&limitPerRelationshipType=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            if(response && (response.statusCode === 200)) {
                related_display(JSON.parse(body), type);
                if(callback){
                    console.log("\n");
                    callback(word, "antonym");
                }
            }
        }
    });
};