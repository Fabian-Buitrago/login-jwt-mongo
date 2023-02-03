import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";

const router = Router();

//Register Post Method
router.post("/register", registerUser);

//Login Post Method
router.post("/login", loginUser);

//Logout Post Method
router.post("/logout", logoutUser);

export default router;
