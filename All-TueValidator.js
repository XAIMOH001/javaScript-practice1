function truthCheck(collection, pre) {
  // Check if every object in the collection has a truthy value for property 'pre'
  return collection.every(obj => obj[pre]);
}

// Test cases
console.log(truthCheck([
  {name: "Quincy", role: "Founder", isBot: false},
  {name: "Naomi", role: "", isBot: false},
  {name: "Camperbot", role: "Bot", isBot: true}
], "isBot"));  
