const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Waleed:Waleed123@cluster0.fgrah6k.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log(
      `Mongo DB Connected: ${conn.connection.host}`.underline.cyan.bold
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
