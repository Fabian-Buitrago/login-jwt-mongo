import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

//Register Post Method
router.post("/register", registerUser);

export default router;
