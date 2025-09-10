import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        // console.log("Body:", req.body);

        if (!req.body)
            return res.status(400).json({ message: "Request body missing", error: true, success: false });

        if (!email || !password)
            throw new Error("Email and password are required");

        const user = await userModel.findOne({ email });
        if (!user)
            throw new Error("User not found. Please sign up first.");

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword)
            throw new Error("Invalid credentials. Please try again.");


        // Generate JWT token
        const tokenData = {
            _id: user._id,
            email: user.email
        };


        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: "2d" });

        const tokenOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // false in localhost
            sameSite: "Lax" // or "None" if you need cross-site requests
        };

        res.cookie("token", token, tokenOptions).json({
            message: "User signed in successfully",
            success: true,
            error: false,
            data: user   // send user data
        });
    } catch (error) {
        res.json(
            {
                message: error.message,
                error: true,
                success: false
            }
        );
    }
}

export default userSignInController;