const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

const flatten = function(arr) {
  const flattened = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        flattened.push(nestedElement);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;
