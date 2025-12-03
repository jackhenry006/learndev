const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    minLength: 2,
  },
  emailId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    min: 10,
  },
  gender: {
    type: String,
    validate(value) {
      if (![male, female, others].includes(value)) {
        throw new error("Gender data is not valid");
      }
    },
  },
  about: {
    type: String,
    default: "You should provide something aboutyourself",
  },
  skills: {
    type: [String],
    default: "you should give your skills for better result",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
