import userModel from "../models/userModel.js";

async function userDetailsController(req, res) {
    try {
        const userId = req.userId; // ✅ middleware attaches this
        console.log("User Id", userId);
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized: No user ID",
                error: true,
                success: false
            });
        }

        const user = await userModel.findById(userId);
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
            data: user
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
