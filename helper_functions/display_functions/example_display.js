var exit = require("../exit");
//displays the example usage of a word as bullet points.
module.exports = function(body){
    if(body.examples.length === 0){
        exit();
    }
    console.log("Example Usage :-\n");
    body.examples.forEach(function(example){
        console.log(". " + example.text + "\n");
    });
};