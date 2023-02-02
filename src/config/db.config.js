import { config } from "dotenv";
config();

export const MONGO_STRING = process.env.DATABASE_URL;
