// Variables
var minPwLength = 8;
var maxPwLength = 128;
var generateBtn = document.querySelector("#generate");

// function to generate pw between 8-128 chars
function generatePw() {
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

    //Variables for different scenarios based on user input
    var allChars = lowerCase + upperCase + numbers + specialChars;
    var scenarioA = lowerCase + upperCase + numbers;
    var scenarioB = lowerCase + upperCase + specialChars;
    var scenarioC = lowerCase + numbers + specialChars;
    var scenarioD = upperCase + numbers + specialChars;
    var scenarioE = lowerCase + upperCase;
    var scenarioF = lowerCase + numbers;
    var scenarioG = lowerCase + specialChars;
    var scenarioH = upperCase + numbers;
    var scenarioI = upperCase + specialChars;
    var scenarioJ = numbers + specialChars;

    //Variable for password to be generated
    var newPw = "";

    //For loop for each scenario
    if (cNumbers === true && cSpecialChars === true && cUpper === true && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * allChars.length);
        newPw += allChars.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === false && cUpper === true && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioA.length);
        newPw += scenarioA.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === true && cUpper === true && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioB.length);
        newPw += scenarioB.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === true && cUpper === false && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioC.length);
        newPw += scenarioC.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === true && cUpper === true && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioD.length);
        newPw += scenarioD.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === false && cUpper === true && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioE.length);
        newPw += scenarioE.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === false && cUpper === false && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioF.length);
        newPw += scenarioF.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === true && cUpper === false && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioG.length);
        newPw += scenarioG.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === false && cUpper === true && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioH.length);
        newPw += scenarioH.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === true && cUpper === true && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioI.length);
        newPw += scenarioI.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === true && cUpper === false && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * scenarioJ.length);
        newPw += scenarioJ.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === false && cUpper === false && cLower === true) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * lowerCase.length);
        newPw += lowerCase.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === false && cUpper === true && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * upperCase.length);
        newPw += upperCase.charAt(char);
      }
    }

    else if (cNumbers === false && cSpecialChars === true && cUpper === false && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * specialChars.length);
        newPw += specialChars.charAt(char);
      }
    }

    else if (cNumbers === true && cSpecialChars === false && cUpper === false && cLower === false) {
      for (i = 0; i < pwLength; i++) {
        var char = Math.floor(Math.random() * numbers.length);
        newPw += numbers.charAt(char);
      }

    } else {
      alert('You MUST confirm at least one of the prompts in order to obtain a password');
    }

    return newPw;

  } else {
    alert('Password MUST be between 8 and 128 characters');
    return 'Try again!';
  }
}

// Write password to the #password input
function writePw() {
  var password = generatePw();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePw);
