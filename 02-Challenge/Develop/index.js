const { prompt } = require("inquirer");
const db = require("./db");

init();

function loadMainPrompts() {
    prompt([
        {
            type:"list",
            name:"choice",
            message: "Where shall I direct you?",
            choices: [
              {
                name: "View all departments", //View all deparments 
                value: "VIEW_DEPARTMENTS"
              },
              {
                name: "Department names",
                value: "DEPARTMENT_NAMES"
              },
              {
                name: ""
              },
              {
                name: "View all roles", //View all roles
                value: "VIEW_ROLES"
              },
              {
                name: "View all employees", //View all employees
                value: "VIEW_EMPLOYEES"
              },

            ]
        }
    ])