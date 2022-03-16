// Assignment Code
function generatePassword() {
  window.alert("Welcome, Just a few questions to make your secur password");
  
  // return generated password
  return passwordQuestions();;
}

function passwordQuestions() {
  var length = " ";
  while (length === "" || length === null || length > 128 || length < 8 || isNaN(length)) {
    length = parseInt(
      prompt("How long do you want your Password? betwen 8 - 128")
    );
  }

  //"0123456789"; "!@#$%^&*()"; "abcdefghijklmnopqrstuvwxyz"; "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var usableCharacters = "";
  console.log(length);
  console.log(typeof length);

  var lowCaracters = window.confirm(
    "Do you want to add lowercase characters (abc...) in your password?"
  );
  if (lowCaracters) {
    window.alert("Lower case characters will be added to your password.");
    usableCharacters += "abcdefghijklmnopqrstuvwxyz";
  } else {
    window.alert("Lower case characters will not be added to your password.");
  }

  var upCharacters = window.confirm(
    "Do you want to add upper case charecters in your password?"
  );
  if (upCharacters) {
    window.alert("Upper case charecters will be add to your password.");
    usableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    window.alert("Upper case charecters will not be added to your password.");
  }

  var numConfirm = window.confirm(
    "Do you want to add numbers (123...) in your password?"
  );
  if (numConfirm) {
    window.alert("Number will be added to your password.");
    usableCharacters += "0123456789";
  } else {
    window.alert("No number will be added to your passwords.");
  }

  var specCharacter = window.confirm(
    "Do you want to add the special characters (!@#...) in your password?"
  );
  if (specCharacter) {
    window.alert("Special charaacters will be added to your password.");
    usableCharacters += "!@#$%^&*()";
  } else window.alert("No special characters will be added to your password.");

  if (numConfirm || specCharacter || lowCaracters || upCharacters) {
    window.alert("Making your secur password...");
  } else {
    window.alert("You shoud choose at least one option! Please try again.");
    return passwordQuestions();
  }

  

  var password = "";
  for (var i = 0; i < length; i++) {
    password +=
      usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
  }
  return password;
}


// Get references to the generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password inpute

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
