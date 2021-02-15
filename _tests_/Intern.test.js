const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getName method", () => {
        it("returns the name", () => {
            const intern = new Intern("Kirara","2004","Kirara@haropuroegg.com","Hello Project Kenshuusei");
            const name = intern.getName();
            expect(name).toEqual("Kirara");
        });
    });
    describe("getId method", () => {
        it("returns the id", () => {
            const intern = new Intern("Kirara","2004","Kirara@haropuroegg.com","Hello Project Kenshuusei");
            const id = intern.getId();
            expect(id).toEqual("2004");
        });
    });
    describe("getEmail method", () => {
        it("returns the email", () => {
            const intern = new Intern("Kirara","2004","Kirara@haropuroegg.com","Hello Project Kenshuusei");
            const email = intern.getEmail();
            expect(email).toEqual("Kirara@haropuroegg.com");
        });
    });
    describe("getSchool method", () => {
        it("returns the intern's school", () => {
            const intern = new Intern("Kirara","2004","Kirara@haropuroegg.com","Hello Project Kenshuusei");
            const school = intern.getSchool();
            expect(school).toEqual("Hello Project Kenshuusei");
        });
    });
    describe("getRole method", () => {
        it("returns the role", () => {
            const intern = new Intern("Kirara","2004","Kirara@haropuroegg.com","Hello Project Kenshuusei");
            const role = intern.getRole();
            expect(role).toEqual("Intern");
        });
    });
});