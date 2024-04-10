// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
Input: number 
Output: number (the next featured number greater than the input)
  - note: issue an error if there is no next featured number (largest possible is 9876543201)

odd number that is a multiple of 7
digits occur only once each

Algo:
  - check if the input is equal to or larger than 9876543201. if so, return an error
  - declare a var featuredNumber 

  - create a loop that adds one to the input number until a featured number is found 
    - if the number is even, continue
    - if the number is not divisible by 7, continue
    - if digitAppearsOnce(number)
        - featured = number;
        - break out of loop 
  - return featuredNumber 

countDigits
  - turn the number into a string 
    - iterate through the string 
  - declare a var count and init {}
  - each digit will be the key, each value will be the count 

digitAppearsOnce
  - declare a var count and assign to countDigits(number)
  - iterate through the values
    - return true if every one of the values is equal to one 
*/

function featured(number) {
  if (number >= 9876543201) return 'There is no possible number that fulfills those requirements'
  let featuredNumber;

  while (true) {
    number += 1; 
    if (number % 2 === 0 || number % 7 !== 0 ) continue; 
    if (digitAppearsOnce(number)) {
      featuredNumber = number;
      break;
    }
  }

  return featuredNumber;
}

function digitAppearsOnce(number) {
  let count = countDigits(number);
  return Object.values(count).every(value => value === 1);
}

function countDigits(number) {
  let count = {};

  for (let digit of String(number)) {
    count[digit] = count[digit] + 1 || 1; 
  }

  return count; 
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those require