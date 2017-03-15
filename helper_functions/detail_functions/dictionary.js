var definition = require("./definition");
var examples = require("./examples");

module.exports = function(word){
    console.log("WORD: " + word );
    definition(word, examples);
};