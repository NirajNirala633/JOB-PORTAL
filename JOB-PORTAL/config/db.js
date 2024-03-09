import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL,{
      dbName: "JOB-PORTAL",
    });
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Error ${error}`.bgRed.white);
  }
};

export default connectDB;

// xport const connectDB = () => {
//   mongoose.connect("mongodb://localhost:27017", {
//       dbName: "Ecommerce_24",
//   })
//   .then((c) => console.log(`DB Connected to ${c.connection.host}`))
//   .catch((e) => console.log(e));
// };
