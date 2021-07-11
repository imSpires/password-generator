// Variables
var minPwLength = 8;
var maxPwLength = 128;
var generateBtn = document.querySelector("#generate");
var pwLength = 0;

// function to create a password length
function selectPwLength() {

  // Prompt user to enter char length
  pwLength = prompt('How long would you like your password to be? (8-128 characters)');
  
  if (pwLength >= minPwLength && pwLength <= maxPwLength) {
  } else {
    // Alert user if they did not enter correct char length
    alert('Password MUST be between 8 and 128 characters');
    // Restart the function
    return selectPwLength();
  }
  return generatePw();
}

//function to generate pw
function generatePw() {

  // variables for password generation
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numbers = '0123456789'
  var specialChars = "!@#$%^&*()_+{}|:?><[]";
  var pwPool = '';

  // let user customize password and add characters to pwPool based on user input
  var cNumbers= confirm("Would you like to use numbers?");
    if (cNumbers) {
      pwPool += numbers;
    }
  var cSpecialChars = confirm("How about special characters?");
  if (cSpecialChars) {
    pwPool += specialChars;
  }
  var cUpper = confirm("Would you like to use uppercase letters?");
  if (cUpper) {
    pwPool += upperCase;
  }
  var cLower = confirm("Lastly, Would you like to use lowercase letters?");
  if (cLower) {
    pwPool += lowerCase;
  }

  // if password pool length = 0, prompt user to try again
  if (!cLower && !cUpper && !cSpecialChars && !cNumbers) {
    alert('You need a type of character in your password, Please try again.');
    return generatePw();
  }

  //Variable for password to be generated
  var newPw = "";

  for (var i =0; i < pwLength; i++) {
    newPw += pwPool.charAt(Math.floor(Math.random() * pwPool.length));
  }
  return newPw;
}

// Write password to the #password input
function writePw() {
  var password = selectPwLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate a password based on button click
generateBtn.addEventListener("click", writePw);
