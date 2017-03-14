var request = require("request");
var example_display = require("../display_functions/example_display");

module.exports = function(word){
    request("http://api.wordnik.com:80/v4/word.json/"+ word +"/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",function(error, response, body){
      example_display(JSON.parse(body));
    });
};