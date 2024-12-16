const express = require('express');

const app = express();

// This will only from GET method
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Saket", lastName: "Raj"});
});





app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...")
});