var expect = require('chai').expect;
var assert = require('chai').assert;

var fs = require("fs");

var pim = require("../index.js");

describe('parse.js test', function () {
    var inputObj;

    var candidates;

    before(function () {

        inputObj = JSON.parse(fs.readFileSync('./test/artifacts/cms_generated.json').toString()).data.demographics;

        candidates = [{
            data: JSON.parse(fs.readFileSync('./test/artifacts/cms_generated.json').toString()).data.demographics,
            pat_key: "pat1"
        }, {
            data: JSON.parse(fs.readFileSync('./test/artifacts/cms_generated_2.json').toString()).data.demographics,
            pat_key: "pat2"
        }];

        //console.log("patient", inputObj);
        //console.log("candidates", candidates);

    });

    it('compare candidates', function () {
        var match = pim.compare_candidates(inputObj, candidates);

        //console.log(match);

        assert.deepEqual(match, [{
            pat_key: 'pat1',
            match: 'automatic'
        }]);
    });
});
