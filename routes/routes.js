import express from "express";
import userSignUpController from "../controllers/user/userSignUp.js";
import userSignInController from "../controllers/user/userSignin.js";
import userDetailsController from "../controllers/user/userDetails.js";
import authToken from "../middleware/authToken.js";
import userLogout from "../controllers/user/userLogout.js";
import allUsers from "../controllers/user/allUsers.js";
import updateUser from "../controllers/user/updateUser.js";
import uploadProductController from "../controllers/product/uploadProduct.js";
import getProductController from "../controllers/product/getProduct.js";
import updateProductController from "../controllers/product/updateProduct.js";
import getCategoryProduct from "../controllers/product/getCategoryProduct.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout",userLogout)


// Admin panel
router.get('/allUsers',authToken,allUsers)
router.post("/update-user",authToken, updateUser)


// Product 
router.post("/upload-product", authToken, uploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get('/get-category-product',getCategoryProduct)

export default router;
 
