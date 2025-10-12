//this is a really good JavaScript practice challenge about combining arrays and removing duplicates while keeping order.
function uniteUnique (...arrays) {
    let combined = arrays.flat();
    //remove the duplicates
    let uniqueArray = [...new Set(combined)];
    return uniqueArray;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));