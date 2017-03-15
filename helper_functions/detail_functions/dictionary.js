var definition = require("./definition");
var examples = require("./examples");
//function displays the complete dictionary entry for a word by calling all the previous functions.
module.exports = function(word){
    console.log("\nWord: " + word.toUpperCase() + "\n" );
    definition(word, examples);
};