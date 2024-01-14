
// Convert a Signed Number to a String


const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  if (Math.sign(number) === -1) number *= -1;

  let result = '';

  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  }

  return result;
}

function signedIntegerToString(number) {
  if (Object.is(number, -0)) return '-0';
  if (number === 0) return '0';

  let string = integerToString(number);

  if (Math.sign(number) === -1) {
    string = '-' + string;
  } else {
    string = '+' + string;
  }

  return string;
}

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
