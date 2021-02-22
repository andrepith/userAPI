const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.js");
const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
