//Prompt user amount of characters and put into constant.
let maxChar = parseInt(prompt("What is the number of characters you want? (Must be between 8-128.)"));

//Sets minimum and maximun number of characters and requires a value to be entered.
while (maxChar<8||maxChar>128||!maxChar){
  alert("Please type in a number between 8-128");
  maxChar = parseInt(prompt("What is the number of characters you want? (Must be between 8-128.)"));
}

//Prompt user for if they want capital letters.
let cap = confirm("Do you want capital letters? (e.g. ABCD) Hit yes to comfirm or cancel for no.");
//Prompt user for if they want lowercase letters. 
let low = confirm("Do you want lowercase letters? (e.g. abcd) Hit yes to comfirm or cancel for no."); 
//Prompt user for if they want numbers.
let num = confirm("Do you want numbers? (e.g. 1234) Hit yes to comfirm or cancel for no.");
//Prompt user for if they want special characters.
let spec = confirm("Do you want special characters? (e.g. !@#$) Hit yes to comfirm or cancel for no."); 

//Forces user to pick at least one character type. 
while (!cap&&!low&&!num&&!spec){
  alert("You MUST pick at least one set of characters.");
  cap = confirm("Do you want capital letters? (e.g. ABCD) Hit yes to comfirm or cancel for no.");
  low = confirm("Do you want lowercase letters? (e.g. abcd) Hit yes to comfirm or cancel for no."); 
  num = confirm("Do you want numbers? (e.g. 1234) Hit yes to comfirm or cancel for no.");
  spec = confirm("Do you want special characters? (e.g. !@#$) Hit yes to comfirm or cancel for no.");
}

//Pushes strings based on decimal values of an ASCII table between two numbers into each array. 
let charArrayFunction = (lowNum, highNum) => {
  let array = [];
  for (let i = lowNum; i <= highNum; i++) {
    let int = String.fromCharCode(i);
    array.push(int);
  }
  return array;
};

//Corresponds numbers to decimal values in ASCII Table for desired strings. 
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

//Selects random number 0-3 for the purposes of selecting a random type of character. 
//While loop is to ensure the random 0-3 recalculates if it picks a variable not being used.
//Selects a random character from arrays and places in its own array.

let generatePassword = (max) => {
  array = [];
  for (let i = 0; i < (max); i++) {   
    let zeroThruThree = (Math.floor(Math.random() * 4));
    while (
      ((!cap)&&(zeroThruThree===0))
      ||
      ((!low)&&(zeroThruThree===1))
      ||
      ((!num)&&(zeroThruThree===2))
      ||
      ((!spec)&&(zeroThruThree===3))
      ){
      zeroThruThree = (Math.floor(Math.random() * 4));
    }
    if ((cap)&&(zeroThruThree===0)){
      let randCap=(Math.floor(Math.random() * capArr.length));
      array.push(capArr[randCap]);
    }
    if ((low)&&(zeroThruThree===1)) {
      let randLow=(Math.floor(Math.random() * lowArr.length));
      array.push(lowArr[randLow]);
    }
    if ((num)&&(zeroThruThree===2)) {
      let randNum=(Math.floor(Math.random() * numArr.length));
      array.push(numArr[randNum]);
    }
    if ((spec)&&(zeroThruThree===3)) {
      let randSpec=(Math.floor(Math.random() * specArr.length));
      array.push(specArr[randSpec]);
    }
  }
  return array;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Added ".join("")" to allow the password to be a single string not seperated by commas. 
function writePassword() {
  var password = generatePassword(maxChar).join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

