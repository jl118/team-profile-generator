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
const newTeamQuestions = [
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
        name: "empType",
        message: "What type of employee are you adding?",
        choices: ["Engineer", "Intern", "No more employees, create my team profile"]
    }
];

// new employee function
function newEmployee() {
    inquirer
    .prompt(employeeType)
    .then((response) => {
        if(response.empType == "Engineer"){
            newEngineer();
        } else if(response.empType == "Intern"){
            newIntern();
        } else {
            console.log(teamArray);
            console.log("Generating Team Profile HTML...")
            generateTeamHTML();
        }
    })
}

// creates a new Engineer
function newEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamArray.push(engineer)
        newEmployee();
    })
};

// creates a new intern
function newIntern() {
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamArray.push(intern)
        newEmployee();
    })
};

// create new Team function
function newTeam() {
    inquirer
    .prompt(newTeamQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamArray.push(manager)
        newEmployee();
    })
}

// fs function
function generateTeamHTML() {
    let body = "";
    teamArray.forEach(element => {
        const card = new generateHTML.Card(element.getName(), element.getRole(), element.getId(), element.getEmail(), Object.entries(element)[3][0], Object.entries(element)[3][1]);
        body = body.concat(card.getBody());
    });
    fs.writeFile(`dist/NewTeam.html`, generateHTML.HTMLhead.concat(body.concat(generateHTML.HTMLfoot)), 
    function(err) {
        if (err) throw err;
        console.log("New Team Profile Generated!");
    })
};

// initialize function
function init() {
    inquirer
    .prompt(initialPrompt)
    .then((response) => {
        if(response.initialChoices === "Add New Team"){
            console.log("-- Creating New Team --");
            newTeam();
        }else{
            console.log("Exiting Team Generator...");
            return;
        }
    })
};

init();

