// Leading Substrings
// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

/*
Input: string
Output: an array with a list of substrings
Data Structure: arrays
Algo:
- create a var called substrings and initialize it to an empty array
- iterate over the string
  - push the first character to substrings (make condition if idx === 0 or if substrings.length === 0)
  - on subsequent iterations, concatenate the last item in subtrings arr with the string we are iterating over and push the resulting string
*/

function leadingSubstrings(str) {
  let substrings = [];

  for (let idx = 0; idx < str.length; idx++) {
    let letter = str[idx];
    if (substrings.length === 0) {
      substrings.push(letter);
      continue;
    }

    let lastSubString = substrings[substrings.length - 1];
    substrings.push(lastSubString + letter);
  }

  return substrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]