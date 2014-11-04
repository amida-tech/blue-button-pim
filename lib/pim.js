





//var configs = require('configs')

//var quantifier = require('quantifier/quantifier');
var decider = require('./decider/decider');
var filter = require('./filter/filter');


//main function

//initially, the input Object is assumed to be a JSON object. 
function findSimilarPatients(inputObj){


    //call filter methods

    //remove crap, return only relevant informations

    filteredObj = filter.purify(inputObj, ['demographics']);
    console.log(filteredObj);
    console.log('hi you monkey');
    //call compute 
    //weightObj = quanfifier.compute(inputJSON, outputJSON);

    weightObj = {};
    //use decider to get decisions

    decider.decideMatches(weightObj);

}
function findMostSimliarPatient(inputObj){



}
findSimilarPatients({});