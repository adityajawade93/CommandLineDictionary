var def_display = require("../display_functions/def_display");
var request = require("request");
module.exports = function(word){
    request("http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(error, response, body){
        if(error){
            console.log(error);
        } else {
            if( response && (response.statusCode === 200) ){
                def_display(JSON.parse(body));
            }
        }
    });
};