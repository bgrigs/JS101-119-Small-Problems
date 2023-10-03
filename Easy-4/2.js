/*Palindromic Strings (Part 1)
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Problem
  Input: string 
  Output: boolean stating whether or not the input is a palindrome

  Rules:
    - A palindrome is a word that reads the same forwards and backwards
    - Case + all characters matter

Examples
  isPalindrome('madam');               // true
  isPalindrome('Madam');               // false (case matters)
  isPalindrome("madam i'm adam");      // false (all characters matter)
  isPalindrome('356653');              // true

Data Structures
  May turn string into an array in order to use array methods

Algorithm
  Accept a string value
  Declare a variable called reversedString, initialize it to the reverse of the string entered
  Check if the input and the reversedString are strictly equal, return true or false accordingly
*/


function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true