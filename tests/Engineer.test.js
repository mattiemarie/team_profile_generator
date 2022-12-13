const EmployeeRole = require('../roles/Employee');

it('Constructor Values for the Employee function are being tested',() => {
    expect(employeeRole.name).toEqual('brian');
    expect(employeeRole.id).toEqual('32369');
    expect(employeeRole.email).toEqual('mrgreenside@gmail.com');
    expect(employeeRole.role).toEqual('manager')
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

it('getRole() method Test', () => {
    expect(employeeRole.getRole()).toEqual('manager')
})