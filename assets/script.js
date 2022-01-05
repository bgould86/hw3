let generateBtn = document.querySelector("#generate");
// character arrays
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "_", "?"];

// generatePassword
// return a final password as a string
function generatePassword() {
  let pwBank = [];
  let pwActive = [];
  //create a password of a specific length
  let pwLength = prompt("Passwords should be between 8 and 128 charcters in length. How long has this been going on?");
  //ensure user specified length fits requirements
  if (pwLength < 8 || pwLength > 128) {
    alert("Please choose a password length between 8 and 128 characters");
    return null;
  } else {
    //user defines what type of characters their password should contain
    let useLower = confirm("Do you want lowercase letters to be used?");
    let useUpper = confirm("Do you want to upper case letters to be used?");
    let useNumbers = confirm("Do you want numbers to be used?");
    let useSpecialCharacters = confirm("Do you want special characters to be used?");

    //loop through charachter arrays
    if (useLower === true) {
      pwBank = pwBank.concat(lcLetters);
      randomChoice(lcLetters, pwActive);
    }

    if (useUpper === true) {
      pwBank = pwBank.concat(ucLetters);
      randomChoice(ucLetters, pwActive);
    }

    if (useNumbers === true) {
      pwBank = pwBank.concat(pwNumbers);
      randomChoice(pwNumbers, pwActive);
    }

    if (useSpecialCharacters === true) {
      pwBank = pwBank.concat(specialCharacters);
      randomChoice(specialCharacters, pwActive);
    }

    //ensure that user chose at least one character type for their password
    if (useLower === false && useUpper === false && useNumbers === false && useSpecialCharacters === false) {
      alert("Your password must contain at least one optional character type, please try again.");
      return null;
    } else {
      // grab one random letter from each array
      let initialPasswordLength = pwLength - pwActive.length;
      for (let i = 0; i < initialPasswordLength; i++) {
        let randomItem = pwBank[Math.floor(Math.random() * pwBank.length)];
        pwActive.push(`${randomItem}`);
      }
    }
  }

  //convert password array back to string
  return pwActive.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//randomize character choice function
function randomChoice(array, pwActive) {
  let randomItem = array[Math.floor(Math.random() * array.length)];
  pwActive.push(`${randomItem}`);
}

// event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
