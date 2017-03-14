module.exports = function(body){
    console.log("Example Usage :-");
    body.examples.forEach(function(example){
        console.log(". " + example.text);
    });
};