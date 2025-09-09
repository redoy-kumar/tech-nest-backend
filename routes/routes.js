import express from "express";
import userSignUpController from "../controllers/userSignUp.js";
import userSignInController from "../controllers/userSignin.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);

export default router;

