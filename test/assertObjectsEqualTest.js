const eqObjects = require("../eqObjects");
const assertObjectsEqual = require("../assertObjectsEqual");

//Manual Verification


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 2, c: 3 };

assertObjectsEqual(obj1, obj2); // should pass
assertObjectsEqual(obj1, obj3); // should fail