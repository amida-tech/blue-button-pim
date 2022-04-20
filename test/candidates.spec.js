var fs = require('fs');

var compare = require('../index').compareCandidates;

describe('Candidate determination:', function () {
  var data;
  var candidates;
  var results;

  function isAMatch(item) {
    return item.match !== "no match";
  }

  beforeAll(function () {
    data = JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics;
    candidates = [
      JSON.parse(fs.readFileSync('./test/artifacts/demographics.json').toString()).data.demographics,
      JSON.parse(fs.readFileSync('./test/artifacts/demographics_2.json').toString()).data.demographics
    ];
  });

  it('only one match', function () {
    results = compare(data, candidates);
    expect(results.filter(isAMatch)).toHaveLength(1);
  });

  it('manual match', function () {
    candidates[0].dob = "2015-01-01";
    results = compare(data, candidates);
    expect(results[0].match).toBe("manual");
  });

  it('use custom thresholds', function () {
    candidates[0].dob = "2015-01-01";
    results = compare(data, candidates, null, 20, 18);
    expect(results.filter(isAMatch)).toHaveLength(0);
  });

});
