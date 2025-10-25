function diffArray(arr1, arr2) {
  // Step 1: Use filter to find items only in arr1 (not in arr2)
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));

  // Step 2: Use filter to find items only in arr2 (not in arr1)
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));

  // Step 3: Combine both unique arrays
  return [...onlyInArr1, ...onlyInArr2];
}

// ✅ Example tests
console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));
// ["diamond", "apple", "emerald", "bread"]

console.log(diffArray([1, 2, 3], [2, 3, 4]));
// [1, 4]

console.log(diffArray([1, 2, 3], [1, 2, 3]));
// []

console.log(diffArray([], [1, 2]));
// [1, 2]
