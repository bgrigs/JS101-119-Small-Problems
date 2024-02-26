// Reverse It (Part 1)
function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"