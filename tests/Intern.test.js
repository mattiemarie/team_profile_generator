const InternRole = require('../roles/Intern');
const internRole = InternRole('luke', '32371', 'prettyblueeyes@gmail.com', 'annadale');


describe("Intern Role", () => {
    it('should return input of constructor of the Intern Role',() => {
        expect(internRole.name).toEqual('luke');
        expect(internRole.id).toEqual('32371');
        expect(internRole.email).toEqual('prettyblueeyes@gmail.com');
        expect(internRole.school).toEqual('annadale')
    });    
});

describe("getName() Method Test", () => {
    it('should get the name of the Intern input',() => {
        expect(internRole.getName()).toEqual('luke');
    });
});

describe("getID() Method Test", () => {
    it('should get the id of the Intern input',() => {
        expect(internRole.getId()).toEqual('32371');
    });
});

describe("getEmail() Method Test", () => {
    it('should get email of the Intern input',() => {
        expect(internRole.getEmail()).toEqual('prettyblueeyes@gmail.com');
    });
});

describe("getSchool() Method Test", () => {
    it('should get the school of the Intern input', () => {
        expect(internRole.internSchool()).toEqual('annadale');
    });
});
