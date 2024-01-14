/* Convert a String to a Number

convert string to number without using Number or parseInt

*/
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger(string) {
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  console.log(arrayOfDigits);
  arrayOfDigits.forEach(digit => {
    (value = (10 * value) + digit);
  });
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true