const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should create an object with name, id, email, and github", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger")).toEqual({ name: 'Sully Sullenberger', id: 193, email: 'sullen.berger@gmail.com', github: 'sberger' });
    });
    it("should be able to call getName and get the engineer's name", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger").getName()).toEqual("Sully Sullenberger");
    });
    it("should be able to call getId and get the engineer's id", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger").getId()).toBe(193);
    });
    it("should be able to call getEmail and get the engineer's email", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger").getEmail()).toBe("sullen.berger@gmail.com");
    });
    it("should be able to call getGithub and get the engineer's github", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger").getGithub()).toBe("sberger");
    });
    it("should be able to call getRole and get 'Engineer'", ()=> {
        expect(new Engineer("Sully Sullenberger", 193, "sullen.berger@gmail.com", "sberger").getRole()).toBe("Engineer");
    });
});