class EngineerRole {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

engineerName() {
    return this.name
}

engineerId() {
    return this.id
}

engineerEmail() {
    return this.email
}

};

getRole();

module.exports = EngineerRole;