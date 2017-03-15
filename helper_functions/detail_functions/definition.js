var def_display = require("../display_functions/def_display");
var related_words = require("./related_words");
var request = require("request");
module.exports = function(word, callback){
    request("http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=5&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error){
            console.log(error);
        } else {
            if( response && (response.statusCode === 200) ){
                def_display(JSON.parse(body));
                if(callback){
                    console.log("\n");
                    callback(word, related_words);
                }
            }
        }
    });
};