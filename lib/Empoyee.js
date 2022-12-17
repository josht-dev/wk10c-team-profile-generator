// Employee Class JS

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

    // Returns Employee
    getRole() {
        return this;
    }
}

module.exports = Employee;