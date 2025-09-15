//In this lab, I implement a function that checks if a value is a boolean.
// checks whether the given value is a Boolean primitive (true or false).
// uses the typeof operator, which returns the type of the value as a string.
// If the value is exactly true or false, typeof will return "boolean", so the function returns true.
// For any other type (numbers, strings, objects, arrays, etc.), typeof will NOT return "boolean", so the function returns false.
function booWho(value){
    return typeof value ==="boolean";
}