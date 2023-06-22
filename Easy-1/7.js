/* Short Long Short
function should have two strings as arguments
determine the length of each string
IF the first string is shorter than the second,
=> RETURN string1 + string2 + string1
IF the second string is shorter than the first
=> RETURN string2 + string1 + string2
*/

function shortLongShort(string1, string2) {
  let concatString = '';
  if (string1.length > string2.length) {
    concatString = string1 + string2 + string1;
  } else if (string2.length > string1.length) {
    concatString = string2 + string1 + string2;
  }
  return concatString;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"