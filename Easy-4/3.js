/* Palindromic Strings (Part 2)
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Problem
  Input: string 
  Output: boolean stating whether or not the input is a palindrome

  Rules:
    - A palindrome is a string that reads the same forwards and backwards
    - Only look at alphanumeric numbers
    - Condition check should be case insensitive

Examples
  isRealPalindrome('madam');               // true
  isRealPalindrome('Madam');               // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
  isRealPalindrome('356653');              // true
  isRealPalindrome('356a653');             // true
  isRealPalindrome('123ab321');            // false

Data Structures
  May turn string into an array in order to use array methods

Algorithm
  Accept a string value

  Initialize a new variable, stringAlphaNumericOnly and assign it to the alphanumeric characters of the string

  To make condition check case insensitive, assign a comparisonString to lowercase version of the stringAlphanumericOnly

  Declare a variable called reversedString, initialize it to the reverse of comparisonString

  Check if comparisonString and reversedString are strictly equal, return true or false accordingly
*/


function isRealPalindrome(string) {
  let stringAlphanumericOnly = string.replace(/[^a-zA-Z0-9]/g, "");
  let comparisonString = stringAlphanumericOnly.toLowerCase();
  let reversedString = comparisonString.split("").reverse().join("");

  return comparisonString === reversedString;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false