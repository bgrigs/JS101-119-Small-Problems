// Counting Up

function sequence(num) {
  let integers = [];
  for (let int = 1; int <= num;  int += 1) {
    integers.push(int);
  }

  return integers;
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]