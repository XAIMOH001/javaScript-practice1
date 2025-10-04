function findElement(arr, func){
for(let i = 0; i < arr.length; i++){
  if(func(arr[i])){
    return arr[i];
  }
}

}

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 7, 9], function(num) { return num % 2 === 0; }));
