var pim = require('./index.js');


//var configs = require('configs')

var quantifier = pim.quantifier;
var decider = pim.decider;
var fs = require('fs');
var filter = pim.filter;

var inputObj = require('./lib/cms_generated.json').data;
var candidates = [require('./lib/cms_generated.json').data, require('./lib/cms_generated_2.json').data];

console.log("candidates",candidates);

var match = pim.pim.findSimilarPatients(inputObj, candidates);

console.log(match);