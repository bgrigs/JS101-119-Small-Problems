/* Clean up the words
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Algo:
  -initialize a result variable 
  -Iterate through each character of the string
    -if the character is a letter, add the letter to result
    -if the character index is greater than 0, and the previous character was not a space, add a space to result
    - else, do nothing 

*/

function cleanUp(string) {
  let result = ""

  for (let index = 0; index < string.length; index += 1) {
    if (isLetter(string[index])) {
      result += string[index];
    } else if (index === 0 || previousCharacter(result) !== ' ') {
      result += ' ';
    }
  }

  console.log(result);
}

function isLetter(character) {
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  let upperCaseLetters = lowerCaseLetters.toUpperCase();

  return (lowerCaseLetters.includes(character) || upperCaseLetters.includes(character))
}

function previousCharacter(text) {
  return text[text.length - 1];
}

cleanUp("---what's my +*& line?");    // " what s my line "