const Manager = require('../lib/Manager');

// Testing the Manager class
describe('Manager class', () => {
    // Test the getName() method
    describe('getName method', () => {
        it('returns manager name', () => {
            const manager = new Manager('John', 42, 'john@gmail.com', '214');
            expect(manager.getName()).toBe('John');
        });
    });

    // Test the getEmail() method
    describe('getEmail method', () => {
        it('returns manager email', () => {
            const manager = new Manager('John', 42, 'john@gmail.com', '214');
            expect(manager.getEmail()).toBe('john@gmail.com');
        });
    });

    // Test the getRole() method
    describe('getRole method',() => {
        it('returns manager role', () => {
            const manager = new Manager('John', 42, 'john@gmail.com', '214');
            expect(manager.getRole()).toBe('Manager');
        });
    });
});