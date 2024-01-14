/*
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Problem

  Input: a string consisting of zero or more space separated words
  Output: an object that shows the number of words of different sizes

  Rules: Words consist of any sequence of non-space characters (aka punctuation counts. See test cases)

Examples/Test Cases (see below)

Data Structure: Objects. Might turn a copy of the string into an array in order to use array methods on the words before storing word lengths in an object.

Algorithm
  Count the length of each word in the string and store these numbers in an array called lengthsArr (i.e, [3, 2, 3])
  Create a new array called lengthsTruncated that includes the number lengths, but this time each length number will only appear once (i.e. [3, 2])
    -Sort lengthsTruncated in ascending order

  Create an object called lengthCounterObj
    For every number in lengthsTruncated, set an object key to that "number" (it will be a string now since its an object key)
    Set each value to 0 (for now, we'll use this as a counter)

  Iterate over lengthsArr and transform the value in lengthCoutnerObj
    Each time that a number is seen in the array, increase the associated value by 1 (if 3 only appears once in the array for example, the counter will show 1 for that key. If it appears twice, the counter will show 2)
*/


function wordSizes(string) {  
  let lengthsArr = string.split(" ").map(word => word.length);
  let sortedLengths = truncateWordLengths(lengthsArr).sort();
  let lengthCounterObj = storeLengthsInObject(sortedLengths);

  return countLengthInstances(lengthsArr, lengthCounterObj);
}

function truncateWordLengths(lengthsArr) {
  let lengthsTruncated = [];
  if (lengthsArr[0] === 0) return [];

  lengthsArr.forEach(length => {
    if (lengthsTruncated.indexOf(length) === -1) {
      lengthsTruncated.push(length);
    }
  });
  
  return lengthsTruncated;
}

function storeLengthsInObject(sortedLengths) {
  let lengthCounterObj = {};

  sortedLengths.forEach(length => {
    lengthCounterObj[length] = 0;
  });

  return lengthCounterObj;
}

function countLengthInstances(lengthsArr, lengthCounterObj) {
  for (let length of lengthsArr) {
    if (Object.keys(lengthCounterObj).includes(String(length))) {
      lengthCounterObj[length] += 1;
    }
  }

  console.log(lengthCounterObj);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}