import mongoose from "mongoose";

const addToCartSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,   
    },
    quantity: {
      type: Number,
      default: 1,           
      min: 1,               
    },
    userId: {
      type: String,
      required: true,  
    },
  },
  { timestamps: true }
);

const addToCartModel = mongoose.model("addToCart", addToCartSchema);

export default addToCartModel;
