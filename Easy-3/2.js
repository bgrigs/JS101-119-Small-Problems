// Bannerizer

// create a function with an argument that is a line of text
// get length of text (including spaces)
// store symbols for topBottom row and sides in arrays
// for every letter/space in line, add '-' in the top/bottom row
// for every letter/space, add a space in the 2 rows surrounding the text
// insert text in middle row

function logInBox(string) {
  let topBottom = ['+', '-', '-', '+'];
  let sides = ['|', ' ', ' ', '|'];
  let centerRow = ['|', ' ', string, ' ', '|'];
  let addWidth = string.length;

  topBottom.splice(2, 0, '-'.repeat(addWidth));
  sides.splice(2, 0, ' '.repeat(addWidth));

  displayBox(topBottom, sides, centerRow);
}

function displayBox(outer, inner, center) {
  console.log(outer.join(''));
  console.log(inner.join(''));
  console.log(center.join(''));
  console.log(inner.join(''));
  console.log(outer.join(''));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Kenergy');

