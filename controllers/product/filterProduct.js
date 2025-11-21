import productModel from "../../models/productModel.js";

const filterProductController = async (req,res) =>{
    try{
        const categoryList = req?.body?.category || [];

        const product = await productModel.find({
           category: { "$in": categoryList }
        })


        res.json({
            message: "Filtered products fetched successfully",
            success: true,  
            error: false,
            data: product,
        });
        
    }catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default filterProductController;