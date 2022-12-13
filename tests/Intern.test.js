const InternRole = require('../roles/Intern');
const internRole = InternRole('luke', '32371', 'prettyblueeyes@gmail.com', 'annadale');

it('Constructor Values for the Intern function are being tested',() => {
    expect(internRole.name).toEqual('luke');
    expect(internRole.id).toEqual('32371');
    expect(internRole.email).toEqual('prettyblueeyes@gmail.com');
    expect(internRole.school).toEqual('annadale')
});

it('getName() method Test',() => {
    expect(internRole.getName()).toEqual('luke');
});

it('getId() method Test',() => {
    expect(internRole.getId()).toEqual('32371');
});

it('getEmail() method Test',() => {
    expect(internRole.getEmail()).toEqual('prettyblueeyes@gmail.com');
});

it('getSchool() method Test', () => {
    expect(internRole.internSchool()).toEqual('annadale');
});