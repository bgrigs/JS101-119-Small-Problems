// Delete Vowels
// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed

const VOWELS = 'aeiouAEIOU';

function removeVowels(arr) {
  return arr.map(string => {
    return string.split("").map(char => {
      if (!VOWELS.includes(char)) return char;
      return '';
    }).join("");
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
