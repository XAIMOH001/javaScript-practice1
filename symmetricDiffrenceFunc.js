function diffArray(arr1, arr2){
  //find items in arr1 only
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  
  //find items in arr1 only

  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
  return [...onlyInArr1, ...onlyInArr2];

}

// ✅ Example tests
console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));

console.log(diffArray([1, 2, 3], [2, 3, 4]));

console.log(diffArray([1, 2, 3], [1, 2, 3]));

console.log(diffArray([], [1, 2]));
