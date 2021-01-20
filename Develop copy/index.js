// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

inquirer.prompt(
    [
        {
            type: 'input',
            message = "What's the project title?",
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'how do you install your app?',
            name
        }
    ]
)
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
