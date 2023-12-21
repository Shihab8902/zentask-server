const { default: mongoose } = require("mongoose");

require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("Successfully connected to MongoDB!")
}


module.exports = connectDB;