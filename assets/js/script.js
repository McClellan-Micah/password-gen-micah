// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    //create empty array for password
    var password = [];

    //create if statements to grab random functions
    var confirmLength = window.prompt("Choose between 8 and 128 characters for your password.");
        confirmLength = parseInt(confirmLength);

    var confirmLower = window.confirm("Would you like to include lowercase letters in your password?");
        console.log("Lowercase: " + confirmLower);

    var confirmUpper = window.confirm("Would you like to include uppercase letters in your password?");
        console.log("Uppercase: " + confirmUpper);

    var confirmNumeric = window.confirm("Would you like to include numbers in your password?");
        console.log("Numbers: " + confirmNumeric);

    var confirmSymbol = window.confirm("Would you like to include special characters in your password?");
        console.log("Symbols: " + confirmSymbol);

    //return password
}

//create functions that contain arrays for randomized characters
function getRandomLower() {
    const getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return getRandomLower[Math.floor(Math.random() * getRandomLower.length)];
}

function getRandomUpper() {
    const getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return getRandomUpper[Math.floor(Math.random() * getRandomUpper.length)];
}

function getRandomNumber() {
    const getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return getRandomNumber[Math.floor(Math.random() * getRandomNumber.length)];
}

function getRandomSymbol() {
    const getRandomSymbol = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", " ", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^","_", "`", "{", "|", "}", "~"];
    return getRandomSymbol[Math.floor(Math.random() * getRandomSymbol.length)]; 
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);