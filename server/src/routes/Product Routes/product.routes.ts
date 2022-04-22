import express from "express";
import {
  httpFetchAllProducts,
  httpFetchLatestProducts,
  httpFetchFavouriteProducts,
} from "./product.controllers";

const productRoute = express.Router();

productRoute.get("/allproducts", httpFetchAllProducts);
productRoute.get("/latestproducts", httpFetchLatestProducts);
productRoute.get("/favouriteproducts", httpFetchFavouriteProducts);

export default productRoute;
