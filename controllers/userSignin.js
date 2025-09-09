import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

async function userSignInController(req, res) {
    try {
        const {email, password} = req.body;   
        console.log("Body:",req.body);
        if (!req.body) return res.status(400).json({ message: "Request body missing", error: true, success: false });
        if (!email || !password) throw new Error("Email and password are required");

        const user = await userModel.findOne({ email });
        if (!user) throw new Error("User not found");

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword) throw new Error("Invalid credentials");
        user.password = undefined; // Hide password before sending response
        
        res.status(200).json({ message: "User signed in successfully", success: true, error: false, data: user });
    } catch (error) {
        res.status(400).json({ message: error.message, error: true, success: false });
    }
}

export default userSignInController;