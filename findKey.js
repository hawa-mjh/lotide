const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

// Test case 1: findKey should return "noma"
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const actual1 = findKey(restaurants, x => x.stars === 2);
assertEqual(actual1, "noma"); // expected output: ✅ Assertion Passed: noma === noma

// Test case 2: findKey should return "Akaleri"
const actual2 = findKey(restaurants, x => x.stars > 2);
assertEqual(actual2, "Akaleri"); // expected output: ✅ Assertion Passed: Akaleri === Akaleri

// Test case 3: findKey should return undefined
const actual3 = findKey(restaurants, x => x.stars === 4);
assertEqual(actual3, undefined); // expected output: ✅ Assertion Passed: undefined === undefined
