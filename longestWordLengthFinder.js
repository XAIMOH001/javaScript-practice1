function findLongestWordLength(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Keep track of the longest word length
  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}

// Example usage:
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); 
// Output: 6
