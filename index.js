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

//Manager Role
function managerChosen(){
  inquirer.prompt(managerRole)
  .then(function (input) {
    const managerRole = new managerRole (
    input.nameManager,
    input.idManager,
    input.emailManager,
    input.officeManager
    );
    newTeamMember.push(managerRole);
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
    const engineerRole = new engineerRole (
    input.nameEngineer,
    input.idEngineer,
    input.emailEngineer,
    input.githubEngineer
    );
    newTeamMember.push(engineerRole);
    employeeType();
  });
};

//Intern Role
function internChosen(){
  inquirer.prompt(internRole)
  .then(function (input) {
    const internRole = new internRole (
    input.nameIntern,
    input.idIntern,
    input.emailIntern,
    input.schoolIntern
    );
    newTeamMember.push(internRole);
    employeeType();
  });
};

// generateTeam(
//   //THE HTML GENERATOR WILL GO IN HERE
//   fs.writeFile('index.html', ,utf)
// )

//README file formatting
const generateHTML = ({role, nameManager, idManager, emailManager, officeManager, nameEngineer, idEngineer, emailEngineer, githubEngineer, nameIntern, emailIntern, schoolIntern}) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile Generator Mock HTML</title>
  </head>
  <body>
      <div class="heading-container" id="heading">
          My Team
      </div>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="employee-title">Employee Name</h5>
            <h5 class="employee-position">Employee Position</h5>
            <h6 class="employee-id"><span class="id">ID:</span>Employee ID</h6>
            <h6 class="employee-email"><span class="email">Email:</span>Employee Email</h6>
            <h6 class="employee-github"><span class="github">Github:</span>Employee Github</h6>
            <h6 class="employee-school"><span class="school">School:</span>Employee School</h6>
            <h6 class="employee-office"><span class="office">Office:</span>Employee Office</h6>
          </div>
        </div>
  </body>
  </html>`;

//Create a function to initialize app
const init = () => {
    promptUser()
        //Write to README.md file
        .then((answers) => writeFile('indexGenerated.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to indexGenerated.html'))
        .catch((err) => console.error(err));        
};

//Function call to initialize app
init();
