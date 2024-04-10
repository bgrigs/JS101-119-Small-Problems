// Matching Parentheses?
/* Write a function that takes a string as an argument
      returns true if all parentheses in the string are properly balanced,
     false otherwise.
     parentheses must occur in matching '(' and ')' pairs
    */

const OPENING = '(';
const CLOSING = ')';

function isBalanced(string) {
  let parens = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === OPENING) parens += 1;
    if (string[idx] === CLOSING) parens -= 1;
    if (parens < 0) return false;
  }

  return parens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).