const EmployeeRole = requirer('./Employee');

class EngineerRole extends EmployeeRole {
    constructor(name, id, email) {

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