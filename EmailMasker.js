function maskEmail(email){
    //find positin of @ which marks the end of username
    // we declare a function and name it midpoint
    let midPoint = email.indexOf("@");


    //declare username and domain
    let username = email.slice(0, midPoint);
    let domain = email.slice(midPoint);

    //check if username is too short
    // that is <= 2 characters

    if(username <= 2){
        return email;
    }
     //declare the email parts with correct positioning
    let firstChar = username[0];
    let maskedSection = "*".repeat(username.length -2);
    let lastChar = username[username.length - 1];

    return firstChar + maskedSection + lastChar + domain;
}
let email = "xc@gmail.com";
console.log(maskEmail(email));