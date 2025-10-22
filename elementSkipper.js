function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }

  return [];
}

// Example test cases
console.log(dropElements([1, 2, 3, 4], n => n >= 3)); 
console.log(dropElements([1, 2, 3], n => n > 5));     
console.log(dropElements([0, 1, 0, 1], n => n === 1)); 
