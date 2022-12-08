class InternRole {
    constructor(name, id, school){
        this.name = name;
        this.id = id;
        this.school = school;
    }

internName() {
    return this.name
}

internId() {
    return this.id
}

internSchool() {
    return this.school
}

};

getRole();

module.exports = InternRole;