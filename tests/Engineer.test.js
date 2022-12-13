const EngineerRole = require('../roles/Engineer');
const engineerRole = EngineerRole('chris', '32370', 'coloredinink@gmail.com', 'coloredinink');


describe("Engineer Role", () => {
    it('should return input of the constructor of the Engineer Role',() => {
        expect(engineerRole.name).toEqual('chis');
        expect(engineerRole.id).toEqual('32370');
        expect(engineerRole.email).toEqual('coloredinink@gmail.com');
        expect(engineerRole.github).toEqual('coloredinink')
    });    
});

describe("getName() Method Test", () => {
    it('should get the name of the Engineer input',() => {
        expect(engineerRole.getName()).toEqual('chris');
    });
});

describe("getID() Method Test", () => {
    it('should get the id of the Engineer input',() => {
        expect(engineerRole.getId()).toEqual('32370');
    });
});

describe("getEmail() Method Test", () => {
    it('should get email of the Engineer input',() => {
        expect(engineerRole.getEmail()).toEqual('coloredinink@gmail.com');
    });
});

describe("getGithub() Method Test", () => {
    it('should get the github of the Engineer input', () => {
        expect(engineerRole.engineerGithub()).toEqual('coloredinink');
    });
});
