// Is It Prime?
// A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 is prime since its only divisors are 1 and 23. However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the number 1 is not prime.

// Write a method that takes a positive integer as an argument and returns true if the number is prime, false if it is not prime.

/*
Input: number
Output: boolean
  - true if the number is prime, 
  - else false 
  
Algo
  - if number <= 1 return false
  - if number === 2 return true

  - declare a var called remainder and init to 2 

  - creat a loop that runs as long as remainder < number
    - during each iteration check if number % remainer is === 0
      - if it is, return false 

  
  default return value: true
*/

function is_prime(number) {
  if (number <= 1) return false

  let remainder = 2; 

  while (remainder < number) {
    if (number % remainder === 0) return false
    remainder += 1;
  }

  return true; 
}


console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true