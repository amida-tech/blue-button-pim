"use strict";

var score = require("./scorer.js").score;
var evaluate = require("./evaluator.js").evaluate;

//var score=require("./scorer.js").score_simple;
//var evaluate=require("./evaluator.js").evaluate_simple;

//runs through array of candidates and compare them with patient's data
//returns list of matches and flagged candidates
function compare(data, candidates, shim, at, mt) {
  var results = [];

  var i;
  for (i = 0; i < candidates.length; i++) {
    var candidate = candidates[i];

    if (shim) {
      candidate = shim(candidate);
    }

    //compare candidate with patient
    var s = score(data, candidate);
    var m = evaluate(s, at, mt);

    // all candidates are returned, with score
    // and matching status
    var result = {};
    result.pat_key = candidate.pat_key;
    result.match = m;
    result.score = s;
    results.push(result);
  }

  return results;
}

module.exports.compare = compare;
