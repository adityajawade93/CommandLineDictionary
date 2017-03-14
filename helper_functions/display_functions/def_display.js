module.exports = function(body){
    console.log("Definitions :-");
    body.forEach(function(definition){
        console.log("--" + definition.text + "\n");
    })
}