import userModel from "../models/userModel.js";

async function userDetailsController(req, res) {
    try {
        const userId = req.user?.id; // ✅ middleware attaches this
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized: No user ID",
                error: true,
                success: false
            });
        }

        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ 
                message: "User not found", 
                error: true, 
                success: false 
            });
        }

        res.status(200).json({
            message: "User fetched successfully",
            error: false,
            success: true,
            user
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default userDetailsController;
