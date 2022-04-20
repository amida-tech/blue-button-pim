Blue Button PIM
===============
[![NPM][npm-image]][npm-url]

Patient Identification and Matching based on Blue Button data

Blocking phase - filter all patient population using blocker filter
Candidates comparison phase - compare candidates with patient data one by one
Scoring phase - Weight two records for potential match
Match evaluation phase - Evaluate score result

PIM relies on  Data Matching Algorithm use by the Oklahoma Department of Mental Health and Substance Abuse Services (ODHMSAS) which in turn was influenced by the article by Matthew A. Jaro published in the Statistics in Medicine Journal, Vol. 14, 491-198 (1995) titled ["Probabilistic Linkage of Large Public Health Data Files."] (http://www3.interscience.wiley.com/journal/114131327/abstract)


## Quick up and running guide

### Prerequisites

- Node.js (v14.19+) and NPM
- Grunt.js

```
# Install dependencies
npm i

# Install grunt
npm i -g grunt

# Test
grunt

```

## Module components

### calculateBlockers(data)
This function returns an object with the blocking traits for a given patient's demographic information.
The purpose of this object is for targeted filtering in MongoDB queries. For exampe, we could use the following
code to return a set of candidates for comparison:
```
var pim = calculateBlockers(data);

var query = model.find({
  $or: [{
    "pim.lnmpdob": pim.lnmpdob
  }, {
    "pim.lnmpfnpc": pim.lnmpfnpc
  }, {
    "pim.lnfn": pim.lnfn
  }, {
    "pim.smdlastname13": pim.smdlastname13
  }]
});

query.exec(function (err, results) {
  if (err) {
    callback(err);
  } else {
    callback(null, results);
  }
});
```
Within the callback we can compare candidates.

### compareCandidates(data, candidates, shim)
This function will take demographic data and a list of candidates and return a list of matches and flagged candidates.
Each object in the result array has a `pat_key` and a flag `match`. An ideal implementation of this module would result in
only one `automatic` result at a time. In the case that there is a `manual` result, a user should be presented with
_all_ results flagged as `manual`. An optional `shim` can be passed for translating demographic data within a database
to match the schema detailed in [`blocker.js`](lib/blocker.js).

## Contributing

Contributors are welcome. See issues https://github.com/amida-tech/blue-button-pim/issues

## Release Notes

See release notes [here](./RELEASENOTES.md)

## License

Licensed under [Apache 2.0](./LICENSE)


[npm-image]: https://nodei.co/npm/@amida-tech/blue-button-pim.png?compact=true
[npm-url]: https://nodei.co/npm/@amida-tech/blue-button-pim
