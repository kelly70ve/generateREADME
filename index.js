const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub user name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "title",
    message: "What would you like to title your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description for your project"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
  },
  {
    type: "input",
    name: "usage",
    message: "What can your project be used for?"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "MIT",
      "Boost Software 1.0",
      "The Unlicense"
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "What guidelines do you have for contributors (Contributor Covenant is the industry standard)?"
  },
  {
    type: "input",
    name: "tests",
    message: "What tests should be ran on your project?"
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function init() {
  inquirer.prompt(questions).then(data => {
    writeToFile("README.md", generateMarkdown(data))
    });
}

init();
