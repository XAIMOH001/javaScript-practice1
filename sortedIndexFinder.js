/* In this lab, you will create a function that finds the index
at which a given number should be inserted into a sorted array
to maintain the array's sorted order.*/
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(value => num <= value);

  // Step 3: If num is larger than all elements, insert at end
  return index === -1 ? arr.length : index;
}

// ✅ Example test cases
console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19));    // 2
console.log(getIndexToIns([5, 10, 15], 10));   // 1
console.log(getIndexToIns([], 50));            // 0



