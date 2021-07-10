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
  var pwLength = prompt('How long would you like your password to be? (8-128 characters)');
  
  // Prompt user to enter
  if (pwLength >= minPwLength && pwLength <= maxPwLength) {
    // let user customize password
    var cNumbers= confirm("Would you like to use numbers?");
    var cSpecialChars = confirm("How about special characters?");
    var cUpper = confirm("Would you like to use uppercase letters?");
    var cLower = confirm("Lastly, Would you like to use lowercase letters?");

  } else {
    alert('Password MUST be between 8 and 128 characters')
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
