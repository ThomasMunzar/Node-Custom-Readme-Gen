// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// IMPORT THE generateMarkdown function  from generateMarkdown.js (in NODE JS we use ---- require('./generateMarkdown.js')** look at activity 15-16 as example
// WILL use generate markdown to be the mainfunction of this page after importing.

// grader will open this file and do "node index.js"
// 

// TODO: Create an array of questions for user input (what is your username...)
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is your App title?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description about your project and its functionality."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "fullname",
        message: "What is your full name?",
    },
    {
        type: "list",
        name: "license",
        message:"Pick on of the following lisences",
        choices: ["Mozilla", "Apache","Mit","BSD","GNU","None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to this project, please give some guidelines for them to do so.",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide a walkthrough of some tests of this appilcation."
    },
]
   
// this will prompt questions about your github and stuff



// TODO: Create a function to initialize app
function init() {
    //We would insert object of answers in this function
    // Ask the USER QUESTIONS (an array)
    inquirer
        .prompt(
            questions
            /* Pass your questions in here */
        )
        .then((answers) => {
            console.log(answers)
            let markDown = generateMarkdown(answers)
            // Use user feedback for... whatever!!
            //need to save the answers to the questions asked (store them as ONE OBJECT {})
            // Create content from the answers (this will eventually be on the readme.) (invoke generateMarkdown function that we imported.)
            // CALL/ INVOKE writeToFile FUNCTION  
        }).catch((error) => {
            console.log(error);
        });
        generateMarkdown();
        writeToFile(); //Calling write to file Func to create a file for new readme with user input
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(generateMarkdown)
    //NOW we create the README file
}

// Function call to initialize app
init();

// how to call a function that returns something
//var result = generateMarkdown(); ***


// "used npm install to download dependency. Since we only have 1 dependency it only downloaded 1 (inquirer)" // look at package.json for reference