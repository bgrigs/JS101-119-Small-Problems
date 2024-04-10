// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

/*
input: 3 numbers
output: string

- if isInvalid() return 'invalid'
- if isEquilateral() return 'equilateral'
- if isIsosceles(), return 'isoceles'
- else return 'scalenes'

isInvalid helper function
  - return true if any one of the args is === 0
  - return true if the sum of the lengths of the two shortest sides are not greater than the length of the longest side

isEquilateral helper function
  - return arg1 === arg2 && arg2 === arg3 

isIsosceles helper function
  - return arg1 === arg2 || arg1 === arg3 || arg2 === arg3
*/ 

function triangle(...arguments) {
  if (isInvalid(...arguments)) return 'invalid';
  if (isEquilateral(...arguments)) return 'equilateral';
  if (isIsosceles(...arguments)) return 'isosceles';
  return 'scalene';
}

function isInvalid(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) return true
  let sorted = [...arguments].sort((a,b) => a - b);
  return sorted[0] + sorted[1] < sorted[2];
}

function isEquilateral(side1, side2, side3) {
  return side1 === side2 && side2 === side3;
}

function isIsosceles(side1, side2, side3) {
  return side1 === side2 || side1 === side3 || side2 === side3;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"