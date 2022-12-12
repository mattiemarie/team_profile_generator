const createdWorkTeam = (workTeam) => {
    
    const generateHTML = [];

    const generateManagerHTML = ({role, nameManager, idManager, emailManager, officeManager}) =>
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
              <h5 class="employee-title"> ${nameManager} </h5>
              <h5 class="employee-position">Employee Position ${role} </h5>
              <h6 class="employee-id"><span class="id">ID:</span>${idManager}</h6>
              <h6 class="employee-email"><span class="email">Email:</span>${emailManager}</h6>
              <h6 class="employee-office"><span class="office">Office:</span>${officeManager}</h6>
            </div>
          </div>
    </body>
    </html>`;
}



const generateHTML = ({role, nameManager, idManager, emailManager, officeManager, nameEngineer, idEngineer, emailEngineer, githubEngineer, nameIntern,idIntern, emailIntern, schoolIntern}) =>
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
            <h5 class="employee-title"> ${nameManager,nameEngineer,nameIntern} </h5>
            <h5 class="employee-position">Employee Position ${role} </h5>
            <h6 class="employee-id"><span class="id">ID:</span>${idManager,idEngineer,idIntern}</h6>
            <h6 class="employee-email"><span class="email">Email:</span>${emailManager,emailEngineer,emailIntern}</h6>
            <h6 class="employee-github"><span class="github">Github:</span>${githubEngineer}</h6>
            <h6 class="employee-school"><span class="school">School:</span>${schoolIntern}</h6>
            <h6 class="employee-office"><span class="office">Office:</span>${officeManager}</h6>
          </div>
        </div>
  </body>
  </html>`;