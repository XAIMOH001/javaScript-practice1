function getVowelCount(sentence){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let char of sentence){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);