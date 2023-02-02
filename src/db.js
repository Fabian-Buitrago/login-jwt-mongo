import mongoose from "mongoose";
import { MONGO_STRING } from "./config.js";

mongoose.connect(MONGO_STRING);
export const database = mongoose.connection;
