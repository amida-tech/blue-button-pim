





//var configs = require('configs')

var quantifier = require('computator');
var decider = require('decider');
var filter = require('filter');


//main function

//initially, the input Object is assumed to be a JSON object. 
function findSimilarPatients(inputObj){


    //call filter methods

    //remove crap, return only relevant informations

    filteredObj = filter.purify(inputObj, ['demographics']);
    console.log(filteredObj);

    //call compute 
    //weightObj = quanfifier.compute(inputJSON, outputJSON);

    weightObj = {};
    //use decider to get decisions

    decider.findMatches(weightObj);

}


function findMostSimliarPatient(inputObj){



}
