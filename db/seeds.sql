INSERT INTO departments (department_id, name)
VALUES
  (1, 'General Management'),
  (2, 'Marketing'),
  (3, 'Operations'),
  (4, 'Finance'),

INSERT INTO candidates (role_id, title, salary, department_id)
VALUES
  (1, 'Chief Executive Officer', '120,000', 1),
  (2,'Assistant Manager', '85,000', 1),
  (3, 'Marketing Director', '90,000', 2),
  (4, 'Marketing Associate', '70,000', 2),
  (5, 'Operations Manager', '90,000', 3),
  (6, 'Operations Associate', '65,000', 3),
  (7, 'Finance Director', '90,000', 4),
  (8, 'Finance Associate', '65,000', 4),

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Ronald', 'Firbank', 1, NULL),
  (2, 'Virginia', 'Woolf', 2, 1),
  (3, 'Piers', 'Gaveston', 3, 1),
  (4, 'Charles', 'LeRoi', 4, 3),
  (5, 'Katherine', 'Mansfield', 4, 3),
  (6, 'Dora', 'Carrington', 5, 1),
  (7, 'Edward', 'Bellamy', 6, 5),
  (8, 'Montague', 'Summers', 6, 5),
  (9, 'Octavia', 'Butler', 7, 1),
  (10, 'Unica', 'Zurn', 8, 7);