"use strict";
console.log("proof of life, so that know js is connected up.");

// comment in javascript
/**
 * multi-line comment
 * keep going
 * like this
 *
 */
//get some input from our user
// prompt is a thing we call a method 'way to do something'
//expressions end with semicolon
//when we use the key word let, javascript is going to create a space in memory to store the response.
//      = assignment operator
//     the prompt is getting assigned to the userName variable.

let whatcolor = prompt("Do you like red or blue?");
console.log("what color: ", whatcolor);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);
if (whatcolor === 'red') {
  greeting = "You're cool I guess";
} else if (whatcolor === 'blue') {
  greeting = "Oh yeah, that's the best color!";
}

//process that information given to us from the user
//if else conditional and 
// if(condition is true or false){
//     do this
// } else if(condition is true or false){
//     do this
// } else if(condition is true or false){
//   do this
// }else {
// do this last one
// }
//conditional logic

let greeting;
console.log("Cubs or Cardinals?", baseBallTeam);
if (baseBallTeam === 'Cardinals') {
  greeting = "Right on!";
} else if (baseBallTeam === 'Cubs') {
  greeting = "That's sad...";
}

console.log("Welcome, and ", greeting);

document.write("Hello " + userName + " " + greeting);