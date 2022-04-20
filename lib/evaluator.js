"use strict";

//evaluates matching score
function evaluate(score, at, mt) {
  var automaticThreshold = at || 17.73;
  var manualThreshold = mt || 15.957;

  var result = "no match";

  if (score >= automaticThreshold) {
    result = "automatic";
  } else if (score >= manualThreshold) {
    result = "manual";
  }

  return result;
}

module.exports.evaluate = evaluate;
