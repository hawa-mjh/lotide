const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

const fruits1 = ["apple", "banana", "orange"];
const fruits2 = ["apple", "banana", "orange"];

assertArraysEqual(fruits1, fruits2); // Expected output: "✅ Assertion Passed: [apple,banana,orange] === [apple,banana,orange]"