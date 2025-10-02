function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // check if there is a gap
    if (nextCode - currentCode > 1) {
      // return the missing letter
      return String.fromCharCode(currentCode + 1);
    }
  }
  // if no missing letters
  return undefined;
}
console.log(fearNotLetter("abce")); 