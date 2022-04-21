// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'what is the name of your screenshot, including file extention?',
        name: 'screenshot',
    },
    {
        type: 'list',
        message: 'Where is the screenshot located?',
        choices: ['/', '/assets/images/', '/images/', 'None'],
        name: 'screenshotdir',
    },
    {
        type: 'input',
        message: 'what is the GitHub repo name of this project?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Enter a short description of your project:',
        name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should I run to install dependencies?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'What command should be run for tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about said project?',
        name: 'whattoknow',
    },
    {
        type: 'input',
        message: 'Who contributed to this repo?',
        name: 'contribution',
    },
])

.then((data) => {
    fs.writeFile("readme.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully written readme.md')
    );
}).catch((err) => {
    if (err) throw err;
});

}

// Function call to initialize app
init();
