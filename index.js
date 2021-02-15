// Packages required for this application
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');

// Function to write profile to html
function toHTML (employee, role) {
    if (role == 'Manager') {
        console.log('This is a manager');
    }
    else {
        console.log('This is not a manager');
    }
}

// Function to add a manager
function addManager () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your Manager's name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their office phone number?',
                name: 'phone',
            },
        ])
        .then((response) => {
            const newManager = new Manager(response.name, response.id, response.email, response.phone);
            const role = newManager.getRole();
            toHTML(newManager, role);
        });
}

// Function to initialize app
function init () {
    console.log('Welcome to the Team Profile Generator!');
    console.log('First, we need some information about your manager.');
    addManager();
}

// Call to initialize app
init();