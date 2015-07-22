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

module.exports.evaluate = evaluate;
