// Get Middle Character

// Write a function
// Accept a non-empty string arugment
// Return the middle character of the string
// IF string has an odd length, return 1 character
// IF string has even length, return two characters

function centerOf(string) {
  let middleChar = '';

  if (string.length % 2 === 1) {
    middleChar += string[(string.length - 1) / 2];
  } else {
    middleChar = string[(string.length / 2) - 1] + string[string.length / 2];
  }

  return middleChar;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf('hey'));                 // "e"