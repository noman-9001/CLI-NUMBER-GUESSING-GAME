#! /usr/bin/env node
import inquirer from "inquirer"

// 1) computer will generate a random number -Done
 
// 2) user input f0r guessing number - Done

// 30 compare user input with computer generated number and show result

console.log("\n\tWellcom to NomanQureshi - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your number(Number Limit from 1 to 10):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! you guess a correct number");
}
else{
    console.log("sorry, you guess a wrong number");
}
