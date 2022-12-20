const Employee = require('./Employee');

// Class extends Employee but adds gitHub username, getGithub() and overrides getRole()
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.gitHub = github;
    }

    // Return gitHub username
    getGithub() {
        return this.github;
    }

    // Overrides Employee to return Engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;