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
import getCategoryProduct from "../controllers/product/getCategorySingle.js";
import getCategoryWiseProduct from "../controllers/product/getCategoryWiseProduct.js";
import getProductDetails from "../controllers/product/getProductDetails.js";
import addToCartController from "../controllers/user/addToCartController.js";
import countAddToCartProduct from "../controllers/user/countAddToCartProduct.js";
import addToCartViewProduct from "../controllers/user/addToCartViewProduct.js";
import updateAddToCartProduct from "../controllers/user/updateAddToCartProduct.js";
import deleteAddToCartProduct from "../controllers/user/deleteAddToCartProduct.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout",userLogout)


// Admin panel
router.get("/allUsers",authToken,allUsers)
router.post("/update-user",authToken, updateUser)


// Product 
router.post("/upload-product", authToken, uploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-category-product",getCategoryProduct)
router.post("/category-wise-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)

// user add to cart
router.post("/add-to-cart", authToken, addToCartController)
router.get("/countAddToCart", authToken, countAddToCartProduct)
router.get("/view-cart-product",authToken, addToCartViewProduct)
router.post("/update-cart-product", authToken, updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

export default router;
 
