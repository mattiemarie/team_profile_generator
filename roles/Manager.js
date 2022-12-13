const EmployeeRole = require('./Employee')

class ManagerRole extends EmployeeRole {
    constructor(name, id, email, office) {

        super(name, id, email)
        this.office = office;
    };

    managerOffice() {
        return this.office
    };

    getRole() {
        return "ManagerRole"
    };
}


module.exports = ManagerRole;