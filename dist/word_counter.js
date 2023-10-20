#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
]);
const word = answers.Sentence.trim().split("");
console.log(`Your Sentence word cont is ${word.length}`);
