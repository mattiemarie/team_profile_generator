const inquirer = require('inquirer');

const fs = require ('fs');

// Roles JS Files
const ManagerRole = require('./roles/Manager');
const EngineerRole = require('./roles/Engineer');
const InternRole = require('./roles/Intern');

const generateHTML = require('./generated-html');

// New Team Members
const newTeamMember = [];


// Begin Team by Inputing Manager Information
const managerRole = () => {
  return inquirer.prompt ([

  //Manager Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Manager's name?",
  },
  //Manager ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's id number?",
  }, 
  //Manager Email
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email?",
  },     
  //Manager Office Number
  {
    type: 'input',
    name: 'office',
    message: "What is the Manager's office number?",
  },
  ])
  .then(function (input) {
    const managerRole = new ManagerRole (
    input.name,
    input.id,
    input.email,
    input.office
    );
    newTeamMember.push(managerRole);
    employeeType();
  
  });
};

// Which Employee Role will be assigned next?
const employeeType = () => {
  return inquirer.prompt ([

  // Manager Chooses Employee Role
  {
    type: 'list',
    name: 'role',
    message: "What is the employee's role?",
    choices:['Engineer', 'Intern', 'Team Built'],
    }
  ])

  // Manager's Choice will prompt certain employee questions
  .then(managerChoice => {
      if (managerChoice.list === 'Manager') {
        return engineerRole();
      } if (managerChoice.list === 'Intern') {
        return internRole();
      } else  {
        return teamBuilt();
      }
  });
};

// Manager has chosen an Engineer
const engineerRole = () => {
  return inquirer.prompt ([
  
    //Engineer Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Engineer's name?",
  },
  //Engineer ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Engineer's id number?",
  },
  //Engineer Email
  {
    type: 'input',
    name: 'email',
    message: "What is the Engineer's email?",
  },
  //Engineer Github
  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's github?",
  }
  ])

  .then(function (input) {
    const engineerRole = new EngineerRole (
    input.name,
    input.id,
    input.email,
    input.github
    );
    newTeamMember.push(engineerRole);
    employeeType();
  });
};

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

//Manager Role
function managerChosen(){
  inquirer.prompt(managerRole)
  .then(function (input) {
    const ManagerRole = new ManagerRole (
    input.nameManager,
    input.idManager,
    input.emailManager,
    input.officeManager
    );
    newTeamMember.push(ManagerRole);
    employeeType();
  });
};

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

//Engineer Role
function engineerChosen(){
  inquirer.prompt(engineerRole)
  .then(function (input) {
    const EngineerRole = new EngineerRole (
    input.nameEngineer,
    input.idEngineer,
    input.emailEngineer,
    input.githubEngineer
    );
    newTeamMember.push(EngineerRole);
    employeeType();
  });
};

//Intern Role
function internChosen(){
  inquirer.prompt(internRole)
  .then(function (input) {
    const InternRole = new InternRole (
    input.nameIntern,
    input.idIntern,
    input.emailIntern,
    input.schoolIntern
    );
    newTeamMember.push(InternRole);
    employeeType();
  });
};


// Generate Team 
const generateTeam = () => {
  fs.writeFileSync('generatedTeam.html', generateTeam(newTeamMember), "utf-8")
};

managerChosen();