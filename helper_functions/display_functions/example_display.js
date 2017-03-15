var exit = require("../exit");
module.exports = function(body){
    if(body.examples.length === 0){
        exit();
    }
    console.log("Example Usage :-");
    body.examples.forEach(function(example){
        console.log(". " + example.text + "\n");
    });
};