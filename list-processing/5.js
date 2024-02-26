// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

function leadingSubstrings(str) {
  let substring = '';

  return str.split("").map(char => {
    substring += char;
    return substring;
  });
}

function substrings(str) {
  let allSubstrings = [];

  str.split("").forEach((_, idx) => {
    allSubstrings.push(leadingSubstrings(str.slice(idx)));
  });

  return allSubstrings.flat();
}

substrings('abcde');

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */
