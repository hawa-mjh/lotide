const assertEqual = function(actual,expected){
  if (actual === expected){
    console.log("✅ Assertion Passed: ${actual} === ${expected}");  
  } else{
  console.log("❌ Assertion Failed: ${actual} !== ${expected}");
}

}
const countLetters = function(sentence) {
  const results = {};  //Empty object used to store results

  for (const letter of sentence) {  
    if (letter !== ' ') { //check character is not a space
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

//Test 1
const result1 = countLetters('hello');
console.log(result1);
// Expected Output: { h: 1, e: 1, l: 2, o: 1 }