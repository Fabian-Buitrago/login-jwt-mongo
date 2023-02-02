import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = Router();

//Register Post Method
router.post("/register", registerUser);

//Login Post Method
router.post("/login", loginUser);

export default router;
