// external packages and dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// page generator
const generateHTML = require('./src/generateHTML');

// team array
const teamArray = [];

// initial questions array
const initialPrompt = [
    {
        type: "list",
        name: "initialChoices",
        choices: [
            "Add New Team",
            "Exit"
        ]
    }
];

// new team array
const newTeam = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's Email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
    }
];

// engineer questions array
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?"
    }
];

// intern questions array
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the Intern's University?",
    }
];

// employee type array
const employeeType = [
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee are you adding?",
        choices: ["Engineer", "Intern", "No More"]
    }
];

// new employee function
function newEmployee(){
    inquirer
    .prompt(employeeType)
    .then((response) => {
        if(response.employeeType == "Engineer"){
            newEngineer();
        } else if(response.employeeType == "Intern"){
            newIntern();
        } else {
            generateTeam();
        }
    })
}

// creates a new Engineer
function newEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamArray.push(engineer)
        newEmployee();
    })
};

// creates a new intern
function newIntern(){
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamArray.push(intern)
        newEmployee();
    })
};

// TODO: create newTeam function

// TODO: create fs function

// initialize function
function init() {
    inquirer
    .prompt(initialPrompt)
    .then((response) => {
        if(response.initialChoices == "Add New Team"){
            newTeam();
        }else{
            return;
        }
    })
};

// TODO: add init();

