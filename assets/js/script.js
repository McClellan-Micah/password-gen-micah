// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    //create empty array for password

    //create random variables to obtain user input

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