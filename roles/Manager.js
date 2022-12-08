class ManagerRole {
    constructor(name, id, office){
        this.name = name;
        this.id = id;
        this.office = office;
    }

managerName() {
    return this.name
}

managerId() {
    return this.id
}

managerOffice() {
    return this.office
}

};

getRole();

module.exports = ManagerRole;