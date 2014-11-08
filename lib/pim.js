





//var configs = require('configs')

var quantifier = require('./quantifier/quantifier');
var decider = require('./decider/decider');
var fs = require('fs');
var filter = require('./filter/filter');

var inputObj = require('./cms_generated.json').data;
//var candidateObj = require('./cms_generated_2.json').data;
var candidateObj = require('./cms_generated.json').data;
//main function

//initially, the input Object is assumed to be a JSON object.
function findSimilarPatients(inputObj){
	//console.log('input object test');
	//console.log(JSON.stringify(inputObj, null, 4));
    //call filter methods

    //remove crap, return only relevant information

    filteredInputObj = filter.purify(inputObj, ['demographics']);
    filteredOutputObj = filter.purify(candidateObj, ['demographics']);


    console.log(filteredInputObj);
    console.log(filteredOutputObj);
    //call compute, first argument is the source that you want to find,
    //second argument will be an array of stuff that you want to look for/compute
    //values from.
    //last parameter is the configuration JSON. It will go last.
    weightObj = quantifier.compute(inputObj, candidateObj);


    //use decider to get decisions

    matchDecision = decider.decideMatches(weightObj);
    console.log("match decision", matchDecision);

}


function findMostSimliarPatient(inputObj){



}
findSimilarPatients(inputObj);
