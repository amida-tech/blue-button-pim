var pim = require('./index.js');

var inputObj = require('./test/artifacts/demographics.json').data.demographics;
var candidates = [
  {
    ...require('./test/artifacts/demographics.json').data.demographics,
    pat_key: "pat1"
  },
  {
    ...require('./test/artifacts/demographics_2.json').data.demographics,
    pat_key: "pat2"
  }
];

console.log("patient", inputObj);
console.log("candidates", candidates);

var match = pim.compareCandidates(inputObj, candidates);

console.log("match", match);

var blocks = pim.calculateBlockers(inputObj);

console.log("blocks", blocks);
