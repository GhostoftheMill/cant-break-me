//defines variables for all acceptable password characters
/* old code
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '_', '~', '[', ']', '{', '}', '<', '>', '?', '/',]
*/
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numChars = '0123456789';
const specChars = '~!@#$%^&*()_+=-[]{}?';

//gets random element
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

/*creates function for user inputed password criteria 
password has min 8 characters, max 128
*/
function getPasswordOps() {
  var length = parseInt(
    prompt('Enter a number between 8-128. Click "OK".'));

  if (Number.isNaN(length)) {
    alert('Length must be provided numerically'); return null;
  }

  if (length <8) {
    alert('Minimum of 8 characters'); return null;
  }

  if (length >128) {
    alert('Maximum of 128 characters'); return null;
  } 

  // creates series of yes/no prompts that return boolean response
  var hasLowerChars = confirm('Do you want lowercase characters? Click "OK" for "yes". Click "Cancel" for "no".');
  var hasUpperChars = confirm('Do you want uppercase characters? Click "OK" for "yes". Click "Cancel" for "no".');
  var hasNumChars = confirm('Do you want numerical characters? Click "OK" for "yes". Click "Cancel" for "no".');
  var hasSpecChars = confirm('Do you want special characters? Click "OK" for "yes". Click "Cancel" for "no".');

  if (!hasLowerChars && !hasUpperChars && !hasNumChars && !hasSpecChars ) {
    alert('Pardon us but what are you doing? Try again.'); return null;
  }

  var passwordOps = {
    'length': length, 'hasLowerChars': hasLowerChars, 'hasUpperChars': hasUpperChars, 'hasNumChars': hasNumChars, 'hasSpecChars': hasSpecChars, 
  };

  //returns object that stores user's inputed responses
  return passwordOps;
}

function generatePassword() {
  var options = getPasswordOps();
  var result = [,];
  var possChars = [,];

  options['hasLowerChars'] === true ? possChars.push(lowerChars) : console.log('User hates lowercase'); 
  options['hasUpperChars'] === true ? possChars.push(upperChars) : console.log('User hates uppercase');
  options['hasNumChars'] === true ? possChars.push(numChars) : console.log('User hates numbers');
  options['hasSpecChars'] === true ? possChars.push(specChars) : console.log('User hates special characters');

  //var merged = possChars.reduce();
  var merged = possChars.join('');

  for (var i=0; i < options['length']; i++) {
    var userPswd = getRandom(merged);
    result.push(userPswd);
  }

  result = result.join('');
  return result;
}

//Starter code below this point

//defines variable that selects button with generate id
var generateBtn = document.querySelector("#generate");

// creates function that passes created password in password id element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// code to start password creation process when user clicks button, generatePassword is hoisted as parameter
generateBtn.addEventListener("click", writePassword);