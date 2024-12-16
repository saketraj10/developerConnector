const express = require('express');

const app = express();

// This will only from GET method
app.get("/user", (req, res) => {
  res.send({ firstName: "Saket", lastName: "Raj"});
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data Successfully saved to the database");
});

app.delete("/user", (req, res) => {
  // saving data to DB
  res.send("Deleted Successfully");
});

// this will match all the HTTP method API calls to /test
app.use("/test",(req, res) =>{
  res.send("Hello from the server!");
});



app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...")
});