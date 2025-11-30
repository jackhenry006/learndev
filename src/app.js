const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("HEllo World");
});

app.use("/hello", (req, rres) => {
  console.log("HIII HELLO MY ANKIT KUMAR NAYAk");
});
app.listen(3000, () => {
  console.log("Server is sucessfully listening on the port 3000....");
});
