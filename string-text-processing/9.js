/*
Input: two args: 1) a word 2) string of text
Output: an integer showing how often the word appears

Rules:
  - word and text will always be provided
  - all word breaks are spaces.
  - search is case insenstive


Algo:
  - declare a var counter, initialize it to 0

  - call toLowerCase on the string, then seperate the string into an array
  - iterate throght the array,
  - if the elem includes the word, add 1 to the counter
*/

function searchWord(word, text) {
  return text.toLowerCase()
    .split(" ")
    .reduce((accum, elem) => {
      if (elem.includes(word)) accum += 1;
      return accum;
    }, 0);
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3