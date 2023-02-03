import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/user.model.js";
import authModel from "../models/auth.model.js";

import { JWT_SECRET, EXPIRES_IN } from "../config/auth.config.js";

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

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user)
      return res
        .status(400)
        .send({ message: "Username or password is incorrect" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .send({ message: "Username or password is incorrect" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: EXPIRES_IN,
    });

    const data = new authModel({
      userId: user._id,
      token,
    });

    await data.save();
    res.send({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization;
    await authModel.deleteOne({ token });
    res.send({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
