const inquirer = require('inquirer');

const fs = require ('fs');

// Roles JS Files
const ManagerRole = require('./roles/Manager');
const EngineerRole = require('./roles/Engineer');
const InternRole = require('./roles/Intern');

const generateTeamHTML = require('./generated-html');

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
      if (managerChoice.role === 'Engineer') {
        return engineerRole();
      } else if (managerChoice.role === 'Intern') {
        return internRole();
      } else if (managerChoice.role === 'Team Built') {
        return generateTeam();
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

const internRole = () => {
  return inquirer.prompt ([
    //Intern Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Intern's name?",
  },
  //Intern ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Intern's id number?",
  },
  //Intern Email
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email?",
  },
  //Intern School
  {
    type: 'input',
    name: 'school',
    message: "Where did the Intern go to school?",
  }
  ])

  .then(function (input) {
    const internRole = new InternRole (
    input.name,
    input.id,
    input.email,
    input.school
    );
    newTeamMember.push(internRole);
    employeeType();
  });
};



// Generate Team 
const generateTeam = () => {
  fs.writeFile('team.html', generateTeamHTML(newTeamMember), (err) => {
    if(err)
    console.log(err);
    else {
      console.log("File written successfully")
      console.log(fs.readFileSync('team.html', 'utf-8'))
    }
  });
};

managerRole();