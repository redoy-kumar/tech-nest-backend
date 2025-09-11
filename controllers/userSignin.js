import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: "Email and password are required", error: true, success: false });

        const user = await userModel.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "User not found", error: true, success: false });

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword)
            return res.status(401).json({ message: "Invalid credentials", error: true, success: false });

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2d" });

        const tokenOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // false in localhost
            sameSite: "Lax"
        };

        res.cookie("token", token, tokenOptions).json({
            message: "User signed in successfully",
            success: true,
            error: false,
            data: user
        });

    } catch (error) {
        res.status(500).json({ message: error.message, error: true, success: false });
    }
}

export default userSignInController;
