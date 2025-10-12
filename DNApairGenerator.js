/*  a function to match the missing base pairs 
for the provided DNA strand. For each character 
in the provided string, find the base pair 
character.
*/
function pairElement(str){
  //DNA pair rules
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }; 

  //turn string into an array
  const bases = str.split("");

  //map through the array
  return bases.map(base => [base, pairs[base]]);
}
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("ATCCTCTAGA"));
