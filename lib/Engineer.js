// Import the Employee class
const Employee = require('./Employee');

// The Engineer class extends on the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // These parts are from Employee
        super(name, id, email);
        // This part is new
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

// Export for use elsewehere 
module.exports = Engineer;