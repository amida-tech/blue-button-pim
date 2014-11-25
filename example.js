var pim = require('./index.js');


//var configs = require('configs')

var quantifier = pim.quantifier;
var decider = pim.decider;
var fs = require('fs');
var filter = pim.filter;

var inputObj = require('./lib/cms_generated.json').data;
var candidates = [require('./lib/cms_generated.json').data];



var match = pim.pim.findSimilarPatients(inputObj, candidates);

console.log(match);