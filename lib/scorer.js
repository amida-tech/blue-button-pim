"use strict";

//scores match between candidate vs patient data
function score(data, candidate) {
  var result = 0;
  /*
      Scoring calculations here
  */

  //Last Name
  if (!data.name.last || !candidate.name.last) {
    result = result + 0;
  } else if (data.name.last.toUpperCase() === candidate.name.last.toUpperCase()) {
    result = result + 9.58;
  } else if (data.name.last.toUpperCase().substring(0, 3) === candidate.name.last.toUpperCase().substring(0, 3)) {
    result = result + 5.18;
  } else if (data.name.last.toUpperCase().substring(0, 3) !== candidate.name.last.toUpperCase().substring(0, 3)) {
    result = result - 3.62;
  }

  //First Name
  if (!data.name.first || !candidate.name.first) {
    result = result + 0;
  } else if (data.name.first.toUpperCase() === candidate.name.first.toUpperCase()) {
    result = result + 6.69;
  } else if (data.name.first.toUpperCase().substring(0, 3) === candidate.name.first.toUpperCase().substring(0, 3)) {
    result = result + 3.37;
  } else if (data.name.first.toUpperCase().substring(0, 3) !== candidate.name.first.toUpperCase().substring(0, 3)) {
    result = result - 3.27;
  }

  //Middle Initial
  if (!data.name.middle || !candidate.name.middle) {
    result = result + 0;
  } else if (data.name.middle.toUpperCase().substring(0, 1) === candidate.name.middle.toUpperCase().substring(0, 1)) {
    result = result + 3.65;
  }

  //DOB
  if (!data.dob || !candidate.dob) {
    result = result + 0;
  } else if (data.dob.substring(0, 10) === candidate.dob.substring(0, 10)) {
    result = result + 6.22;
  }

  //Initials
  result = result + 0;

  return result;
}

module.exports.score = score;
