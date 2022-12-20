const Employee = require('./Employee');

// Class extends Employee but adds github username, getGithub() and overrides getRole()
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Return github username
    getGithub() {
        return this.github;
    }

    // Overrides Employee to return Engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;