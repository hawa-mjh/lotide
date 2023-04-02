const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
  }
};
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
//tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => pass
assertArraysEqual(flatten([1, [2, [3, 4], 5], [6]]), [1, 2, [3, 4], 5, 6]); // => fail
assertArraysEqual(flatten([]), []); // => pass
