import uploadProductPermission from "../helpers/permission.js";
import productModel from "../models/productModel.js";

async function uploadProductController(req, res) {
    try {
        const sessionUserId = req.userId;

        const hasPermission = await uploadProductPermission(sessionUserId);
        if (!hasPermission) {
            throw new Error("Permission denied");
        }

        const uploadProduct = new productModel(req.body);
        const saveProduct = await uploadProduct.save();

        res.status(201).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: saveProduct,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

export default uploadProductController;
