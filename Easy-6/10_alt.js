// Matching Parentheses?
// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

/*
Input: str
Output: boolean
  - parens must be properly balanced 

Algo:
  - init opening to '('
  - init closing to ')'

  - declare a var array and init to str.split("")
  
  - while array includes opening or closing 
    -let openingBraceIdx = array.indexOf(opening)
    -let closingBraceIdx = array.indexOf(opening)
    -if closingBraceIdx < openingBraceIdx return false 
    - array[openingBraceIdx] = 'x'
    - array[closingBraceIdx] = 'x'

  - iterate through string

  - default return value: true 

lastOpeningBraceIdx = 5
if closingBraceIdx < lastPpeningBraceIdx , return false 
*/

function isBalanced(str) {
  let opening = '(';
  let closing = ')';

  let array = str.split("");

  while (array.includes(opening) || array.includes(closing)) {
    let openingBraceIdx = array.indexOf(opening);
    let closingBraceIdx = array.indexOf(closing);
    if (openingBraceIdx === -1 || closingBraceIdx < openingBraceIdx) return false;
    array[openingBraceIdx] = 'x';
    array[closingBraceIdx] = 'x';
  }

  return true; 
}

// console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).