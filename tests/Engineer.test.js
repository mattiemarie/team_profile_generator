const EngineerRole = require('../roles/Engineer');
const engineerRole = EngineerRole('chris', '32370', 'coloredinink@gmail.com', 'coloredinink');

it('Constructor Values for the Employee function are being tested',() => {
    expect(engineerRole.name).toEqual('chis');
    expect(engineerRole.id).toEqual('32370');
    expect(engineerRole.email).toEqual('coloredinink@gmail.com');
    expect(engineerRole.github).toEqual('coloredinink')
});

it('getName() method Test',() => {
    expect(engineerRole.getName()).toEqual('chris');
});

it('getId() method Test',() => {
    expect(engineerRole.getId()).toEqual('32370');
});

it('getEmail() method Test',() => {
    expect(engineerRole.getEmail()).toEqual('coloredinink');
});

it('getGithub() method Test', () => {
    expect(engineerRole.getGithub()).toEqual('coloredinink');
});