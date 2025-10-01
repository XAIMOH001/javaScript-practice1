function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// Example usage:
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// Output: [ [ 'a', 'b' ], [ 'c', 'd' ] ]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// Output: [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
