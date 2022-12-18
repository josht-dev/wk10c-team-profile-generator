// Manager Class JS
const Employee = require('./Employee');

// Class extends Employee but adds officeNumber and overrides getRole()
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Overrides Employee to return Manager
    getRole() {
        return Manager;
    }
}