
//Array of special characters for random selection into password
var specialCharacters = ["\\", "<", ">", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "-", "{", "}", "[", "]", "~", ".", "_", "/"];

//Array of numbers for random selection into password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Array of lowercase alphabet for random selection into password
var lowerCasedCharachters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array of uppercase alphabet for random selection into password
var upperCasedCharacters= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt('How many characters would you like your password to contain?'));

//Conditional statement to validate length is a number.  
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
    }

  //Condition verify minimum of 8 characters long.
    if (length < 8) {
      alert('Password length must be at least 8 charaters');
      return;
    }

//Condition to check to see if password is a max of 128 charachters long.
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

//Variable to store boolean regarding the inclusion of special characters.
  var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');

//Variable to store boolean regarding the inclusion of numeric charachters.
  var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');

//Variable to store boolean regarding the inclusion of lowercase charachters.
  var hasLowerCasedCharacters = confirm ('Click OK to confirm including lowercase characters.');

//Variable to store boolean regarding the inclusion of uppercase charachters.
  var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');

//Conditional statement to check if user does not include any types of characters.  Password generator ends if all four variables evaluate to false.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUppercasedCharacters === false
    ) {

    alert('Must select at least one character type');
    return;
  }

  //Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
      return passwordOptions;
    }

//Function for getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

  //Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    //Variable to store password as it is being concantenated
    var result = [];

    // a (local var) possilbeCharacters; any []include in password
    var possibleCharacters = [];

    //Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharachters = [];

    //Conditional statement that adds array of special characters into array of possible charachers based on user input
    //Push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharachters.push(getRandom(specialCharacters));
    }

    //Conditional statement that adds array of numeric characters into array of possible characters based on user input
    //Push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharachters.push(getRandom(numericCharacters));
    }

    //Conditional statement that adds array of lower cased characters into array of possible characters based on user input
    //Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharachters);
      guaranteedCharachters.push(getRandom(lowerCasedCharachters));
    }
      
    //Conditional statement that adds array of lower cased characters into array of possible characters based on user input
    //Push new random lower-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharachters.push(getRandom(upperCasedCharacters));
    }
      
    //For loop to iterate over the password length from the options object, selecting random indicies from the array of possible characters and concantenate
    for (var i = 0; i < options.length; i++) {
      var possibleCharacters = getRandom(possibleCharacters);

      result.push(possibleCharacters);
    }

    //Mix in at least one of each guaranteed charachter in the result
    for (var i = 0; i < guaranteedCharachters.length; i++) {
      result[i] = guaranteedCharachters[i];
    }
      //Transform the result into a string and pass into writePassword
      return result.join('');
} 

  //Get references to the #generate element
var generateBtn = document.querySelector('#generate');

  //Write password to #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;      
   
}
    //Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


