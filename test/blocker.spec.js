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
    expect(traits.lnmpdob).toBe('T1975-05-01');
    expect(traits.lnmpfnpc).toBe('TJOHN10001');
    expect(traits.lnfn).toBe('TJOHN');
    expect(traits.smdlastname13).toBe('MALE05-01DOE');
  });
});
