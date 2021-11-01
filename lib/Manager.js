// import Employee constructor class
const Employee = require('./Employee');

// extend Employee constructor, adding office number
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    // returning office number
    getOfficeNumber () {
        return this.officeNumber;
    }

    // returns Engineer role
    getRole () {
        return 'Manager';
    }
}

// export 
module.exports = Manager;