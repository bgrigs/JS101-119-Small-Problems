/* Multiples of 3 and 5
You may assume that the number passed in is an integer greater than 1.

Given an integer (num) greater than 1
Declare a variable (sum) to store sum
IF numbers between 1 and num are multiples of 3 or 5, perform sum
PRINT sum
*/

function multisum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168