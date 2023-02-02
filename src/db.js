import mongoose from "mongoose";
import { MONGO_STRING } from "./config/db.config.js";

mongoose.connect(MONGO_STRING);
export const database = mongoose.connection;
