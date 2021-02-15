const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("getName method", () => {
        it("returns the name", () => {
            const engineer = new Engineer("Risako","7","Risako@Berryz.com","Berryz");
            const name = engineer.getName();
            expect(name).toEqual("Risako");
        });
    });
    describe("getId method", () => {
        it("returns the id", () => {
            const engineer = new Engineer("Risako","7","Risako@Berryz.com","Berryz");
            const id = engineer.getId();
            expect(id).toEqual("7");
        });
    });
    describe("getEmail method", () => {
        it("returns the email", () => {
            const engineer = new Engineer("Risako","7","Risako@Berryz.com","Berryz");
            const email = engineer.getEmail();
            expect(email).toEqual("Risako@Berryz.com");
        });
    });
    describe("getGithub method", () => {
        it("returns the employee's github profile url", () => {
            const engineer = new Engineer("Risako","7","Risako@Berryz.com","Berryz");
            const github = engineer.getGithub();
            expect(github).toEqual("https://github.com/Berryz");
        });
    });
    describe("getRole method", () => {
        it("returns the role", () => {
            const engineer = new Engineer("Risako","7","Risako@Berryz.com","Berryz");
            const role = engineer.getRole();
            expect(role).toEqual("Engineer");
        });
    });
});