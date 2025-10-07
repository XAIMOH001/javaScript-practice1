function getAverage(scores){
    let total = 0;
    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    let average = total / scores.length;
    return average;
}
console.log(getAverage([90, 95, 85, 100]));
console.log(getAverage([70, 80, 90]));