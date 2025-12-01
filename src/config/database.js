const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ankit00:Qu9TU8bAtu19vaRH@ankit0.bpeqmbu.mongodb.net/Helloworld"
  );
};

module.exports = connectDB;
