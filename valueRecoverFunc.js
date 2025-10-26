/*In this lab, you will create a function that 
takes an initial array as its first argument, 
followed by one or more additional arguments 
representing the values to remove.
*/

function destroyer(arr, ...additionalArgs){
  return arr.filter(item => !additionalArgs.includes(item));
}