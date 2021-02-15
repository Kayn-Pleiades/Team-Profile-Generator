// Import the Employee class
const Employee = require('./Employee');

// The Intern class extends on the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // These parts are from Employee
        super(name, id, email);
        // This part is new
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}

// Export for use elsewehere 
module.exports = Intern;