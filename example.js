var pim = require('./index.js');


//var configs = require('configs')

var inputObj = require('./test/artifacts/cms_generated.json').data.demographics;
var candidates = [{data:require('./test/artifacts/cms_generated.json').data.demographics, pat_key:"pat1"}, {data:require('./test/artifacts/cms_generated_2.json').data.demographics, pat_key:"pat2"}];

console.log("patient",inputObj);
console.log("candidates",candidates);

var match = pim.compare_candidates(inputObj, candidates);

console.log(match);

var blocks = pim.calculate_blockers(inputObj);

console.log(blocks);