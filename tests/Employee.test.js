const EmployeeRole = require('../roles/Employee');
const employeeRole = EmployeeRole('brian', '32369', 'mrgreenside@gmail.com');

describe("Employee Role", () => {
    it('should return input of constructor of the Employee Role',() => {
        expect(employeeRole.name).toEqual('brian');
        expect(employeeRole.id).toEqual('32369');
        expect(employeeRole.email).toEqual('mrgreenside@gmail.com');
    });
});

describe("getName() Method Test", () => {
    it('should get the name of the Employee input',() => {
        expect(employeeRole.getName()).toEqual('brian');
    });
});

describe("getID() Method Test", () => {
    it('should get the id of the Employee input',() => {
        expect(employeeRole.getId()).toEqual('32369');
    });
});

describe("getEmail() Method Test", () => {
    it('should get the email of the Employee Input',() => {
        expect(employeeRole.getEmail()).toEqual('mrgreenside@gmail.com');
    }); 
});
