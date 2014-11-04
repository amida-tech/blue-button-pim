





//var configs = require('configs')

var quantifier = require('./quantifier/quantifier');
var decider = require('./decider/decider');
var fs = require('fs');
var filter = require('./filter/filter');

var inputObj = require('./cms_generated.json').data;
var candidateObj = require('./cms_generated.json').data;
//main function

//initially, the input Object is assumed to be a JSON object. 
function findSimilarPatients(inputObj){
	console.log('input object test');
	console.log(JSON.stringify(inputObj, null, 4));
    //call filter methods

    //remove crap, return only relevant informations

    filteredObj = filter.purify(inputObj, ['demographics']);
    console.log(filteredObj);
    //call compute, first argument is the source that you want to find,
    //second argument will be an array of stuff that you want to look for/compute
    //values from. 
    weightObj = quantifier.computeWeights(inputObj, candidateObj);

    weightObj = {};
    //use decider to get decisions

    decider.decideMatches(weightObj);

}
function findMostSimliarPatient(inputObj){



}
findSimilarPatients(inputObj);