// Double Doubles
/* Rules. Double number is a:
  - even length number
  -left side digits are the same as right side digits 
  - 44, 3333, 103103 are double numbers. 444, 107 are not


  - return the number provided as an argument mulitplied by two, UNLESS
    - the argument is a double number. Then multiply it by itself 

Algo:

  -find the length of each number 
  - if the length of num is not evenly divided by 2, double it
  - if the length of num is evenly divided by 2, split it in two (i.e. 37 becomes 3 and 7, 44 becomes 4 and 4, 103103 becomes 103 and 103)
    -check that the the two havles are equal to each other. 
      -IF equal: return num
      -ELSE: double the number

*/


function twice(num) {
  let numString = num.toString();
  let numLength = numString.length;

  if ((numLength % 2) !== 0) console.log(num * 2);
  
  if ((numLength % 2) === 0) {
    let lengthHalf = numLength / 2;
    let string1 = numString.slice(0, lengthHalf);
    let string2 = numString.slice(lengthHalf);

    if (string1 === string2) {
        console.log(num)
    } else {
      console.log(num * 2);
    }
  }
}



twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676