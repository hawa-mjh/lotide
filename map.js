const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
   results.push(callback(item));
  }
  return results;// empty for now :)
}
const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //expected to pass
//test 2
assertArraysEqual(results1, [ 'c', 'g', 't', 't', 'm' ]); //expected to fail

//test3
const results2 = map(words, word => word.length);
console.log(results2)

assertArraysEqual(results2, [6, 7, 2, 5, 3]); //expected to pass

