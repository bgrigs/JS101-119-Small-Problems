// Neutralizer
// We wrote a neutralize function that removes negative words from sentences. However, it fails to remove all of them. What does happen? How would you fix this problem?


function neutralize(sentence) {
  let words = sentence.split(" ");
  let wordsCopy = words.slice()

  words.forEach(word => {
    if (isNegative(word)) {
      const index = wordsCopy.indexOf(word);
      wordsCopy.splice(index, 1);
    }
  });
  return wordsCopy.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

/* Original code

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

*/

