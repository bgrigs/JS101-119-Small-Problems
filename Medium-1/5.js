// Word to Digit

/*
Input: string/sentence
Output: string
  - with every occurrence of a number word replaced with the corresponding digit

Data structure: object and arrays
*/

let numberWordPairs = {zero: 0, one: 1, two: 2, three: 3, four: 4,
  five: 5, six: 6, seven: 7, eight: 8, nine: 9};

function wordToDigit(sentence) {
  let allWords = sentence.split(" ");
  let numberWords = Object.keys(numberWordPairs);

  allWords.forEach(elem => {
    if (numberWords.some(word => elem.includes(word))) {
      let number = numberWords.find(word => elem.includes(word));
      sentence = sentence.replace(number, numberWordPairs[number]);
    }
  });

  console.log(sentence);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."