const ManagerRole = require('../roles/Manager');
const managerRole = ManagerRole('natalie', '32372', 'rebelred@gmail.com', '222');

it('Constructor Values for the Employee function are being tested',() => {
    expect(managerRole.name).toEqual('natalie');
    expect(managerRole.id).toEqual('32372');
    expect(managerRole.email).toEqual('rebelred@gmail.com');
    expect(managerRole.office).toEqual('222')
});

it('getName() method Test',() => {
    expect(managerRole.getName()).toEqual('natalie');
});

it('getId() method Test',() => {
    expect(managerRole.getId()).toEqual('32372');
});

it('getEmail() method Test',() => {
    expect(managerRole.getEmail()).toEqual('rebelred@gmail.com');
});

it('getGithub() method Test', () => {
    expect(managerRole.managerOffice()).toEqual('222');
});