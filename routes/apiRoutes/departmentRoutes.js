const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// Get all departments
router.get("/department", (req, res) => {
  // internal logic remains the same
});

// // Get single department
// router.get("/department/:id", (req, res) => {});

// // Delete a department
// router.delete("/deparment/:id", (req, res) => {});

module.exports = router;
