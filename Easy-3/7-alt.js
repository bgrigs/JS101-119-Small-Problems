function twice(num) {
  if (isDouble(num)) {
    console.log(num);
  } else {
    console.log(num * 2);
  }
}

function isDouble(num) {
  let numString = num.toString();
  let numLength = numString.length;

  if ((numLength % 2) !== 0) return false;
  
  if ((numLength % 2) === 0) {
    let lengthHalf = numLength / 2;
    let string1 = numString.slice(0, lengthHalf);
    let string2 = numString.slice(lengthHalf);
    
    return string1 === string2;
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