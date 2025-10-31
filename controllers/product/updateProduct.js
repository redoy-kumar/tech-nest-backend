import productModel from "../../models/productModel.js";
import uploadProductPermission from "../../helpers/permission.js"

async function updateProductController(req, res) {
    try {
        const hasPermission = await uploadProductPermission(req.userId);
        if (!hasPermission) {
            throw new Error("Permission denied");
        }
        const productId = req?._id
        const {_id, ...restBody} = req.body 

        const updateProduct = await productModel.findByIdAndUpdate(_id,restBody)

        res.json({
            message: "Product update successfully",
            data: updateProduct,
            success: true,
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default updateProductController;