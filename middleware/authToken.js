import jwt from "jsonwebtoken";

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(200).json({
                message: "User not logged in",
                error: true,
                success: false,
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token",
                    error: true,
                    success: false,
                });
            }

            // Properly attach user
            req.userId = decoded._id;
            // console.log("Auth Middleware Attached User:", req.user);

            next();
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || "Auth error",
            error: true,
            success: false,
        });
    }
}

export default authToken;
