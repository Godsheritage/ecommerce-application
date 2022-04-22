import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  category: { type: String, required: true },
});

const productDataDatabse = mongoose.model("product", productSchema);

export default productDataDatabse;
