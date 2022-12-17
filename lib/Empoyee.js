// Employee Class JS

// Base class for other more specific employee types
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    // Returns Employee obj
    getRole() {
        return this;
    }
}

module.exports = Employee;