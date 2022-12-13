const EmployeeRole = require('./Employee');

class InternRole extends EmployeeRole {
    constructor(name, id, email, school) {

        super(name, id, email)
        this.school = school;
    };

    internSchool() {
        return this.school
    };

    getRole() {
        return "InternRole"
    };
}


module.exports = InternRole;