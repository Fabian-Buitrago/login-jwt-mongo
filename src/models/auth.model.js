import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  token: {
    required: true,
    type: String,
  }
});

export default mongoose.model("Auth", dataSchema);
