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

app.get("/fone", async (req, res) => {
  const userfind = req.body.emailId;
  try {
    console.log(userfind);
    const userfone = await User.findOne({ emailId: userfind });
    if (userfone === 0) {
      res.status(404).send("The user could not  be found");
    } else {
      res.send(userfone);
    }
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
});

app.delete("/delet", async (req, res) => {
  const userid = req.body.userid;

  try {
    const userde = await User.findByIdAndDelete(userid);
    res.send("User is deleted sucessfully");
  } catch (err) {
    res.status(404).send("Something Went Wrong");
  }
});

app.patch("/update", async (req, res) => {
  const userid = req.body.userid;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userid }, data);
    res.send("User is updated sucessfully");
  } catch (err) {
    res.status(404).send("Something went wrong");
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
