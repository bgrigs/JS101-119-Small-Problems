// Using previously made function

function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true