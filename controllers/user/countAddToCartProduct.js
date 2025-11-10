import addToCartModel from "../../models/cartProduct.js";

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
        error: true
      });
    }

    // fetch all cart items for this user
    const cartItems = await addToCartModel.find({ userId }).lean();

    // sum quantity
    const totalQuantity = cartItems.reduce((sum, item) => {
      // ensure item.quantity is a number
      const qty = Number(item.quantity) || 0;
      return sum + qty;
    }, 0);

    return res.json({
      data: totalQuantity,
      message: "Cart count fetched successfully",
      success: true,
      error: false
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
};

export default countAddToCartProduct;
