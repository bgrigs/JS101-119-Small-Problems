// Halvsies

function halvsies(arr) {
  let arrCopy = arr.slice();
  let newArr = [[], []];

  while (arrCopy.length > 0) {
    if (newArr[0].length < (arr.length / 2)) {
      newArr[0].push(arrCopy.shift());
    } else {
      newArr[1].push(arrCopy.shift());
    }
  }

  return newArr;
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]