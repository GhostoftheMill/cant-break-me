// Assignment code here
// All possible characters for password
var lowerChars = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
}
var upperChars = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
}
var numChars = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
}
var specChars = {'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', ',', '.', '/', '-', '=',
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr(randIndex);
  return randElement;
}

function getPasswordOps() {
  var length = parseInt(prompt(Number of characters, 8-128);

  if (Number.isNaN(length)) {
    alert('Length must be provided numerically'); return null;
  }

  if (length <8) {
    alert('Minimum of 8 characters'); return null;
  }

  if (length >128) {
    alert('Maximum of 128 characters'); return null;
  }
  
  
  var passwordOps = {
    length: length, hasLowerChars: hasLowerChars, hasUpperChars: hasUpperChars, hasNumChars: hasNumChars, hasSpecChars: hasSpecChars, 
  };

  var hasLowerChars = confirm('Click Yes to confirm lowercase characters');
  var hasUpperChars = confirm('Click Yes to confirm uppercase characters');
  var hasNumChars = confirm('Click Yes to confirm numerical characters');
  var hasSpecChars = confirm('Click Yes to confirm special characters');

  return passwordOps;
  }

function generatePassword() {
  var ops = getPasswordOps();
  var result = [];
  var possChars = [];
  var guarChars = [];

  if (options.hasLowerChars){
    possChars = possChars.concat(lowerChars)
    guarChars = guarChars.concat(lowerChars)
  }

  if (options.hasUpperChars){
    possChars = possChars.concat(upperChars)
    guarChars = guarChars.concat(upperChars)
  }

  if (options.hasNumChars){
    possChars = possChars.concat(numChars)
    guarChars = guarChars.concat(numChars)
  }

  if (options.hasSpecChars){
    possChars = possChars.concat(specChars)
    guarChars = guarChars.concat(specChars)
  }

  for (var i=0; i < options.length; i++) {
    var possChars = getRandom(possChars);
    result.push(possChars)
  }

  for (var i=0; i < guarChars.length; i++) {
    result [i] = guarChars[i];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
