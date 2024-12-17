const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data sent");
});


app.get("/admin/getAllData", (req, res) => {
  // Logic of checking if the request is authorized
    res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic of checking if the request is authorized
  res.send("Deleted a user");
});


app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...")
});