"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const productRoute = express_1.default.Router();
productRoute.get("/allproducts", product_controllers_1.httpFetchAllProducts);
productRoute.get("/singleproduct", product_controllers_1.httpFetchSingleProduct);
productRoute.get("/latestproducts", product_controllers_1.httpFetchLatestProducts);
productRoute.get("/favouriteproducts", product_controllers_1.httpFetchFavouriteProducts);
exports.default = productRoute;
