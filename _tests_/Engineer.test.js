const Engineer = require('../lib/Engineer');

// Testing the Engineer class
describe('Engineer class', () => {
    // Test the getName() method
    describe('getName method', () => {
        it('returns engineer name', () => {
            const engineer = new Engineer('John', 42, 'john@gmail.com', 'john-dev');
            expect(engineer.getName()).toBe('John');
        });
    });

    // Test the getEmail() method
    describe('getEmail method', () => {
        it('returns engineer email', () => {
            const engineer = new Engineer('John', 42, 'john@gmail.com', 'john-dev');
            expect(engineer.getEmail()).toBe('john@gmail.com');
        });
    });

    // Test the getGithub() method
    describe('getGithub method', () => {
        it('returns engineer github username', () => {
            const engineer = new Engineer('John', 42, 'john@gmail.com', 'john-dev');
            expect(engineer.getGithub()).toBe('john-dev');
        });
    });

    // Test the getRole() method
    describe('getRole method',() => {
        it('returns engineer role', () => {
            const engineer = new Engineer('John', 42, 'john@gmail.com', 'john-dev');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});