const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const userobj = req.body;
  try {
    const user = new User(userobj);

    await user.save();
    res.send("User added sucessfully in the database");
  } catch (err) {
    res.status(404).send("something went wrong " + err.message);
  }
});

app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
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
