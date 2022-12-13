const { create } = require("domain");

const createdWorkTeam = workTeam => {
    
    const html = [];

    const managerRole = ({role, name, id, email, office}) => {

        let managerRoleHTML =
        `<h5 class="employee-title"> ${name} </h5>
        <h5 class="employee-position">Employee Position ${role} </h5>
        <h6 class="employee-id"><span class="id">ID:</span>${id}</h6>
        <h6 class="employee-email"><span class="email">Email:</span>${email}</h6>
        <h6 class="employee-office"><span class="office">Office:</span>${office}</h6>`;
        html.push(managerRoleHTML);
    };

    const engineerRole = ({role, name, id, email, github}) => {

        let engineerRoleHTML =
        `<h5 class="employee-title"> ${name} </h5>
        <h5 class="employee-position">Employee Position ${role} </h5>
        <h6 class="employee-id"><span class="id">ID:</span>${id}</h6>
        <h6 class="employee-email"><span class="email">Email:</span>${email}</h6>
        <h6 class="employee-github"><span class="github">Github:</span>${github}</h6>`;
        html.push(engineerRoleHTML);
    };

    const internRole = ({role, name, id, email, school}) => {

        let internRoleHTML =
        `<h5 class="employee-title"> ${name} </h5>
        <h5 class="employee-position">Employee Position ${role} </h5>
        <h6 class="employee-id"><span class="id">ID:</span>${id}</h6>
        <h6 class="employee-email"><span class="email">Email:</span>${email}</h6>
        <h6 class="employee-school"><span class="school">School:</span>${school}</h6>`;
        html.push(internRoleHTML);
    };

    for (let i = 0; i < workTeam.length; i++) {
        if (workTeam[i].getRole() === "Manager") {
            managerRole(workTeam[i]);
        }
        if (workTeam[i].getRole() === "Engineer") {
            engineerRole(workTeam[i]);
        }
        if (workTeam[i].getRole()=== "Intern") {
            internRole(workTeam[i]);
        }
    }

    return html.join ('');
};

module.exports = workTeam => {
    
    return `<!DOCTYPE html>
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
              ${createdWorkTeam(workTeam)}
            </div>
          </div>
    </body>
    </html>`;
};