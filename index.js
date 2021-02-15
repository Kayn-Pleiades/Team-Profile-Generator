// Consts
// Packages required for this application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

// File we are writing to
const fileName = './dist/index.html';

// HTML templates
const htmlStart = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>

    <!-- CSS -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <!-- Custom Styling-->
    <link rel="stylesheet" href="../assets/css/style.css">
    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap">
</head>

<body>
    <header class="navbar fixed-top">
        <div class="container-fluid">
            <span class="navbar-brand mx-auto">Meet The Team!</span>
        </div>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row mt-5 pt-5 justify-content-center">
                <div class="col-6">
                    <div class="card-columns">
`;
const htmlEnd = `
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Javascript -->
    <!-- Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>
`;

// Functions
// Menu
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'menu',
                choices: ['Add an engineer', 'Add an intern', 'I am done']
            },
        ])
        .then((response) => {
            if (response.menu == 'Add an engineer') {
                addEngineer();
            }
            else if (response.menu == 'Add an intern') {
                addIntern();
            }
            else if (response.menu == 'I am done') {
                endPage();
            }
        });
}

// Function to add card
function endPage() {
    fs.appendFile(fileName, htmlEnd, err => {
        if (err) {
            return console.error(err);
        }
        else {
            return console.log('Thank you! Your page is now ready!');
        }
    });
}

// Function to add card
function addCard(code) {
    fs.appendFile(fileName, code, err => {
        if (err) {
            return console.error(err);
        }
        else {
            menu();
        }
    });
}

// Function to create the cards
function makeCard(name, id, email, role, info) {
    const card = `
    <div class="card mt-5">
        <div class="card-body">
            <h5 class="card-title text-center">${name}</h5>
            <h6 class="text-center">${role}</h6>
            <ul class="list-group">
                <li class="list-group-item"><i class="bi bi-envelope-fill"></i><a href="mailto:${email}"> ${email}</a></li>
                <li class="list-group-item">${info}</li>
            </ul>
            <br>
            <h5 class="text-right">#${id}</h5>
        </div>
    </div>
    `;
    addCard(card);
}

// Function to parse out the employee's data
function organizeData(employee, role) {
    // Consts that apply to all employees
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();

    if (role == 'Manager') {
        // Const that applies just to manager
        const phone = employee.getOfficeNumber();

        // Const that is needed for printing to html
        const info = `<i class="bi bi-telephone-fill"></i> ${phone}`;

        // Function to print to card
        makeCard(name, id, email, role, info);
    }
    else if (role == 'Engineer') {
        // Const that applies just to engineer
        const github = employee.getGithub();

        // Const that is needed for printing to html
        const info = `<i class="bi bi-github"></i><a href="https://github.com/${github}" target="_blank"> ${github}</a>`;

        // Function to print to card
        makeCard(name, id, email, role, info);
    }
    else if (role == 'Intern') {
        // Const that applies just to intern
        const school = employee.getSchool();

        // Const that is needed for printing to html
        const info = `<i class="bi bi-door-open-fill"></i> ${school}`;

        // Function to print to card
        makeCard(name, id, email, role, info);
    }
    else {
        console.log('This is not an employee');
    }
}

// Function to add a manager
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your Intern's name?`,
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
                message: 'What school do they go to?',
                name: 'school',
            },
        ])
        .then((response) => {
            const newIntern = new Intern(response.name, response.id, response.email, response.school);
            const role = newIntern.getRole();
            organizeData(newIntern, role);
        });
}

// Function to add a manager
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your Engineer's name?`,
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
                message: 'What is their github username?',
                name: 'github',
            },
        ])
        .then((response) => {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
            const role = newEngineer.getRole();
            organizeData(newEngineer, role);
        });
}

// Function to add a manager
function addManager() {
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
            organizeData(newManager, role);
        });
}

// Clear html file and put in first part of code
function startPage() {
    // Clear and write the first part of the page
    fs.writeFile(fileName, htmlStart, err => {
        if (err) {
            return console.error(err);
        }
    });
}

// Function to initialize app
function init() {
    console.log('Welcome to the Team Profile Generator!');
    startPage();
    console.log('First, we need some information about your manager.');
    addManager();
}

// Call to initialize app
init();