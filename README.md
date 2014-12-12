blue-button-pim
===============

Patient Identification and Matching based on Blue Button data

Blocking phase - filter all patient population using blocker filter
Candidates comparison phase - compare candidates with patient data one by one
Scoring phase - Weight two records for potential match
Match evaluation phase - Evaluate score result

PIM relies on  Data Matching Algorithm use by the Oklahoma Department of Mental Health and Substance Abuse Services (ODHMSAS) which in turn was influenced by the article by Matthew A. Jaro published in the Statistics in Medicine Journal, Vol. 14, 491-198 (1995) titled ["Probabilistic Linkage of Large Public Health Data Files."] (http://www3.interscience.wiley.com/journal/114131327/abstract)


##Quick up and running quide

###Prerequisites

- Node.js (v0.10+) and NPM
- Grunt.js

```
# you need Node.js and Grunt.js installed

#install dependencies and build
npm install
grunt

```

## Contributing

Contributors are welcome. See issues https://github.com/amida-tech/blue-button-pim/issues

## Release Notes

See release notes [here] (./RELEASENOTES.md)

## License

Licensed under [Apache 2.0](./LICENSE)
