const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns the name", () => {
            const employee = new Employee("Mitsui","321","Mitsui@MM.com");
            const name = employee.getName();
            expect(name).toEqual("Mitsui");
        });
    });
    describe("getId method", () => {
        it("returns the id", () => {
            const employee = new Employee("Mitsui","321","Mitsui@MM.com");
            const id = employee.getId();
            expect(id).toEqual("321");
        });
    });
    describe("getEmail method", () => {
        it("returns the email", () => {
            const employee = new Employee("Mitsui","321","Mitsui@MM.com");
            const email = employee.getEmail();
            expect(email).toEqual("Mitsui@MM.com");
        });
    });
    describe("getRole method", () => {
        it("returns the role", () => {
            const employee = new Employee("Mitsui","321","Mitsui@MM.com");
            const role = employee.getRole();
            expect(role).toEqual("Employee");
        });
    });
});