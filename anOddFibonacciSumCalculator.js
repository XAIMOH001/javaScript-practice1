function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) { // Check if Fibonacci number is odd
      sum += curr;
    }
    // Move to the next Fibonacci number
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

// Example Tests
console.log(sumFibs(10));  // Output: 10  (1 + 1 + 3 + 5)
console.log(sumFibs(1000)); // Output: 1785
