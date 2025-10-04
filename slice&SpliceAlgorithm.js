function frankenSplice(arr1, arr2, n){
    // Step 1: Create a copy of arr2 so we don't change the original
    let newArr = arr2.slice();
    // Step 2: Use splice to insert arr1 into newArr at index n
    newArr.splice(n, 0, ...arr1);
    // Step 3: Return the modified array
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log(frankenSplice([1, 2], ["a", "b"], 1));

console.log(frankenSplice([1, 2], [3, 4, 5], 0));
