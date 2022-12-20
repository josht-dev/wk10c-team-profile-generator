// *****Load Modules*****
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Html = require('./src/Html');
const { css, reset} = require('./src/Css');

// *****DOM Variables and Buttons*****

// *****Global Variables*****
const myTeam = [];
const managerQuestions = [
    {
        type: 'input',
        message: "Enter the team manager's name: ",
        name: 'name',
        validate: function(name) {
            // User must enter a name
            return (name) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the manager's employee ID: ",
        name: 'id',
        validate: function(id) {
            // User must enter an id
            return (id) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the manager's email address: ",
        name: 'email',
        validate: function(email) {
            // Use regex to validate a proper email
            const validation = 
                new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/, 'gm');
            //
            return validation.test(email);
        }
    },
    {
        type: 'input',
        message: "Enter the manager's office number: ",
        name: 'officeNum',
        validate: function(officeNum) {
            // User must enter a number
            return (!isNaN(officeNum)) ? true : false;
        }
    }
];
const teamQuestions = [
    {
        type: 'input',
        message: "Enter the engineer's name: ",
        name: 'name',
        when: function(answer) {
            return (answer.title === 'engineer') ? true : false;
        },
        validate: function(name) {
            // User must enter a name
            return (name) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's employee ID: ",
        name: 'id',
        when: function(answer) {
            return (answer.title === 'engineer') ? true : false;
        },
        validate: function(id) {
            // User must enter an id
            return (id) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the engineers's email address: ",
        name: 'email',
        when: function(answer) {
            return (answer.title === 'engineer') ? true : false;
        },
        validate: function(email) {
            // Use regex to validate a proper email
            const validation = 
                new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/, 'gm');
            //
            return validation.test(email);
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's GitHub username: ",
        name: 'githubUser',
        when: function(answer) {
            return (answer.title === 'engineer') ? true : false;
        },
        validate: function(githubUser) {
            // User must enter a name
            return (githubUser) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the intern's name: ",
        name: 'name',
        when: function(answer) {
            return (answer.title === 'intern') ? true : false;
        },
        validate: function(name) {
            // User must enter a name
            return (name) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the intern's employee ID: ",
        name: 'id',
        when: function(answer) {
            return (answer.title === 'intern') ? true : false;
        },
        validate: function(id) {
            // User must enter an id
            return (id) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter the intern's email address: ",
        name: 'email',
        when: function(answer) {
            return (answer.title === 'intern') ? true : false;
        },
        validate: function(email) {
            // Use regex to validate a proper email
            const validation = 
                new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/, 'gm');
            //
            return validation.test(email);
        }
    },
    {
        type: 'input',
        message: "Enter the intern's school: ",
        name: 'school',
        when: function(answer) {
            return (answer.title === 'intern') ? true : false;
        },
        validate: function(school) {
            // User must enter a name
            return (school) ? true : false;
        }
    }
];

// *****Global Functions*****
const globalFunc = {
    // Function to initialize the application
    init: function() {
        console.log('Welcome to your team profile generator!');

        // Start prompts to add team data
        globalFunc.addManager();

    },
    // Prompt user for team manager data
    addManager: async function() {
        await inquirer.prompt(managerQuestions).then(res => {
            // Add team manager data to myTeam array
            myTeam.push(new Manager(
                res.name,
                res.id,
                res.email,
                res.officeNum
            ));
            // Call menu to add team members
            this.menu();
        });
    },
    // Add team member menu
    menu: async function() {
        await inquirer.prompt([{
            type: 'list',
            message: 'Build your team by adding a team member: ',
            name: 'title',
            choices: ['Engineer', 'Intern', 'Finished'],
            default: 'Engineer',
            // TODO - Add validation that at least 1 team member has been added
        }])
        .then(response => {
            // Check if user is finished building their team
            if (response.title !== 'Finished') {
                // Call the prompts for new team member info
                this.addMember(response.title);
                return;
            } else {
                console.log('Now building team profile page...');
                // Generate and output the html/css files
                this.generateFiles();
                return;
            }
        });
    },
    // Prompt user for new team member data
    addMember: async function(title) {
        await inquirer.prompt(teamQuestions, {'title': title.toLowerCase()}).then(res => {
            // Add team member data to myTeam array
            switch (res.title) {
                case 'engineer':
                    myTeam.push(new Engineer(
                        res.name,
                        res.id, 
                        res.email,
                        res.githubUser
                    ));
                    break;
                case 'intern':
                    myTeam.push(new Intern(
                        res.name,
                        res.id, 
                        res.email,
                        res.school
                    ));
                    break;
                default:
                    console.error('ERROR: Something went wrong!');
            }
            // Recall the menu prompt
            this.menu();
            return;
        })
    },
    // Generate html, css, and reset files
    generateFiles: function() {
        // Variables to hold file contents
        const htmlPage = new Html(
            myTeam[0],
            myTeam.filter((member) => {return member.getRole() === 'Engineer';}),
            myTeam.filter((member) => {return member.getRole() === 'Intern';})
        );
        const resetStyling = reset;
        const styling = css;

        // Save the html and styling to files in dist folder
        fs.writeFile('./dist/index.html', htmlPage.getHtmlSkeleton(), (err) => {
            err ? console.error(err) : console.log('Page created! Saved to ./dist/index.html.');
        });
        fs.writeFile('./dist/reset.css', resetStyling, (err) => {
            err ? console.error(err) : console.log('Browser style equalized! Saved to ./dist/reset.css.');
        });
        fs.writeFile('./dist/style.css', styling, (err) => {
            err ? console.error(err) : console.log('Page styled! Saved to ./dist/style.css.');
        });
    }
};

// *****Code Ran at Load*****

// Initialize the application
globalFunc.init();
