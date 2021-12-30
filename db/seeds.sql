INSERT INTO department (name)
VALUES
  ('General Management'),
  ('Marketing'),
  ('Operations'),
  ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Chief Executive Officer', 120000.00, 1),
  ('Assistant Manager', 85000.00, 1),
  ('Marketing Director', 90000.00, 2),
  ('Marketing Associate', 70000.00, 2),
  ('Operations Manager', 90000.00, 3),
  ('Operations Associate', 65000.00, 3),
  ('Finance Director', 90000.00, 4),
  ('Finance Associate', 65000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 1),
  ('Charles', 'LeRoi', 4, 3),
  ('Katherine', 'Mansfield', 4, 3),
  ('Dora', 'Carrington', 5, 1),
  ('Edward', 'Bellamy', 6, 5),
  ('Montague', 'Summers', 6, 5),
  ('Octavia', 'Butler', 7, 1),
  ('Unica', 'Zurn', 8, 7);