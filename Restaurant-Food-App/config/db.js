const mongoose = require("mongoose");
const colors = require("colors");

// function mongodb database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "Restaurent-Food-App",
        })
        console.log(`Connected to Database ${mongoose.connection.host}.`.bgRed);
    } catch (error) {
        console.log("DB Error", error);
    }
}



exports.connectDB = connectDB;