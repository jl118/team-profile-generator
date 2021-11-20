const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should create an object with name, id, and email", ()=> {
        expect(new Employee("Mike Wasowski", 2319, "mwasowski@gmail.com")).toEqual({ name: 'Mike Wasowski', id: 2319, email: 'mwasowski@gmail.com' });
    });
    it("should be able to call the method getName and get the employee's name", ()=> {
        expect(new Employee("Mike Wasowski", 2319, "mwasowski@gmail.com").getName()).toEqual("Mike Wasowski");
    });
    it("should be able to call getId and get the employee's id", ()=> {
        expect(new Employee("Mike Wasowski", 2319, "mwasowski@gmail.com").getId()).toBe(2319);
    });
    it("should be able to call getEmail and get the employee's email", ()=> {
        expect(new Employee("Mike Wasowski", 2319, "mwasowski@gmail.com").getEmail()).toBe("mwasowski@gmail.com");
    });
    it("should be able to call getRole and get 'Employee'", ()=> {
        expect(new Employee("Mike Wasowski", 2319, "mwasowski@gmail.com").getRole()).toBe("Employee");
    });
});