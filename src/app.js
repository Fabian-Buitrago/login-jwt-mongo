import express from "express";

import userRoutes from "./routes/user.route.js";
import { database } from "./db.js";
import { authenticate } from "./middlewares/authJwt.js";

const app = express();

app.use(express.json());

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(userRoutes);

app.get("/protected", authenticate, (req, res) => {
  res.send({ message: "Welcome to protected route" });
});

app.use((req, res, next) => {
  res.status(500).json({
    message: "endpoint not found",
  });
});

export default app;
