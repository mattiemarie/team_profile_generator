const inquirer = require('inquirer');

const fs = require ('fs');

// Roles JS Files
const employeeRole = require('./roles/Employee');
const managerRole = require('./roles/Manager');
const engineerRole = require('./roles/Engineer');
const internRole = require('./roles/Intern');

// New Team Members
const newTeamMember = [];


// Which Employee Role will be assigned?
const employeeRole = [
  //Employee Role
  {
    type: 'list',
    name: 'role',
    message: "What is the employee's role?",
    choices:['Manager', 'Engineer', 'Intern'],
    },
];


const managerRole = [
  //Manager Name
  {
    type: 'input',
    name: 'nameManager',
    message: "What is the Employee's name?",
  },
  //Manager ID
  {
    type: 'input',
    name: 'idManager',
    message: "What is the Employee's id number?",
  }, 
  //Manager Email
  {
    type: 'input',
    name: 'emailManager',
    message: "What is the Employee's email?",
  },     
  //Manager Office Number
  {
    type: 'input',
    name: 'officeManager',
    message: "What is the Manager's office number?",
  },
];

const engineerRole = [
  //Engineer Name
  {
    type: 'input',
    name: 'nameEngineer',
    message: "What is the Employee's name?",
  },
  //Engineer ID
  {
    type: 'input',
    name: 'idEngineer',
    message: "What is the Employee's id number?",
  },
  //Engineer Email
  {
    type: 'input',
    name: 'emailEngineer',
    message: "What is the Employee's email?",
  },
  //Engineer Github
  {
    type: 'input',
    name: 'githubEngineer',
    message: "What is the Employee's github?",
  },
];

const internRole = [
  //Intern Name
  {
    type: 'input',
    name: 'nameIntern',
    message: "What is the Employee's name?",
  },
  //Intern ID
  {
    type: 'input',
    name: 'idIntern',
    message: "What is the Employee's id number?",
  },
  //Intern Email
  {
    type: 'input',
    name: 'emailIntern',
    message: "What is the Employee's email?",
  },
  //Intern School
  {
    type: 'input',
    name: 'schoolIntern',
    message: "Where did the Intern go to school?",
  },
];

//An Employee Type is chosen
function employeeType() {
  inquirer.prompt(employeeRole)
  .then(function(choice) {
    if(choice === 'Engineer') {
      engineerChosen();
    } else if(choice === 'Manager') {
      managerChosen();
    } else if (choice === 'Intern') {
      internChosen();
    } else {
      generateTeam();
    }
  });
};

//Manager Role
function managerChosen(){
  inquirer.prompt(managerRole)
  .then(function (answer) {
    const managerRole = new managerRole (
    answer.name
    );
    newTeamMember.push(managerRole);
    employeeType();
  });
};
//Engineer Role

//Intern Role

//Generate HTML
const generateHTML = ({name, role, id, email, office, github, school}) =>
  ``;



generateTeam(
  //THE HTML GENERATOR WILL GO IN HERE
  fs.writeFile()
)