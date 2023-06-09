/*  Leap Years (Part 2)
Prior to 1752, the British Empire used the Julian Calendar.
Under the Julian Calendar, leap years occur in any year that evenly divisible by 4.
Update the function from the previous exercise to determine leap years both before and after 1752.
*/

function isLeapYear(year) {
  if (year > 1752 && year % 400 === 0) {
    return true;
  } else if (year > 1752 && year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true