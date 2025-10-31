import productModel from "../../models/productModel.js";

const getProductController = async (req, res) => {

    try {
        const allProduct = await productModel.find().sort({createdAt : -1})

        res.json({
            message: "All product",
            success: true,
            error: false,
            data: allProduct
        })


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default getProductController