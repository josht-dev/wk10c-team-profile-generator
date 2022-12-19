const Intern = require('../lib/Intern');

// Testing the Intern class
describe('Intern class', () => {
    // Test the getName() method
    describe('getName method', () => {
        it('returns intern name', () => {
            const intern = new Intern('John', 42, 'john@gmail.com', 'Denver University');
            expect(intern.getName()).toBe('John');
        });
    });

    // Test the getEmail() method
    describe('getEmail method', () => {
        it('returns intern email', () => {
            const intern = new Intern('John', 42, 'john@gmail.com', 'Denver University');
            expect(intern.getEmail()).toBe('john@gmail.com');
        });
    });

    // Test the getSchool() method
    describe('getSchool method', () => {
        it('returns intern school', () => {
            const intern = new Intern('John', 42, 'john@gmail.com', 'Denver University');
            expect(intern.getSchool()).toBe('Denver University');
        });
    });

    // Test the getRole() method
    describe('getRole method',() => {
        it('returns intern role', () => {
            const intern = new Intern('John', 42, 'john@gmail.com', 'Denver University');
            expect(intern.getRole()).toBe('Intern');
        });
    });
});