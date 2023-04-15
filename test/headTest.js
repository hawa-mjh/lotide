const assertEqual = require('./assertEqual');
const head = require("./head");
const assert = require("chai").assert;
// Test Case 1: Check if head returns the first element of an array
assertEqual(head([1, 2, 3]), 1);

// Test Case 2: Check if head returns undefined for an empty array
assertEqual(head([]), undefined);

// Test Case 3: Check if head returns the first element of an array of length 1
assertEqual(head(["hello"]), "hello");