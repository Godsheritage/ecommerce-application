"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchFavouriteProducts = exports.httpFetchLatestProducts = exports.httpFetchAllProducts = exports.httpFetchSingleProduct = void 0;
const product_model_1 = require("../../model/product.model");
//fetch single products
const httpFetchSingleProduct = async (req, res) => {
    const ID = req.params.product;
    // console.log(req.params)
    return res.status(200).json(await (0, product_model_1.fetchSingleProduct)(ID));
};
exports.httpFetchSingleProduct = httpFetchSingleProduct;
//fetch all products
const httpFetchAllProducts = async (req, res) => {
    return res.status(200).json(await (0, product_model_1.fetchAllProducts)());
};
exports.httpFetchAllProducts = httpFetchAllProducts;
//fetch latest products
const httpFetchLatestProducts = async (req, res) => {
    return res.status(200).json(await (0, product_model_1.fetchLatestProducts)());
};
exports.httpFetchLatestProducts = httpFetchLatestProducts;
// fetch favourite products
const httpFetchFavouriteProducts = async (req, res) => {
    return res.status(200).json(await (0, product_model_1.fetchFavouriteProducts)());
};
exports.httpFetchFavouriteProducts = httpFetchFavouriteProducts;
