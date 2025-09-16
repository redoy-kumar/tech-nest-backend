import express from "express";
import userSignUpController from "../controllers/userSignUp.js";
import userSignInController from "../controllers/userSignin.js";
import userDetailsController from "../controllers/userDetails.js";
import authToken from "../middleware/authToken.js";
import userLogout from "../controllers/userLogout.js";
import allUsers from "../controllers/allUsers.js";
import updateUser from "../controllers/updateUser.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout",userLogout)
router.post("/update-user",authToken, updateUser)



// Admin panel
router.get('/allUsers',authToken,allUsers)

export default router;
 
