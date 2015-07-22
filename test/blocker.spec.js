var expect = require('chai').expect;
var assert = require('chai').assert;

var calculate = require('../index').calculateBlockers;

var testData = {
    name: {
        first: "John",
        middle: "X",
        last: "Doe"
    },
    gender: "Male",
    address: {
        zip: "10001",
        street: "123 Main St",
        city: "Madison",
        state: "WI",
        country: "US"
    },
    email: "john@doe.net",
    phone: "5556667777",
    dob: "1975-05-01"
};

describe('Trait calculation: ', function () {
    it('create blocking traits', function () {
        var traits = calculate(testData);
        expect(traits.lnmpdob).to.eq('T1975-05-01');
        expect(traits.lnmpfnpc).to.eq('TJOHN10001');
        expect(traits.lnfn).to.eq('TJOHN');
        expect(traits.smdlastname13).to.eq('MALE05-01DOE');
    });
});
