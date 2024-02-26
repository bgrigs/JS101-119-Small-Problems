// Sequence Count

function sequence(count, start) {
  let arr = [];
  for (let mult = 1; mult <= count; mult += 1) {
    arr.push(start * mult);
  }

  return arr;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []