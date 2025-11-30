const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middleware/auth.js");

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin", (req, res) => {
  res.send("admin data is sent sucessfully !!");
});

app.get("/admin/dataupdate", (req, res) => {
  res.send("the admin data is updated sucessfully");
});

app.get("/user", (req, res) => {
  res.send("the user data is valid");
});

app.get("/user/dataupdate", (req, res) => {
  res.send("the user data is sucessfully updated");
});

app.listen(3000, () => {
  console.log("Server is sucessfully listening on the port 3000....");
});
