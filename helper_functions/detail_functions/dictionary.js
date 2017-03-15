var definition = require("./definition");
var examples = require("./examples");

module.exports = function(word){
    console.log("\nWord: " + word.toUpperCase() + "\n" );
    definition(word, examples);
};