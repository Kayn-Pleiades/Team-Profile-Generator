// The Employee class is the base of all classes in this application. 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getRole() {
        return 'Employee';
    }
}

// Export for use elsewehere 
module.exports = Employee;