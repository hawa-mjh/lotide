const assertEqual = require("./assertEqual");



function tail(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    return arr.slice(1);
  }
}

module.exports = tail;