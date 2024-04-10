// Rotation (Part 3)
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

/*
Input: number
Output: number
Data structure: array

105
51
15

735291
3-52917
32-9175
321-759
3215-97
32157-9

['7', '3', '5', '2', '9', '1'].splice(0, 1)

Algo:
  - turn number into a string, split string into an array called numStringArr
  - declare a var called rotations and initialize to 0
    - while rotations < numStringArr.length
      - declare a var digitToRotate = numStringArr.splice(rotations, 1)
      - numStringArr.push(digitToRotate)

  - join numStringArr into a string, turn string into a number and return
*/

function maxRotation(number) {
  let numStringArr = String(number).split("");

  for (let rotations = 0; rotations < numStringArr.length; rotations++) {
    let digitToRotate = numStringArr.splice(rotations, 1)[0];
    numStringArr.push(digitToRotate);
  }

  // console.log(Number(numStringArr.join("")));
  return Number(numStringArr.join(""));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845