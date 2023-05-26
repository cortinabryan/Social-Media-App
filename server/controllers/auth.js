import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js"; // Double check. It was giving errors for a bit User.js vs user.js

/* REGISTER USER */

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = newUser({});
  } catch (err) {}
};
