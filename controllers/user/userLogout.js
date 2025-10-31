async function userLogout(req, res) {
    try {
        res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" }); 

        return res.json({
            message: "Logout successfully",
            success: true,
            error: false,
            data: []
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

export default userLogout;
