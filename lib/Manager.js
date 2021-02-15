// Import the Employee class
const Employee = require('./Employee');

// The Manager class extends on the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // These parts are from Employee
        super(name, id, email);
        // This part is new
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return 'Manager';
    }
}

// Export for use elsewehere 
module.exports = Manager;