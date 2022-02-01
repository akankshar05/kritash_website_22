import mongoose from "mongoose";
// import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },

  mob1: {
    type: String,
  },
  mob2: {
    type: String,
  },
  bg: {
    type: String,
    trim: true,
  },

  disease: {
    type: String,
  },
  //   key: { type: [String], required: true, enum: ["value1", "value2"] },
});

export default mongoose.model("User", UserSchema);
