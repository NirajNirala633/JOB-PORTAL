const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const { connectDB } = require("./config/db");

// dotenv configuration
dotenv.config();

// DB Connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restaurent", require("./routes/restaurentRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));


app.get("/", (req, res) => {
  return res.status(200).send("Welcome to restaurent food server.");
});

// PORT
const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
  console.log(`Node Server Running on PORT ${PORT}.`.bgGreen.white);
});
