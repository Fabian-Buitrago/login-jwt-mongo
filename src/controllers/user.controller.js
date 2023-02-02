import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, lastname, email, username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const data = new userModel({
    name,
    lastname,
    email,
    username,
    password: hash,
  });

  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
