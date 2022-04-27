import express from "express";
import {
  httpFetchAllProducts,
  httpFetchSingleProduct,
  httpFetchLatestProducts,
  httpFetchFavouriteProducts,
} from "./product.controllers";

const productRoute = express.Router();

productRoute.get("/allproducts", httpFetchAllProducts);
productRoute.get("/singleproduct/:product", httpFetchSingleProduct);
productRoute.get("/latestproducts", httpFetchLatestProducts);
productRoute.get("/favouriteproducts", httpFetchFavouriteProducts);

export default productRoute;
