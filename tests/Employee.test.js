const EmployeeRole = require('../roles/Employee');
const employeeRole = EmployeeRole('brian', '32369', 'mrgreenside@gmail.com');

it('Constructor Values for the Employee function are being tested',() => {
    expect(employeeRole.name).toEqual('brian');
    expect(employeeRole.id).toEqual('32369');
    expect(employeeRole.email).toEqual('mrgreenside@gmail.com');
});

it('getName() method Test',() => {
    expect(employeeRole.getName()).toEqual('brian');
});

it('getId() method Test',() => {
    expect(employeeRole.getId()).toEqual('32369');
});

it('getEmail() method Test',() => {
    expect(employeeRole.getEmail()).toEqual('mrgreenside@gmail.com');
});