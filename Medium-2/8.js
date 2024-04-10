// Longest Sentence
// Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

/*
Input: string
Output: string (longest sentence)
  - longest sentence is determined by the # of words
  - 

Algo:
  - declare a var sentences and init to []
  - separate each string by sentence (sentences end with a . OR ? OR !) and store in an array
      - declare a var endOfSentenceIdx and init to 0
      - iterate through each char. if the char is === to . OR ! OR ?, add everything before that char to sentences (in the form of a nested array)
      - reassign endOfSentenceIdx to the char idx that was equal to . ! OR ?

    - separate each sentence by a space and store in a nested array (aka we will have an array of words)
      - sort the nested arrays by length in descending order
        - join the array and idx 0 back together into a string and return 
*/

function longestSentence(text) {
  let sentences = [];
  let endOfSentence = '.?!'
  let startingIdx = 0;

  for (let idx = 0; idx < text.length; idx++) {
    if (endOfSentence.includes(text[idx])) {
      sentences.push(text.slice(startingIdx, idx + 1).split(" "))
      startingIdx = idx + 2;
    }
  }

  console.log(sentences)

  let longestSentenceArr = sentences.sort((a,b) => {
    return b.length - a.length;
  })[0];

  console.log(longestSentenceArr.join(" ") + '\n');
  console.log(`The longest sentence has ${longestSentenceArr.length} words.
`)
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

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.
longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.
longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.
longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.