const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const without = require("../without");

// Test case to ensure the original array is not modified
const words = ["hello", "world", "lighthouse"];
const wordsWithout = without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);