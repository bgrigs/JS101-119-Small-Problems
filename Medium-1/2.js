// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

/*
Input:
  - the original number
  - number of digits to rotate
Output: number but with some of the digits rotated

rotateRightmostDigits(735291, 1);      // 735291
  - none are rotated
rotateRightmostDigits(735291, 2);      // 735219
  - 2nd arg is two, and two digits are rotated...tens position with ones position
rotateRightmostDigits(735291, 3);      // 735912
  - 2nd arg is 3. The hundreds position is moved to the ones and the others are moved up
rotateRightmostDigits(735291, 4);      // 732915
  - 2nd arg is 4. The thousands position is moved to the ones and the others are moved up
rotateRightmostDigits(735291, 5);      // 752913
  - 2nd arg is 5. The ten thousands position is moved to the ones and the others are moved up
rotateRightmostDigits(735291, 6);      // 352917

Algo:
  - coerce the digit into a string
  - split the string into an array
  - using the 2nd argument, remove the appropriate digit from the array
  - append this element to the array
  - join the array into a string
  - turn string into number
  - return number
*/

function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  let numberToAppend = arr.splice(-count, 1);
  return Number(arr
    .concat(numberToAppend)
    .join(""));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917