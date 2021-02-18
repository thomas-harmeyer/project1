$(document).ready(() => {
    addFunctionToButton("student");
    addFunctionToButton("faculty");
    addFunctionToButton("staff");
    functionToAddToButton("student");
    console.log("loaded");
});

function resetInputFields() {
    $(".student, .faculty, .staff").hide();
    $("#studentToAdd, #facultyToAdd, #staffToAdd").removeClass("btn-primary");
    $("#studentToAdd, #facultyToAdd, #staffToAdd").addClass("btn-secondary");
}

function addFunctionToButton(type) {
    $("#" + type + "ToAdd").click(() => {
        functionToAddToButton(type);
    });
}

function functionToAddToButton(type) {
    resetInputFields();
    $("." + type + "").show();
    $("#" + type + "ToAdd").removeClass("btn-secondary");
    $("#" + type + "ToAdd").addClass("btn-primary");
}
class Student {
    constructor(name, id, gpa, creditHours) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
        this.creditHours = creditHours;
    }
}
class Faculty {
    constructor(name, id, department, rank) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.rank = rank;
    }
}
class Staff {
    constructor(name, id, department, status) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.status = status;
    }
}

const availableDepartments = ["mathematics", "engineering", "english"];
const availableRanks = ["professor", "adjunct"];
const availableStatus = ["part time", "full time"];