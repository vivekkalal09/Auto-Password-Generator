const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


function createPassword() {
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + numbers[Math.floor(Math.random() * numbers.length)];
    password = password + symbols[Math.floor(Math.random() * symbols.length)];

    console.log(password);
}


createPassword();