import uploadProductPermission from "../helpers/permission.js";
import productModel from "../models/productModel.js";

async function uploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;

    const hasPermission = await uploadProductPermission(sessionUserId);
    if (!hasPermission) {
      throw new Error("Permission denied");
    }

    // expecting productImage as an array of URLs
    const { productName, brandName, category, productImage, description, price, sellingPrice } = req.body;

    const newProduct = new productModel({
      productName,
      brandName,
      category,
      productImage, // multiple image URLs here
      description,
      price,
      sellingPrice,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product uploaded successfully",
      success: true,
      data: savedProduct,
    });

  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
}

export default uploadProductController;
