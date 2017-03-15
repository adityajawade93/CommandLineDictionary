var definition = require("./detail_functions/definition");
var related_words = require("./detail_functions/related_words");
var examples = require("./detail_functions/examples");
var dictionary = require("./detail_functions/dictionary");
var wordOfDay = require("./detail_functions/wordOfDay");
var startGame = require("../game/startGame");

module.exports = {
    def: definition,
    syn: related_words,
    ant: related_words,
    ex: examples,
    dict: dictionary,
    wod: wordOfDay,
    play: startGame
};