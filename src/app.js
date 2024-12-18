const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User(userObj = {
    firstName: "Amit",
    lastName: "Kumar",
    emailId: "amit@gmail.com",
    password: "amitkumar"
  });

  try{
    await user.save();
    res.send("User Added successfully!");
  } catch(err){
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connnection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...")
    });
  })
  .catch((err) => {
    console.log("Database connot be connected");
  });

