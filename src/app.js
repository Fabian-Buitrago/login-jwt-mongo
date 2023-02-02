import express from "express";
import { database } from "./db.js";
import authRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api", authRoute);

app.use((req, res, next) => {
  res.status(500).json({
    message: "endpoint not found",
  });
});

export default app;
