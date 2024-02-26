/*
Input: string
Output: array that contains every word from the string
  - followed by a space and the word's length

Rules:
  - if arg is empty or no arg, return []
  - all words will be seperated by an single space

Algo:
  - split the string into an array, seperating by space
  - iterate through each elem in this array and concat the elem with its length
*/

function wordLengths(string) {
  if (!string) return [];
  return string.split(" ").map(word => word + ' ' + String(word.length));
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []


