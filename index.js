// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// the title of my project and
// sections entitled Description,
// Table of Contents,
// Installation,
// Usage,
// License,
// Contributing,
// Tests,
// and Questions

const questions = [
  // personal info
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
  // project info
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter your project installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter your project contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("READMEsample.md", answers);
    console.log(answers);
  });
}

// Function call to initialize app
init();


// choose a license for my application from a list of options
// a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// enter my GitHub username
// added to the section of the README entitled Questions, with a link to my GitHub profile

// enter my email address
// added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//click on the links in the Table of Contents
//I am taken to the corresponding section of the README
