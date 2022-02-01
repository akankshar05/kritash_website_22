import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("connected");
  return mongoose.connect(url);
};
export default connectDB;
