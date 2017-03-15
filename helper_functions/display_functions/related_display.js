module.exports = function(body, type){
    var found = false;
    body.forEach(function(relation){
        if(relation.relationshipType === type){
            var words = relation.words;
            var relWords = "";
            console.log(type.toUpperCase() + "S :-");
            words.forEach(function(word){
                relWords += word + ", ";
            });
            relWords = relWords.substring(0, relWords.length - 2) + ".";
            console.log(relWords);
            found = true;
        }
    });
    if(!found){
        console.log("No " + type + "s found for the word\n");
    }
};