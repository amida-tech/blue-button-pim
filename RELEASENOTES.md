# blue-button-pim Release Notes

## v2.2.2 - April 19, 2022

- Patch Update: Upgraded dev dependencies
- Converted tests and coverages to jest

## v2.2.1 - December 20, 2021

- Security fixes to dev dependencies.
- Removed non-existent test artifacts in `example.js`

## v2.2.0 - September 8, 2015

- `compareCandidates` will no longer return an empty object if candidates are found. In cases where
there are candidates, but they are below the matching threshold, candidate objects will still be
returned with a score and a match status of `no match`.

## v2.1.0 - August 14, 2015

- Allow custom threshold values for automatic and manual matches

## v2.0.0 - July 22, 2015

- Update demographic data model
- Allow shim use for translating demographics from a different source schema
- Additional unit tests

## v1.0.0 - December 12, 2014

This is the initial release of this library.

- Candidates selection and blocking filter calculation is implemented
- PIM relies on  Data Matching Algorithm use by the Oklahoma Department of Mental Health and Substance Abuse Services (ODHMSAS) which in turn was influenced by the article by Matthew A. Jaro published in the Statistics in Medicine Journal, Vol. 14, 491-198 (1995) titled ["Probabilistic Linkage of Large Public Health Data Files."] (http://www3.interscience.wiley.com/journal/114131327/abstract)
