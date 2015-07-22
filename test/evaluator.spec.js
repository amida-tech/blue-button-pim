var expect = require('chai').expect;
var assert = require('chai').assert;

var evaluate = require('../lib/evaluator').evaluate;

describe('Match evaluation:', function () {

    it('automatic match', function () {
        var result = evaluate(20);
        expect(result).to.eq("automatic");
    });

    it('manual match', function () {
        var result = evaluate(16);
        expect(result).to.eq("manual");
    });

    it('no match', function () {
        var result = evaluate(10);
        expect(result).to.eq("no match");
    });
});
