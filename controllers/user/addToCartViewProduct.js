import addToCartModel from "../../models/cartProduct.js";

const addToCartViewProduct = async(req,res) =>{
    try{
        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId: userId
        })

        res.json({
            data: allProduct,
            success: true,
            error: false
        })
    }catch (error) {
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

export default addToCartViewProduct