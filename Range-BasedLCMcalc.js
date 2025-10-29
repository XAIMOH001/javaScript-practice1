function smallestCommons(arr) {
  // Sort numbers
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  // Helper: Greatest Common Divisor
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Helper: Least Common Multiple
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Find LCM for all numbers in range
  let multiple = min;
  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

// Example Tests
console.log(smallestCommons([1, 5])); 
console.log(smallestCommons([5, 1])); 
console.log(smallestCommons([2, 10])); 
