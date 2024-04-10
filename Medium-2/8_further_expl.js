// Further Exploration - Longest Sentence
// Find the sentnece that has the longest word 

/*
Input: string
Output: string (sentence with the longest word))
  
*/

function findSentenceWithLongestWord(text) {
  let endOfSentence = '.?!';
  let sentences = findSentences(text, endOfSentence);
  let longestWord = findLongestWord(text, endOfSentence);

  let sentenceWithLongestWord = sentences.filter(sentenceArr => 
    sentenceArr.includes(longestWord))[0];
 
  console.log(sentenceWithLongestWord);
  console.log(`The longest word is '${longestWord}'.
`);
}

function findLongestWord(text, endOfSentence) {
  let punctuationRemoved = text.split(" ").map(word => {
    return word.split("").map(char => {
      if (!endOfSentence.includes(char)) return char;
    }).join("");
  });

  let sortedByWordLength = punctuationRemoved.sort((a, b) => b.length - a.length);

  return sortedByWordLength[0];
}

function findSentences(text, endOfSentence) {
  let sentences = [];
  let startingIdx = 0;

  for (let idx = 0; idx < text.length; idx++) {
    if (endOfSentence.includes(text[idx])) {
      sentences.push(text.slice(startingIdx, idx + 1));
      startingIdx = idx + 2;
    }
  }

  return sentences;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

findSentenceWithLongestWord(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.
findSentenceWithLongestWord(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.
findSentenceWithLongestWord("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.
findSentenceWithLongestWord("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.


