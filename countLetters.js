const assertEqual = require("./assertEqual");

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

module.exports = countLetters;