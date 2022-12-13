const EmployeeRole = require('../roles/Employee');
const employeeRole = EmployeeRole('brian', '32369', 'mrgreenside@gmail.com');

test ('Constructor Values for the Employee function are being tested',() => {
    expect(employeeRole.name).toequal('brian');
    expect(employeeRole.id).toequal('32369');
    expect(employeeRole.email).toequal('mrgreenside@gmail.com');
});

test ('getName() method Test',() => {
    expect(employeeRole.getName()).toequal('brian');
});

test ('getId() method Test',() => {
    expect(employeeRole.getId()).toequal('32369');
});

test ('getEmail() method Test',() => {
    expect(employeeRole.getEmail()).toequal('mrgreenside@gmail.com');
});