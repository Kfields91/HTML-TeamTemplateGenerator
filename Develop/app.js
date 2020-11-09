const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

createManager();

function createManager(){
    inquirer.prompt([
        {
          // Takes user text input
          type: "input",
          name: "name",
          message: "Enter Manager's Name"
        },
        {
          // Takes user text input
          type: "input",
          name: "id",
          message: "Enter Manager's Id"
        },
        {
          // Takes user text input
          type: "input",
          name: "email",
          message: "Enter Manager's Email"
          },
          {
            // Takes user text input
            type: "input",
            name: "officeNumber",
            message: "Enter Manager's Office Number"
          }
        ]).then(function(data){
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamMembers.push(manager);
            createTeam();
        });
    }

function createTeam(){
    inquirer.prompt([
    { 
        // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
          type: "checkbox",
          message: "Choose Which Kind Of TeamMember You'd Like To Add",
          name: "teamMembers",
          choices: [
              "Engineer",
              "Intern",
              "none"
            ]
        }
    ]).then(function(data){
        if(data.teamMembers === "Engineer"){
            createEngineer();
        }
        if(data.teamMembers === "Intern"){
            createIntern();
        }
        if(data.teamMembers === "none"){
            console.log("none chosen");
        }
    });
// push
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
