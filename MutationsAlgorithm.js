function mutation(arr){
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  for (let  char of str2){
    if(!str1.includes(char)){
      return false;
      }
    }
    return true;
}

console.log(mutation(["hello", "neo"]));