function  trancateString(str, num){
    if (str.length > num){
        return str.slice(0, num) + "...";
    }else{
        return str;
    }
}

console.log(trancateString("A-tisket a-tasket A green and yellow basket", 8));