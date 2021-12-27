const express = require("express");
const router = express.Router();

router.use(require("./departmentRoutes"));
router.use(require("./employeeRoutes"));
router.use(require("./roleRoutes"));

function promptQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "task",
        message:
          "Hello! Welcome to the company index. What would you like to do?",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then(function (data) {
      switch (data.task) {
        case "View Departments":
          displayDepartments();
          break;
        case "View Roles":
          displayRoles();
          break;
        case "View Employees":
          displayEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
      }
    });
}

module.exports = router;
