//Combining Arrays

function union(arr1, arr2) {
  let newArr = arr1;

  arr2.forEach(element => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]