function operateOnArray(arr, operation){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(operation(arr[i]));
    }    return result;
}
function square(num){
    return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = operateOnArray(numbers, square);
console.log(squaredNumbers); 