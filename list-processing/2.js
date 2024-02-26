// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Input: array of integers
// Output: array of integers, sorted
// Data Structure: use an object to store pairs of integers with their English word counterparts
/* Algo:
- create an object integerWords
- set the keys the integers and the values to the corresponding English words

-write a function alphabeticNumberSort that accepts an array as its argument
  - within the function body use the sort method to sort by the values by their English word counterparts (coerce the values to strings since object keys are strings)
  - return the sorted array
*/

const INTEGER_WORDS = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
  15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
  19: 'nineteen',
};

function alphabeticNumberSort(integerArr) {
  return integerArr.slice().sort((a, b) => {
    if (INTEGER_WORDS[String(a)] < INTEGER_WORDS[String(b)]) return -1;
    if (INTEGER_WORDS[String(a)] > INTEGER_WORDS[String(b)]) return 1;
    return 0;
  });
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]