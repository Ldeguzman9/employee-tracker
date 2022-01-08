const express = require("express");
const inquirer = require("inquirer");
const router = express.Router();
const connection = require("../../db/connection");

connection.connect((err) => {
  if (err) throw err;
  promptQuestions();
});

const promptQuestions = () => {
  inquirer
    .prompt([
      // Questions to build company index
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
          "Exit",
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
          displayEmployee();
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
        case "Exit":
          connection.end();
          console.log("Bye");
          break;
      }
    });
};

// function to display departments
function displayDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptQuestions();
  });
}

// function to display roles
function displayRoles() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptQuestions();
  });
}

// function to display employees
function displayEmployee() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptQuestions();
  });
}

// function to add departments
function addDepartment() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "department",
          message: "Please enter new department.",
        },
      ])
      .then((response) => {
        connection.query(
          "INSERT INTO department SET?",
          {
            name: response.department,
          },
          (err) => {
            if (err) throw err;
            promptQuestions();
          }
        );
      });
  });
}

//function to add role
function addRole() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What role would you like to add?",
        },
        {
          type: "input",
          name: "salary",
          message: " What is the salary?",
        },
        {
          type: "list",
          name: "department_id",
          message: "What department does this belong to?",
          choices: res.map((department) => department.sector),
        },
      ])
      .then((response) => {
        const getDepartmentId = res.find(
          (department) => department.sector === response.department_id
        );
        connection.query(
          "INSERT INTO roles SET ?",
          {
            role: response.title,
            salary: response.salary,
            department_id: getDepartmentId.id,
          },
          (err) => {
            if (err) throw err;
            promptQuestions();
          }
        );
      });
  });
}

//function to add employee
function addEmployee() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "Please enter Employee's first name.",
        },
        {
          type: "input",
          name: "last_name",
          message: "Please enter Employee's last name.",
        },
        {
          type: "list",
          name: "role_id",
          message: "Please enter Employee's new role.",
          choices: res.map((roles) => roles.title),
        },
      ])
      .then((response) => {
        const getRoleId = res.find((roles) => roles.title === response.role_id);
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: response.first_name,
            last_name: response.last_name,
            role_id: getRoleId.id,
          },
          (err) => {
            if (err) throw err;
            promptQuestions();
          }
        );
      });
  });
}

// function to update employee role
function updateEmployeeRole() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "Please select Employee you would like to update.",
          choices: res.map((employee) => employee.first_name),
        },
      ])
      .then((response) => {
        const employeeName = response.employee;
        connection.query("SELECT * FROM roles", (err, res) => {
          if (err) throw err;

          inquirer
            .prompt([
              {
                type: "list",
                name: "role_id",
                message: "Please select Employee's new role.",
                choices: res.map((roles) => roles.title),
              },
            ])
            .then(
              (response) => {
                const updatedRole = res.find(
                  (roles) => roles.title === response.role_id
                );
                connection.query(
                  "UPDATE employee SET first_name = " +
                    employeeName +
                    " WHERE role_id = " +
                    "'" +
                    updatedRole +
                    "'",
                  console.log(updatedRole.id),
                  { role_id: updatedRole.id }
                );
              },
              //console.table(res),
              (err) => {
                if (err) throw err;
                promptQuestions();
              }
            );
        });
      });
  });
}
