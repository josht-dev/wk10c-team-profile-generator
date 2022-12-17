// Engineer Class JS

const Employee = require('Employee');

// Class extends Employee but adds gitHub username, getSchool() and overrides getRole()
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    // Return gitHub username
    getGithub() {
        return this.gitHub;
    }

    // Overrides Employee to return Engineer obj
    getRole() {
        return this;
    }
}