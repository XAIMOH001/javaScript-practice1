/*In this lab, you will create a function that filters an array
 of objects and returns only those objects that match all
  key-value pairs in a given source object. */

function whatIsInAName(collection, source) {
  // extract all keys from the source object
  const keys = Object.keys(source);

  // Filter the collection
  return collection.filter(obj =>
    // Check if every key in 'source' exists in 'obj' with the same value
    keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

// Example test
const result = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

console.log(result);

 