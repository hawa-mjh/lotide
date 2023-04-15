const flatten = require("../flatten");
//tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => pass
assertArraysEqual(flatten([1, [2, [3, 4], 5], [6]]), [1, 2, [3, 4], 5, 6]); // => fail
assertArraysEqual(flatten([]), []); // => pass
