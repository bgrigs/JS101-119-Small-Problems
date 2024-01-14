// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// declare a variable and set it to an empty string called lettersAndSpaces
// iterate through each character in the words string. for every letter or space, concatenate the empty string with that letter
// use the spaces to split the array. this will result in an array of words with only letters (no spaces will be in the array). 
// iterate through each element of the array and count the # size of each word as with Problem 6

function wordSizes(words) {
  let lettersAndSpaces = removeNonLetters(words.toLowerCase());
  let wordsArray = lettersAndSpaces.split(' ');
  let count = {};

  for (let word of wordsArray) {
    let wordSize = word.length;

    if (wordSize === 0) continue;
    if (!count[wordSize]) count[wordSize] = 0;
    
    count[wordSize] += 1;
  }

  console.log(count);
}

function removeNonLetters(words) {
  let lettersAndSpaces = "";
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] >= "a" && words[i] <= "z") lettersAndSpaces += words[i]; 
    if (words[i] === " ") lettersAndSpaces += words[i]; 
  }

  return lettersAndSpaces;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}