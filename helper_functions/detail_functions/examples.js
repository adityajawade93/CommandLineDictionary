var request = require("request");
var example_display = require("../display_functions/example_display");
var related_words = require("./related_words");

module.exports = function(word,callback){
    request("http://api.wordnik.com:80/v4/word.json/"+ word +"/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",function(error, response, body){
      if(error) {
            console.log(error);
        } else {
            if(response && (response.statusCode === 200)) {
              example_display(JSON.parse(body));
              if(callback){
                console.log("\n");
                callback(word,"synonym", related_words);
              }
            }
        }
    });
};