import productModel from "../../models/productModel.js";

const getProductDetails = async (req,res)=>{
    try{
        const {productId} = req.body

        // find id
        const product = await productModel.findById(productId)

        // pass details to the frontend side
        res.json({
            data: product,
            message: "Fetch product details successfully",
            success: true,
            error: false
        })
    }
    catch (error) {
        res.status(400).json({
            message: error?.message || error,
            error: true,
            success: false
        });
    }
}

export default getProductDetails