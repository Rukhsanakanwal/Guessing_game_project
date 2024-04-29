#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer Will generate a random number - Done.
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - done
 
const randomNumber = Math.floor(Math.random()* 6 + 1);
console.log(randomNumber);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");

    }else {
console.log("you guessed wrong number.")
        }