/*
Write a function that swaps the first and last letters of every word.

Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

*/
// function declaration
// function swap(string) {
//   return string.split(" ").map(word => {
//     if (word.length === 1) {
//       return word;
//     } else {
//       return word[word.length - 1] + word.slice(1, -1) + word[0];
//     }
//   }).join(' ');
// }

// arrow function
let swap = (string) =>
  string.split(" ").map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    }
  }).join(' ');

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"