"use strict";

//scores match between candidate vs patient data
function score(data, candidate) {
    var result = 0;

    /*
        Scoring calculations here
    */

    //SSN
    result = result + 0;

    //Last Name
    if (!data.name.last || !candidate.data.name.last) {
        result = result + 0;
    } else if (data.name.last.toUpperCase() === candidate.data.name.last.toUpperCase()) {
        result = result + 9.58;
    } else if (data.name.last.toUpperCase().substring(0, 3) === candidate.data.name.last.toUpperCase().substring(0, 3)) {
        result = result + 5.18;
    } else if (data.name.last.toUpperCase().substring(0, 3) !== candidate.data.name.last.toUpperCase().substring(0, 3)) {
        result = result - 3.62;
    }

    //First Name
    if (!data.name.first || !candidate.data.name.first) {
        result = result + 0;
    } else if (data.name.first.toUpperCase() === candidate.data.name.first.toUpperCase()) {
        result = result + 6.69;
    } else if (data.name.first.toUpperCase().substring(0, 3) === candidate.data.name.first.toUpperCase().substring(0, 3)) {
        result = result + 3.37;
    } else if (data.name.first.toUpperCase().substring(0, 3) !== candidate.data.name.first.toUpperCase().substring(0, 3)) {
        result = result - 3.27;
    }

    //Middle Initial
    if (!data.name.middle || !candidate.data.name.middle) {
        result = result + 0;
    } else if (data.name.middle[0].toUpperCase().substring(0, 1) === candidate.data.name.middle[0].toUpperCase().substring(0, 1)) {
        result = result + 3.65;
    }

    //DOB
    if (!data.dob || !candidate.data.dob) {
        result = result + 0;
    } else if (data.dob.point.date.substring(0, 10) === candidate.data.dob.point.date.substring(0, 10)) {
        result = result + 6.22;
    }

    //Initials
    result = result + 0;

    return result;

}

//simplistic comparison
function score_simple(data, candidate) {
    var result = 0;

    if (data.dob.point.date.substring(0, 10) === candidate.data.dob.point.date.substring(0, 10) &&
        data.name.first.toUpperCase() === candidate.data.name.first.toUpperCase() &&
        data.name.last.toUpperCase() === candidate.data.name.last.toUpperCase()) {
        result = 100;
    } else {
        result = 0;
    }

    return result;

}

module.exports.score = score;
module.exports.score_simple = score_simple;
