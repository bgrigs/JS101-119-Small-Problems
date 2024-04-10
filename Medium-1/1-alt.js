// Rotation (Part 1)
// Write a function that rotates an array by moving the first elem to the end
// Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/*
Input: array
Output: array (don't mutate the original!)

Algo:
  - if input isn't an array, return undefined
  - if empty array, return empty array

  - create a copy of the original array
    - remove the first elem and push it to the end
  - return the modified copy
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return array.slice(1).concat(array[0]);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
let array2 = [{ a: 2 }, [1, 2], 3];
console.log(rotateArray(array2));
console.log(array2);