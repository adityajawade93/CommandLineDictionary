var details = require("./helper_functions/details");

var args = process.argv;

if(args.length === 4){
    var operation = args[2]; 
    switch (operation) {
        case 'def':
            details.def(args[3]);
            break;
        case 'syn':
            details.syn(args[3], "synonym");
            break;
        case 'ant':
            details.ant(args[3], "antonym");
            break;
        case 'ex':
            details.ex(args[3]);
            break;
        case 'dict':
            details.dict(args[3]);
        
        default:
            console.log("illegal input");
    }
} else if(args.length === 3){
    if(args[2] === "play"){
        details.play();
    } else {
        details.dict(args[2]);
    }
} else {
    details.wod();
}