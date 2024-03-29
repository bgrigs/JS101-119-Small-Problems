const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  if (number === 0) return '0';

  let result = '';

  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    // console.log(number);

    result = DIGITS[remainder] + result;
  }

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
  }

  return integerToString(number);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

