import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userSignUpController = async (req, res) => {
  try {
    if (!req.body) return res.status(400).json({ message: "Request body missing", error: true, success: false });
    console.log("Body:",req.body);
    const { name, email, password, profilePic } = req.body;

    if (!name || !email || !password) throw new Error("Name, email, and password are required");
    if (password.length < 8) throw new Error("Password must be at least 8 characters");

    // check duplicate email
    const existingUser = await userModel.findOne({ email });
    if (existingUser) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashedPassword
        }

    const userData = new userModel(payload);
    await userData.save();

    res.status(201).json({ message: "User created successfully", success: true, error: false, data: userData });
  } catch (error) {
    res.status(400).json({ message: error.message, error: true, success: false });
  }
};

export default userSignUpController;
