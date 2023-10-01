// Stringy Strings

// Write fucntion
// Take 1 arg
// Starting with 1 return a string of alt 1s & 0s
// The length of the string should match the given integer.

function stringy(stringLength) {
  let string = "";

  for (let idx = 0; idx < stringLength; idx += 1) {
    let number = (idx % 2 === 0) ? 1 : 0;
    string += number;
  }

  return console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"