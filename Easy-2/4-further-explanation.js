// Squaring an Argument

// use multiply() func from previous problem
// write new function that computes square of its argument

function multiply(num1, num2) {
  return num1 * num2;
}

function exponent(num, power) {
  let result = 1;

  for (let positive = 1; positive <= power; positive += 1) {
    result = multiply(result, num);
  }

  for (let negative = -1; power <= negative; negative -= 1) {
    result = multiply(result, num);
  }

  if (power > 0) {
    return result;
  } else {
    return 1 / result;
  }
}

console.log(exponent(5, 2) === 25); // logs true
console.log(exponent(5, 3) === 125); // logs true
console.log(exponent(4, 10) === 1048576); // logs true
console.log(exponent(5, 4) === 625); // logs true
console.log(exponent(5, 5) === 3125); // logs true
console.log(exponent(5, 0) === 1); // logs true
console.log(exponent(5, -2) === .04); // logs true
