// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
input: string
output: obj

Algo:
  -declare a var lowerCaseAlphabet and init to 'abc...' 
  -declare a var upperCaseAlphabet and init to 'ABC...' 

  - delcare a var counts and init to {lowercase: 0, uppercase: 0, neither: 0}

  - iterate through the string
    - if lowerCaseAlphabet includes the char, add 1 to lowercase
    - if upperCaseAlphabet includes the char, add 1 to uppercase
    - else add 1 to neither

  - iterate through the values, divide each value by the length of the original string 
    - replace the values in the string with the percentages

*/

function letterPercentages(string) {
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

  let counts = {lowercase: 0, uppercase: 0, neither: 0};

  for (let char of string) {
    if (lowerCaseAlphabet.includes(char)) counts.lowercase += 1;
    else if (upperCaseAlphabet.includes(char)) counts.uppercase += 1;
    else counts.neither += 1;
  }
  
  for (let key in counts) {
    counts[key] = (counts[key] / string.length * 100).toFixed(2);
  }

  return counts;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }