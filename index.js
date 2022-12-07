// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require ('fs');

const newTeamMember = [];

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
  //Employee Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Employee's name?",
  },
  //Employee ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Employee's id number?",
  },      
  //Manager Office Number
  {
    type: 'input',
    name: 'office',
    message: "What is the Manager's office number?",
  },
];

const engineerRole = [
  //Employee Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Employee's name?",
  },
  //Employee ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Employee's id number?",
  },
  //Employee Email
  {
    type: 'input',
    name: 'email',
    message: "What is the Employee's email?",
  },
];

const internRole = [
  //Employee Name
  {
    type: 'input',
    name: 'name',
    message: "What is the Employee's name?",
  },
  //Employee ID
  {
    type: 'input',
    name: 'id',
    message: "What is the Employee's id number?",
  }, 
  //Intern School
  {
    type: 'input',
    name: 'school',
    message: "Where did the Intern go to school?",
  },
];


//Generate HTML
const generateHTML = ({name, role, id, email, office, github, school}) =>
  ``;

//Create a function to initialize app
const init = () => {
    promptUser()
        //Write to README.md file
        .then((answers) => writeFile('HTMLgenerated.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to HTMLgenerated.html'))
        .catch((err) => console.error(err));        
};

//Function call to initialize app
init();
