import express from "express";
import {
  httpFetchLatestProducts,
  httpFetchAllProducts,
} from "./product.controllers";

const productRoute = express.Router();

productRoute.get("/allproducts", httpFetchAllProducts);
productRoute.get("/latestproducts", httpFetchLatestProducts);

export default productRoute;
