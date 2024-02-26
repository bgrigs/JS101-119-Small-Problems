// Grocery List
// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/*
Input: Two-dimensional array
Output: One-dimensional array, each fruit name should appear the number of times equal to its desired quantity
Data structure: arrays

Algo:
- loop through outer array
- loop through inner arrays
- for each number in quantity (index 1 of inner array), add fruit to the new array (index 0 of inner array)
- return new array
*/

function buyFruit(arr) {
  return arr.reduce((accum, [fruit, quantity]) => {
    while (quantity > 0) {
      accum.push(fruit);
      quantity--;
    }
    return accum;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]