// What Century is That? 

function century(year) {
  let centuryNumber = Math.floor(year / 100);

  if (year % 100 !== 0) {
    centuryNumber += 1;
  }

  console.log(String(centuryNumber) + centurySuffix(centuryNumber));
}

function centurySuffix(century) {
  if (exceptionTh(century % 100)) {
    return 'th';
  }

  let lastDigit = century % 10;

  switch (lastDigit) {
    case 1:
      return 'st'
      break;
    case 2:
      return 'nd'
      break;
    case 3:
      return 'rd'
      break;
    default: return 'th';
  } 
}

function exceptionTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"