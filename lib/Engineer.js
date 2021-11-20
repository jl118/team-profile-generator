const inquirer = require("inquirer");
// import Employee constructor class
const Employee = require('./Employee');

// extend Employee constructor, adding GitHub link and role
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // returning github
    getGitHub () {
        return this.github;
    }

    // returns Engineer role
    getRole () {
        return 'Engineer';
    }
}


// export 
module.exports = Engineer;