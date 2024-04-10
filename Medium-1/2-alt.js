// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

/*
Input: number, position
Output: number

Data structure: array

Algo:
  - stringNum = coerce number into a string
  - stringNumArr = split the stringNum into an array

  - declare a variable digitToRotate
    - assign to stringNumArr.splice(stringNumArr.length - position, 1)

  - push digitToRotate to the end of stringNumArr

  - join stringNumArr together, coerce to a Number, and return

*/

function rotateRightmostDigits(number, position) {
  let stringNumArr = String(number).split("");
  let digitToRotate = stringNumArr.splice(stringNumArr.length - position, 1);

  stringNumArr.push(digitToRotate);
  return Number(stringNumArr.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917