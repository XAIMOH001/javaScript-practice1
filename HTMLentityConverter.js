function convertHTML(str){
  const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
  };
  //we use regular expressions to find the characters that need replacing: /[&<>"']/g
  return str.replace(/[&<>"']/g, char => entities[char]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotes"'));
console.log(convertHTML("Schindler's List"));