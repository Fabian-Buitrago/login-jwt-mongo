import { config } from "dotenv";
config();

export const JWT_SECRET = process.env.JWT_SECRET || "secret_key";
export const EXPIRES_IN = process.env.EXPIRES_IN || "1h";


