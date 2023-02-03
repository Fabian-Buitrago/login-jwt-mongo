import jwt from "jsonwebtoken";

import authModel from "../models/auth.model.js";
import { JWT_SECRET } from "../config/auth.config.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, JWT_SECRET);
    const tokenDocument = await authModel.findOne({ token });
    if (!tokenDocument) throw new Error("Unauthorized");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};
