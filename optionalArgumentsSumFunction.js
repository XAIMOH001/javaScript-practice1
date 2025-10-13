function addTogether(a, b){
  if(typeof a !== "number") return undefined;

  //check if second argument exists or if it's explicitly provided
  if (arguments.length === 2){

    //check if it's a number as well
    if(typeof b !== "number") return undefined;
    return a + b;
  }else{
    // if only one argument is provided
    // return a function that expects another num
    return function(c){
      if(typeof c !== "number") return undefined;
      return a + c;
    };
  }
}

// Examples
console.log(addTogether(2, 4));     
console.log(addTogether(5)(7));     
console.log(addTogether(2, "3"));  
console.log(addTogether(4)(9));    
console.log(addTogether(5, undefined));    