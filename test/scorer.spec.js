var expect = require('chai').expect;
var assert = require('chai').assert;

var fs = require("fs");

var score = require('../lib/scorer').score;

describe('Score determination:', function () {
    var data;
    var candidates;

    before(function () {
        data = JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics;
        candidates = [
            JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics,
            JSON.parse(fs.readFileSync('./test/artifacts/demographics_2.json').toString()).data.demographics
        ];
    });

    it('match', function () {
        var calcScore = score(data, candidates[0]);
        expect(calcScore).to.be.above(17.72);
    });

    it('no match', function () {
        var calcScore = score(data, candidates[1]);
        expect(calcScore).to.be.below(15.957);
    });
});
