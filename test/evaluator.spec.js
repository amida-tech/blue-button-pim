var evaluate = require('../lib/evaluator').evaluate;

describe('Match evaluation:', function () {

  it('automatic match', function () {
    var result = evaluate(20);
    expect(result).toBe("automatic");
  });

  it('manual match', function () {
    var result = evaluate(16);
    expect(result).toBe("manual");
  });

  it('no match', function () {
    var result = evaluate(10);
    expect(result).toBe("no match");
  });
});
