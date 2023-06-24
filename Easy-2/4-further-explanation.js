// Squaring an Argument

// use multiply() func from previous problem
// write new function that computes square of its argument

function multiply(num1, num2) {
  return num1 * num2;
}

//Does not account for negative exponents
function exponent(num, power) {
  let result = 1;

  for (let i = 1; i <= power; i += 1) {
    result = multiply(result, num);
  }

  return result;
}

console.log(exponent(5, 2) === 25); // logs true
console.log(exponent(5, 3) === 125); // logs true
console.log(exponent(4, 10) === 1048576); // logs true
console.log(exponent(5, 4) === 625); // logs true
console.log(exponent(5, 5) === 3125); // logs true
console.log(exponent(5, 0) === 1); // logs true
