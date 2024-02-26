function multiplyList(arr1, arr2) {
  let multiplied = [];

  arr1.forEach((_, idx) => {
    multiplied.push(arr1[idx] * arr2[idx]);
  });

  return multiplied;
}


multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]