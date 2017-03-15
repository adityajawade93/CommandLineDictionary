var exit = require("../exit");
//displays all the definitions for a word with proper formatting
module.exports = function(body){
    if(body.length === 0){
        exit();
    }
    console.log("Definitions :-\n");
    body.forEach(function(definition){
        console.log("--" + definition.text + "\n");
    })
}