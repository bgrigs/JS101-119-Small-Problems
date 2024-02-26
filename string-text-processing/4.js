// Capitalize Words
/*
Input: string
Output: string but with first char of every word in caps
  - every subsequent letter should be lowercase

Rules: a word is a sequence of non-whitespace characters

Algo:
  - split each string into an array. make the whitespace the separator
  - iterate through the array
  - create a new array made up each word with the first char in caps
  - turn the array into a string and return the string
*/

function wordCap(string) {
  return string.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'