const ManagerRole = require('../roles/Manager');
const managerRole = ManagerRole('natalie', '32372', 'rebelred@gmail.com', '222');

describe("Manager Role", () => {
    it('should return input of constructor of the Manager Role',() => {
        expect(managerRole.name).toEqual('natalie');
        expect(managerRole.id).toEqual('32372');
        expect(managerRole.email).toEqual('rebelred@gmail.com');
        expect(managerRole.office).toEqual('222')
    });
});

describe("getName() Method Test", () => {
    it('should get the name of the Manager input',() => {
        expect(managerRole.getName()).toEqual('natalie');
    });
});

describe("getID() Method Test", () => {
    it('should get the id of the Manager input',() => {
        expect(managerRole.getId()).toEqual('32372');
    });
});

describe("getEmail() Method Test", () => {
    it('should get the email of the Manager input',() => {
        expect(managerRole.getEmail()).toEqual('rebelred@gmail.com');
    });
});

describe("getOffice() Method Test", () => {
    it('should get the github of the Manager input', () => {
        expect(managerRole.managerOffice()).toEqual('222');
    });
});
