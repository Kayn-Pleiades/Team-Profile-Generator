const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("getName method", () => {
        it("returns the name", () => {
            const manager = new Manager("Takahashi Ai","5","Ai@MM.com","(123)-456-789");
            const name = manager.getName();
            expect(name).toEqual("Takahashi Ai");
        });
    });
    describe("getId method", () => {
        it("returns the id", () => {
            const manager = new Manager("Takahashi Ai","5","Ai@MM.com","(123)-456-789");
            const id = manager.getId();
            expect(id).toEqual("5");
        });
    });
    describe("getEmail method", () => {
        it("returns the email", () => {
            const manager = new Manager("Takahashi Ai","5","Ai@MM.com","(123)-456-789");
            const email = manager.getEmail();
            expect(email).toEqual("Ai@MM.com");
        });
    });
    describe("getOfficeNumber method", () => {
        it("returns the office number", () => {
            const manager = new Manager("Takahashi Ai","5","Ai@MM.com","(123)-456-789");
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual("(123)-456-789");
        });
    });
    describe("getRole method", () => {
        it("returns the email", () => {
            const manager = new Manager("Takahashi Ai","5","Ai@MM.com","(123)-456-789");
            const role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
});