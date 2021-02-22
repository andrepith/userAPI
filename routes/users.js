const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, dob } = req.body;
  const foundUser = users.find((user) => user.id === id);
  if (firstName) foundUser.firstName = firstName;
  if (lastName) foundUser.lastName = lastName;
  if (email) foundUser.email = email;
  if (dob) foundUser.dob = dob;
  res.send(users);
});

module.exports = router;
