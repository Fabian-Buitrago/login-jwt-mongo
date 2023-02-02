import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  lastname: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    unique: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export default mongoose.model("User", dataSchema);
