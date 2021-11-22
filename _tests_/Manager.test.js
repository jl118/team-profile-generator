const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should create an object with name, id, email, and office number", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440)).toEqual({ name: 'Randall Boggs', id: 51, email: 'number1scarer@gmail.com', office: 440 });
    });
    it("should be able to call getName and get the manager's name", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440).getName()).toEqual("Randall Boggs");
    });
    it("should be able to call getId and get the manager's id", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440).getId()).toBe(51);
    });
    it("should be able to call getEmail and get the manager's email", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440).getEmail()).toBe("number1scarer@gmail.com");
    });
    it("should be able to call getOffice and get the manager's office number", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440).getOffice()).toBe(440);
    });
    it("should be able to call getRole and get 'Manager'", () => {
        expect(new Manager("Randall Boggs", 51, "number1scarer@gmail.com", 440).getRole()).toBe("Manager");
    });
});