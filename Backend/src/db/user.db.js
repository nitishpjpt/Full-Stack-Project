import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log("MongoDB is not connected", error);
  }
};

export default connectDB;
