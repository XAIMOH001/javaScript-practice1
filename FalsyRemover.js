function bouncer(arr){
    let result = [ ];
    for (let i = 0; i < arr.length; i++){
        if(Boolean(arr[i])){
            result.push(arr[i])
    }
    }
    return result;
}
console.log(bouncer([7, "ate", "", false, 9]));