function largestOfAll(arr){
    let results = [];
    // Loop through each sub-array
    for(let i = 0; i < arr.length; i++){
        let largestNumber = arr[i][0];
        // Loop through each number in the sub-array
        for(let j = 1; j< arr[i].length; j++){
            if(arr[i][j] > largestNumber){
                largestNumber = arr[i][j];
        }
    }
    // Push the largest number found in the sub-array to results
    results.push(largestNumber);
}
return results;
}
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfAll([[-4, -5, -1, -3], [-13, -27, -18, -26], [-32, -35, -37, -39], [-1000, -1001, -857, -1]]));
console.log(largestOfAll([[0, -5, -1, -3], [-13, 0, -18, -26], [-32, -35, 0, -39], [-1000, -1001, -857, 0]]));
