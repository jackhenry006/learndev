const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ FirstName: "Ankit", LasteName: "Kumar Nayak" });
});

app.post("/user", (req, res) => {
  res.send("Your data is updated sucessfully");
});

app.delete("/user", (req, res) => {
  res.send("your data is deleted sucessfully");
});
app.use("/test", (req, res) => {
  res.send("HEllo World");
});

app.listen(3000, () => {
  console.log("Server is sucessfully listening on the port 3000....");
});
