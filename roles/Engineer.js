const EmployeeRole = require('./Employee');

class EngineerRole extends EmployeeRole {
    constructor(name, id, email, github) {

        super(name, id, email)
        this.github = github;
    };

    engineerGithub() {
        return this.github
    };

    getRole() {
        return "EngineerRole"
    };
}


module.exports = EngineerRole;