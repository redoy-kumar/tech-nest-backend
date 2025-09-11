import express from "express";
import userSignUpController from "../controllers/userSignUp.js";
import userSignInController from "../controllers/userSignin.js";
import userDetailsController from "../controllers/userDetails.js";
import authToken from "../middleware/authToken.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);

export default router;
 
