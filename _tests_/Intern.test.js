const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should create an object with name, id, email, and school", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU")).toEqual({ name: 'Boo', id: 40046, email: 'boo.ger@gmail.com', school: 'MIU' });
    });
    it("should be able to call getName and get the intern's name", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU").getName()).toEqual("Boo");
    });
    it("should be able to call getId and get the intern's id", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU").getId()).toBe(40046);
    });
    it("should be able to call getEmail and get the intern's email", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU").getEmail()).toBe("boo.ger@gmail.com");
    });
    it("should be able to call getSchool and get the intern's school", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU").getSchool()).toBe("MIU");
    });
    it("should be able to call getRole and get 'Intern'", () => {
        expect(new Intern("Boo", 40046, "boo.ger@gmail.com", "MIU").getRole()).toBe("Intern");
    });
});