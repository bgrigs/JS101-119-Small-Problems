// Always Return Negative

function negative(num) {
  if (Math.sign(num) === -1) {
    return num;
  } else {
    return -num;
  }
}

// LS Solution
// function negative(num) {
//   return Math.abs(num) * -1;
// }

// Ternary
// function negative(num) {
//   return num < 0 ? num : num * -1;
// }

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
