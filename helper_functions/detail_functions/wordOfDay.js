var request = require("request");
var dictionary = require("./dictionary");

module.exports = function(){
  request("http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",function(error, response, body){
      if(error){
          console.log(error);
      } else {
          if(response && response.statusCode === 200){
              body = JSON.parse(body);
              console.log("\nWord Of The Day: " + body.word.toUpperCase() + "\n");
              dictionary(body.word);
          }
      }
  });  
};