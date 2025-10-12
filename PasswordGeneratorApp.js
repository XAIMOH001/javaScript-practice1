function generatePassword(length){
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

  //random characters
  for (let i = 0; i < length; i++){
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

let password = generatePassword(40);
console.log(`Generated password: ${password}`);