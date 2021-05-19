// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt user amount of characters and put into constant.
const maxChar = parseInt(prompt("What is the number of characters you want?")); 
//prompt user for if they want numbers.
const num = confirm("Do you want numbers? (e.g. 1234) Hit yes to comfirm or cancel for no.");
//prompt user for if they want special characters.
const spec = confirm("Do you want special characters? (e.g. !@#$) Hit yes to comfirm or cancel for no."); 
//prompt user for if they want capital letters.
const cap = confirm("Do you want capital letters? (e.g. ABCD) Hit yes to comfirm or cancel for no.");
//prompt user for if they want lowercase letters. 
const low = confirm("Do you want lowercase letters? (e.g. abcd) Hit yes to comfirm or cancel for no.");
//then create the list of chosen character types

//Pushes strings based on decimal values of an ASCII table between two numbers into each array. 
let charArrayFunction = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    let int = String.fromCharCode(i);
    array.push(int);
  }
  return array;
};

//Corresponding numbers to decimal values in ASCII Table for desired strings. 
const capArr = charArrayFunction(65, 90);
const lowArr = charArrayFunction(97, 122);
const numArr = charArrayFunction(48, 57);
const specArr = charArrayFunction(33, 47)
                    .concat(charArrayFunction(58, 64))
                    .concat(charArrayFunction(91, 96))
                    .concat(charArrayFunction(123, 126));

console.log(capArr);
console.log(lowArr);
console.log(numArr);
console.log(specArr);


//roll a number 0 - maximum number of character types
//choose an array with that number
//then pick a random character from the array
//then push that character to the new array

//move to the next character until the password maximum is met
//alert to screen with password