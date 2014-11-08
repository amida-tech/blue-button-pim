
// put require files

var fs = require("fs");

var deciderConfig =require("./deciderConfig.js").deciderConfig;



//for now, this returns true and false only.

function decideMatches(weightObj){

    var match=true;

    for (var k in deciderConfig.keys){
        var key=deciderConfig.keys[k];

        if (weightObj[key]!==1) match=false;

    }



    //return true or false
	return match;

}

//sum up all the weights of
function sum(weightObj){

	for(var key in weightObj){



	}

}

module.exports.decideMatches = decideMatches;

