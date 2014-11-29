//var configs = require('configs')

var quantifier = require('./quantifier/quantifier');
var decider = require('./decider/decider');
var fs = require('fs');
var filter = require('./filter/filter');

//initially, the input Object is assumed to be a JSON object.
function findSimilarPatients(inputObj, candidates) {
    //console.log('input object test');
    //console.log(JSON.stringify(inputObj, null, 4));
    //call filter methods

    var index=-1;
    var decisions=[];

    //iterate through all candidates
    for (var i = 0; i < candidates.length; i++) {

        var candidateObj=candidates[i];

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

        //list of all match decisions
        decisions.push(matchDecision);
        //save index of matched candidate
        if (matchDecision) index=i;

    }

    return {'index':index, 'decisions':decisions};

}

function findMostSimliarPatient(inputObj) {
}

module.exports.findSimilarPatients = findSimilarPatients;
