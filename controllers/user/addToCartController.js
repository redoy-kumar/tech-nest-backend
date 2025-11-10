import addToCartModel from "../../models/cartProduct.js";

const addToCartController = async (req, res) => {
  try {
    const { productId } = req.body;
    const currentUser = req.userId;

    if (!productId) {
      return res.status(400).json({
        message: "productId is required",
        success: false,
      });
    }

    // Check if product already exists in cart for this user
    const existProduct = await addToCartModel.findOne({
      productId,
      userId: currentUser,
    });

    if (existProduct) {
      // Increase quantity instead (optional)
      existProduct.quantity += 1;
      await existProduct.save();

      return res.json({
        message: "Product quantity updated",
        success: true,
        error: false,
      });
    }

    // Add new cart item
    const newItem = new addToCartModel({
      productId,
      userId: currentUser,
      quantity: 1,
    });

    const saveProduct = await newItem.save();

    return res.json({
      data: saveProduct,
      message: "Product added to cart",
      success: true,
      error: false,
    });

  } catch (error) {
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
};

export default addToCartController;
