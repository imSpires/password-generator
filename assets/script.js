// Variables
var minPwLength = 8;
var maxPwLength = 128;
var generateBtn = document.querySelector("#generate");

// function to generate pw between 8-128 chars
function writePw() {
  // variables for password generation
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numbers = '0123456789'
  var specialChars = "!@#$%^&*()_+{}|:?><[]";

  // Prompt user to enter char length
  var pwLength = prompt('How long would you like your password to be? (8-128 characters)')

  if (pwLength >= minPwLength && pwLength <= maxPwLength) {
    console.log(pwLength);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePw);
