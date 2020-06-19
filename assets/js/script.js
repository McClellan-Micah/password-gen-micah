// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    //create empty array for password
    var password = [];

    //create random variables to obtain user input
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

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);