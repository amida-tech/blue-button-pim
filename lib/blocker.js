"use strict";

var DoubleMetaphone = require('doublemetaphone');
var encoder = new DoubleMetaphone();

/* Data schema (example)

    data: {
        "name": {
            "first": "John",
            "middle": "X",
            "last": "Doe"
        },
        "gender": "Male",
        "address": {
            "zip": "10001",
            "street": "123 Main St",
            "city": "Madison",
            "state": "WI",
            "country": "US"
        },
        "email": "john@doe.net",
        "phone": "5556667777",
        "dob": "1975-05-01"
    }

*/

//takes patient data (demographics section) and 
//calculates and returns blocking traits for the matching module
function calculate(data) {
  var traits = {};

  /*
      The following is a list of blocking traits computed on entities for this matching module:
      LNMPDOB (last name metaphone plus DOB)
      LNMPFNPC (last name metaphone plus first name plus zip code)
      LNFN (last name metaphone plus first name)
      SMDLASTNAME13 (sex, month of birth, day of birth, first 3 letters of last name)
  */

  var lnmp = encoder.doubleMetaphone(data.name.last).primary; // last name metaphone
  var fn = data.name.first.toUpperCase(); // first name
  var ln13 = data.name.last.substring(0, 3).toUpperCase(); // first 3 letters of last name

  var zip = data.address.zip;

  var dob = data.dob.substring(0, 10);
  var mdb = data.dob.substring(5, 10);

  var gender = "";
  if (data.gender) {
    gender = data.gender.toUpperCase();
  } else {
    gender = 'UNKNOWN';
  }

  traits.lnmpdob = lnmp + dob;
  traits.lnmpfnpc = lnmp + fn + zip;
  traits.lnfn = lnmp + fn;
  traits.smdlastname13 = gender + mdb + ln13;

  return traits;
}

module.exports.calculate = calculate;
