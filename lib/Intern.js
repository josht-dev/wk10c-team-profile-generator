// Intern Class JS

const Employee = require('./Employee');

// Class extends Employee but adds school property, getSchool() and overrides getRole()
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Return intern's school
    getSchool() {
        return this.school;
    }

    // Overrides Employee to return Intern
    getRole() {
        return 'Intern';
    }
}