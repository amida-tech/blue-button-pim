"use strict";

var DoubleMetaphone = require('doublemetaphone');
var encoder = new DoubleMetaphone();

//takes patient data (demographics section) and 
//calculates and returns blocking traits for the matching module
function calculate(data) {
    var traits = {};

    /*
        The following is a list of blocking traits computed on entities for this matching module:
        LNMPDOB (last name metaphone plus DOB)
        LNMPFNPC (last name metaphone plus first name plus zip code)
        LNFN (last name metaphone plus first name)
        if SSN available: SMDSSN79 (sex, month of birth, day of birth, SSN digits 7-9)
        else: SMDLASTNAME13 (sex, month of birth, day of birth, first 3 letters of last name)
    */

    //encoder.setMaxCodeLen(7);
    var lnmp = encoder.doubleMetaphone(data.name.last).primary;
    var fn = data.name.first.toUpperCase();
    var ln13 = data.name.last.substring(0, 3).toUpperCase(); //first 3 letters of last name

    //TODO: better handling of zip in the future
    var zip = "";
    if (data.addresses && data.addresses[0] && data.addresses[0].zip) {
        zip = data.addresses[0].zip;
    }

    var dob = "";
    var mdb = "";
    if (data.dob && data.dob.point && data.dob.point.date) {
        dob = data.dob.point.date.substring(0, 10);
        mdb = data.dob.point.date.substring(5, 10); //month and day of birth
    }

    var gender = data.gender.toUpperCase();

    traits.lnmpdob = lnmp + dob;
    traits.lnmpfnpc = lnmp + fn + zip;
    traits.lnfn = lnmp + fn;
    traits.smdlastname13 = gender + mdb + ln13;

    return traits;
}

module.exports.calculate = calculate;
