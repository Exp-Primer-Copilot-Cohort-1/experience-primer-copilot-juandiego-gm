function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        salary: 4000,
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (newSalary) {
            this.salary = newSalary;
        },
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        },
        removeSkill: function (skillToRemove) {
            this.skills = this.skills.filter(function (skill) {
                return skill !== skillToRemove;
            });
        },
        getSkills: function () {
            return this.skills;
        }
    };
    return member;
}