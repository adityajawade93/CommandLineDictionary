var definition      = require("./detail_functions/definition"),
    related_words   = require("./detail_functions/related_words"),
    examples        = require("./detail_functions/examples"),
    dictionary      = require("./detail_functions/dictionary"),
    wordOfDay       = require("./detail_functions/wordOfDay"),
    startGame       = require("../game/startGame");

//exporting all the all the neccessary functions to app.js at once
module.exports = {
    def: definition,
    syn: related_words,
    ant: related_words,
    ex: examples,
    dict: dictionary,
    wod: wordOfDay,
    play: startGame
};