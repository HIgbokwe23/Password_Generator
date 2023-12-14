// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\', 
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var allCharacters = specialCharacters + numericCharacters + upperCasedCharacters + lowerCasedCharacters
console.log (allCharacters)

// Function to prompt user for password options
function getPasswordOptions() {

passwordLength = prompt('Choose the length of your password (your password must be between 8 and 128 characters long)')
//const passwordLengthNum = (parseInt(passwordLength))
console.log (parseInt(passwordLength))

//while password length <8 and >128 the error prompt must appear
if (parseInt(passwordLength) >= 129) {
alert('your password must be between 8 and 128 characters long, enter your password length')
return
}
  
if (parseInt(passwordLength) <= 7 ) {
alert('your password must be between 8 and 128 characters long, enter your password length')
return
}

  
const specChar = confirm ('Would you like Special Characters?')
//console.log(specChar)
const numChar = confirm ('Would you like numerical Characters?')

const upperCaseChar = confirm ('Would you like Upper Case Characters?')

const lowerCaseChar = confirm ('Would you like Lower Case Characters?')
const passwordOptions = {
  length: passwordLength,
  specChar: specChar,
  numChar: numChar,
  upperCaseChar: upperCaseChar,
  lowerCaseChar: lowerCaseChar,
}
return passwordOptions
}
var passwordOptions = getPasswordOptions();
var password = generatePassword(passwordOptions);
// Function for getting a random element from an array

//based on user input I need to select an element from the appropriate arrays  until the desired password length is met.
//function getRandom() {

//}
// Function to generate password with user input

  function generatePassword(options) {
    let allChars = [];
  
    if (options.specChar) allChars = allChars.concat(specialCharacters);
    if (options.numChar) allChars = allChars.concat(numericCharacters);
    if (options.upperCaseChar) allChars = allChars.concat(upperCasedCharacters);
    if (options.lowerCaseChar) allChars = allChars.concat(lowerCasedCharacters);
  
    let password = "";
    for (let index = 0; index < options.length; index++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return password;
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

  function writePassword() {
    var password = generatePassword(passwordOptions);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);