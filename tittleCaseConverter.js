function titleCase(str){
str = str.toLowerCase();
//split the string into an array of words
let words = str.split(" ");

for (let i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}


return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I like to code"));