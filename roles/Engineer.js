const EmployeeRole = requirer('./Employee');

class EngineerRole extends EmployeeRole {
    constructor(name, id, email) {

        super(name, id, email)
        this.github = github;
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


/// EXTEND OFF OF EMPLOYEE