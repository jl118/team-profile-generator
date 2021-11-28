const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should create an object with name, id, email, and github", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully")).toEqual({ name: 'James P. Sullivan', id: 193, email: 'sullen.berger@gmail.com', github: 'sully' });
    });
    it("should be able to call getName and get the engineer's name", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully").getName()).toEqual("James P. Sullivan");
    });
    it("should be able to call getId and get the engineer's id", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully").getId()).toBe(193);
    });
    it("should be able to call getEmail and get the engineer's email", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully").getEmail()).toBe("sullen.berger@gmail.com");
    });
    it("should be able to call getGitHub and get the engineer's github", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully").getGitHub()).toBe("sully");
    });
    it("should be able to call getRole and get 'Engineer'", ()=> {
        expect(new Engineer("James P. Sullivan", 193, "sullen.berger@gmail.com", "sully").getRole()).toBe("Engineer");
    });
});