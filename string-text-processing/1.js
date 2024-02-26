// Uppercase Check

/*
Input: string
Output: boolean
-- true if all alphabetic characters inside the stirng are uppercase, else false

Rules: ignore non alphabetic characters

Algo:

Helper function: removeNonAlphabetic
  Declare a variable called alphebeticOnly and initialize it to an empty string
  Iterate through each letter of the original string
    -- concatenate alphabeticOnly with the alphebetic characters

Iterate through each charac of alphebetic only.
  -Check if the character is strictly equal to the uppercase version of itself.
  --If every character is, return true, else false

*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function isUppercase(string) {
  let alphabeticOnly = removeNonAlphabetic(string);

  return alphabeticOnly.split("").every(char => char === char.toUpperCase());
}

function removeNonAlphabetic(string) {
  let alphabeticOnly = "";

  for (let idx = 0; idx < string.length; idx++) {
    if (LETTERS.includes(string[idx].toLowerCase())) {
      alphabeticOnly += string[idx];
    }
  }

  return alphabeticOnly;
}


isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true