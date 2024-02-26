function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  for (let num of arr1) {
    for (let num2 of arr2) {
      newArr.push(num * num2);
    }
  }

  return newArr.sort((a,b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]