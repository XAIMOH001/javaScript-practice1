function repeatStringNumTimes(str, num) {
    let results = "";
    for (let i = 0; i < num; i++){
        results += str;
    }
    return results;
}

console.log(repeatStringNumTimes("abc", 3));