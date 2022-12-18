// *****Load Modules*****
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// *****DOM Variables and Buttons*****




// *****Global Variables*****
const myTeam = [];




// *****Global Functions*****
const globalFunc = {



};

// Function to initialize the application
function init() {
    console.log('Welcome to your team profile generator!');

    // Prompt user for manager data
    console.log("Enter the team manager's information.");
    inquirer
        .prompt([
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
                message: "Enter the employee ID: ",
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
        ])
        .then((response) => {
            myTeam.push(response);
            myTeam[0].title = 'manager';
            console.log(myTeam);
        });
    //

    // Loop though prompts for engineers and interns


}



// *****Code Ran at Load*****

// Initialize the applicaion
init();
