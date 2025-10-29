function steamrollArray(arr) {
  let result = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      // Recursively flatten the inner array
      result = result.concat(steamrollArray(element));
    } else {
      // Add non-array elements directly
      result.push(element);
    }
  });

  return result;
}

// Example Tests
console.log(steamrollArray([[1], [], [2, [3]]])); 
console.log(steamrollArray([1, {"foo": "bar"}, [2]]));
console.log(steamrollArray(["baz", [1, 2], {}])); 
