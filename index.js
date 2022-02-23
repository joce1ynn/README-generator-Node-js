// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
  {
    type:"list",
    name:"license",
    message:"Please choose the license:",
    choices:["MIT", "Mozilla Public License 2.0", "The Unlicense"]
  }
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
    writeToFile("./dist/READMEsample.md", answers);
    console.log(answers);
  });
}

// Function call to initialize app
init();
