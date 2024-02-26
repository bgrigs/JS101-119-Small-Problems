// Palindromic Substrings
// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
Input: string
Output: array of all substrings that are palindromes

Rules:
- include duplicates
- case matters
- single characters are not palindromes
- sort in order of appearance

Algo: 

High-level
- create an array of all possible substrings
- split these subtrings by character, reverse, and join back into string
- compare the reversed substring with the original
- if the substring is the same, push to the array we are returning


Implementation:
Helper function: makeSubstrings
- declare a variable called substrings and initialize it to an empty array
- loop through each character of the string
  - create an inner loop that will loop through the rest of the characters, concatenating them with the first character one by one and push them to our substrings array

*/


function palindromes(string) {
  let substrings = makeSubstrings(string);

  return substrings.filter(substring => {
    let reversedSubstring = substring.split("").reverse().join("");
    return substring === reversedSubstring;
  });
}

function makeSubstrings(string) {
  let substrings = [];

  for (let startingCharacter = 0; startingCharacter < string.length;
    startingCharacter++) {
    let substring;
    for (let characters = startingCharacter + 2; characters <= string.length;
      characters++) {
      substring = string.slice(startingCharacter, characters);
      substrings.push(substring);
    }
  }

  return substrings;
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]