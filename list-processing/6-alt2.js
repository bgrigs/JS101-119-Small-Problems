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

*/


function palindromes(string) {
  let substrings = makeSubstrings(string);

  return substrings.filter(elem => elem.length > 1).filter(substring => {
    let reversedSubstring = substring.split("").reverse().join("");
    return substring === reversedSubstring;
  });
}

function makeSubstrings(string) {
  return string.split("").map((_, idx) => makeLeadingSubstrings(string.slice(idx))).flat();
}

function makeLeadingSubstrings(string) {
  let substring = '';

  return string.split("").map(char => {
    substring += char;
    return substring;
  });
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]