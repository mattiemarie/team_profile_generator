// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;


const promptUser = () => {
    return inquirer.prompt ([
    //Employee Name
      {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?",
      },
      //Employee Role
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices:['Manager', 'Engineer', 'Intern'],
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
      //Manager Office Number
      {
          type: 'input',
          name: 'office',
          message: "What is the Manager's office number?",
      },
      //Engineer Github
      {
          type: 'input',
          name: 'github',
          message: "What is the Engineer's github?",
      },
      //Intern School
      {
          type: 'input',
          name: 'school',
          message: "Where did the Intern go to school?",
      },
    ]);
};


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
