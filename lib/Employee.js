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

    // Returns Employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;