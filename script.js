// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = '';
  var length = 0;
  var isNumber = '';
  var numericChar = "0123456890"
  var lowerAlphaChar = "abcdefghijklmnopqrstuvwxyz";
  var upperAlphaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()";
  var chars = '';


  
  var characters = prompt("Please enter a valid character length between 8 - 128 characters");
  isNumber = typeof Number(characters);
  length = parseInt(characters);

  //Validating the number of characters
  while ((parseInt(length) < 8 || parseInt(length) >= 128) || isNumber !== 'number') {
    length = prompt("Please enter a valid character length between 8 - 128 characters")
  }

  var upperCase = prompt("Include Uppercase? ");
  var uppperCaseValue = upperCase.toLowerCase();
  while (uppperCaseValue !== "no" && uppperCaseValue !== "yes") {
    uppperCaseValue = prompt("Please enter Yes or No. Include Uppercase?")
  }
  if (uppperCaseValue === 'yes') {
    chars = `${upperAlphaChar}`
  }


  var lowerCase = prompt("Include Lowercase ");
  var lowerCaseValue = lowerCase.toLowerCase();
  while (lowerCaseValue !== "no" && lowerCaseValue !== "yes") {
   lowerCaseValue =  prompt("Please enter Yes or No. Include Lowercase?")
  }
  if (lowerCaseValue === "yes") {
    chars = `${chars}${lowerAlphaChar}`
  }

  var numeric = prompt("Include numeric numbers? ");
  var numericLowercase = numeric.toLowerCase();
  while (numericLowercase !== "no" && numericLowercase !== "yes") {
    numericLowercase = prompt("Please enter Yes or No. Include Numeric?")
  }
  if (numericLowercase === "yes") {
    chars = `${chars}${numericChar}`
  }

  var specialCharacters = prompt("Include Special Characters? ");
  var specialCharactersCase = specialCharacters.toLowerCase();
  while (specialCharactersCase !== "no" && specialCharactersCase !== "yes") {
    specialCharactersCase =prompt("Please enter Yes or No. Include Special Characters?")
  }
  if (specialCharactersCase === "yes") {
    chars = `${chars}${specialChar}`
  }

  for (var i = 0; i <= length - 1; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);