const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;