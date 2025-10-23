// use for database
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  brandName: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  productImage: [{ type: String, required: true }],
  description: { type: String, required: true },
  profilePic: { type: String },
  price: {type:Number, required: true},
  sellingPrice: {type:Number, required: true}
}, { timestamps: true });

const productModel = mongoose.model("Product", productSchema);
export default productModel;