"use strict";

//evaluates matching score
function evaluate(score) {
    var result = "no match";

    if (score >= 17.73) {
        result = "automatic";
    } else if (score >= 15.957) {
        result = "manual";
    }

    return result;
}

//simplistic evaluation
function evaluate_simple(score) {
    var result = "no match";

    if (score === 100) {
        result = "automatic";
    }

    return result;
}

module.exports.evaluate = evaluate;
module.exports.evaluate_simple = evaluate_simple;
