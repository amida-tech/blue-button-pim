var expect = require('chai').expect;
var assert = require('chai').assert;

var fs = require('fs');

var compare = require('../index').compareCandidates;

describe('Candidate determination:', function () {
    var data;
    var candidates;
    var results;

    before(function () {
        data = JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics;
        candidates = [
            JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics,
            JSON.parse(fs.readFileSync('./test/artifacts/demographics_2.json').toString()).data.demographics
        ];
    });

    it('only one match', function () {
        results = compare(data, candidates);
        expect(results).to.have.length(1);
    });

    it('manual match', function () {
        candidates[0].dob = "2015-01-01";
        results = compare(data, candidates);
        expect(results[0].match).to.eq("manual");
    });
});
