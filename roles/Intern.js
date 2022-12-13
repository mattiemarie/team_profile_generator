const EmployeeRole = requirer('./Employee');

class InternRole extends EmployeeRole {
    constructor(name, id, email) {

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