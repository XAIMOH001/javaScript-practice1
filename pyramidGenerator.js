function pyramid(char, rows, inverted) {
    let pyramidStr = '\n';
    for (let i = 0; i < rows; i++) {
        let level1 = inverted ? i : rows - 1 - i;
        let numChars = 1 + 2 * (rows - 1 - level1);
        let numSpaces = level1;
        let row = ' '.repeat(numSpaces) + char.repeat(numChars);
        pyramidStr += row + '\n';
    }                   

    return pyramidStr;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("o", 4, true));

console.log(pyramid('*', 5));
console.log(pyramid('#', 3, true));
console.log(pyramid('A', 4));   