var prompt = require("prompt");

prompt.start();

accept_answer();

function wrong_answer(){
    console.log("1.Try Again\n2.Quit");
    prompt.get('choice' , function(err, result){
    if(err){
        console.log(err);
    } else {
    switch(result.choice){
        case '1':
            accept_answer();
            break;
        case '2':
            console.log("quiting");
            quit();
            break;
      }
      
    }
});
}


function accept_answer(){
    prompt.get("answer", function(err , result){
        if(err){
            console.log(err);
        } else {
            if(result.answer === "word"){
                console.log("correct answer");
                quit();
            } else {
                wrong_answer();
            }
        }
    });
}

function quit(){
    prompt.stop();
}
