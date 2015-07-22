var candidates = require("./lib/candidates.js");
var blocker = require("./lib/blocker.js");

module.exports.compareCandidates = candidates.compare;
module.exports.calculateBlockers = blocker.calculate;
