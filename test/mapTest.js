const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");
//test 1 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //expected to pass
//test 2
assertArraysEqual(results1, [ 'c', 'g', 't', 't', 'm' ]); //expected to fail

//test3
const results2 = map(words, word => word.length);
console.log(results2)

assertArraysEqual(results2, [6, 7, 2, 5, 3]); //expected to pass
