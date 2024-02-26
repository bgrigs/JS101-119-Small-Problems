function multiplicativeAverage(arr) {
  let result = 1;

  arr.forEach(elem => {
    result *= elem;
  });

  return (result / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"