var exit = require("../exit");
module.exports = function(body){
    if(body.length === 0){
        exit();
    }
    console.log("Definitions :-");
    body.forEach(function(definition){
        console.log("--" + definition.text + "\n");
    })
}