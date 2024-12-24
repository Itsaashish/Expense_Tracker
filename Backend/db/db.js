const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };
