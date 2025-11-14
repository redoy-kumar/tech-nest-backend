import addToCartModel from "../../models/cartProduct.js";

const deleteAddToCartProduct =async (req,res) =>{
    try{
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id:addToCartProductId})

        res.json({
            message: "Product deleted from Cart",
            error: false,
            success: true,
            data: deleteProduct
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
    
}

export default deleteAddToCartProduct