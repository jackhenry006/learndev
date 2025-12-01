const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const userobj = {
    firstName: "Amit",
    lastName: "Kumar Nayak",
    emailId: "Amit@gamil.com",
    password: "Amit@123",
  };
  try {
    const user = new User(userobj);

    await user.save();
    res.send("User added sucessfully in the database");
  } catch (err) {
    res.status(404).send("something went wrong " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Your Connection is established sucessfully");
    app.listen(3000, () => {
      console.log("Server is sucessfully listening on the port 3000....");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
