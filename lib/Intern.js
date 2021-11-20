const inquirer = require("inquirer");
// import Employee constructor class
const Employee = require("./Employee");

// extend Employee constructor, adding school and intern role
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // returning school
    getSchool () {
        return this.school;
    }

    // returns Intern role
    getRole () {
        return "Intern";
    }
}

// export 
module.exports = Intern;