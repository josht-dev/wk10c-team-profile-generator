const Employee = require('../lib/Employee');

// Testing the Employee class
describe('Employee class', () => {
    // Test the getName() method
    describe('getName method', () => {
        it('returns employee name', () => {
            const employee = new Employee('John', 42, 'john@gmail.com');
            expect(employee.getName()).toBe('John');
        });
    });

    // Test the getEmail() method
    describe('getEmail method', () => {
        it('returns employee email', () => {
            const employee = new Employee('John', 42, 'john@gmail.com');
            expect(employee.getEmail()).toBe('john@gmail.com');
        });
    });

    // Test the getRole() method
    describe('getRole method',() => {
        it('returns employee role', () => {
            const employee = new Employee('John', 42, 'john@gmail.com');
            expect(employee.getRole()).toBe('Employee');
        });
    });
});