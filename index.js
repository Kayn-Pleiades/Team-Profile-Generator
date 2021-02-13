// Packages required for this application
const { log } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');

// Function to initialize app
function init () {
    console.log('Welcome to the Team Profile Generator!');
    console.log('First, we need some information about your manager.');
    addManager();
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
                name: 'ID',
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
            console.log(response);
        });
}

// Call to initialize app
init();