const fs = require("fs");
const inquirer = require("inquirer");



const questions = [
  {
    type: "input",
    name: "title",
    message: "What would you like to title your project?"
  }
  {
    type: "input",
    name: "dscription",
    message: "Write a short description of your project"
  }
];

function writeToFile(fileName, data) {
}

function init() {
  inquirer.prompt(questions);
}

init();
