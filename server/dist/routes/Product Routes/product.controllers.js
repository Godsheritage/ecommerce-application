"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchFavouriteProducts = exports.httpFetchLatestProducts = exports.httpFetchAllProducts = void 0;
const product_model_1 = require("../../model/product.model");
//fetch all products
const httpFetchAllProducts = async (req, res) => {
    return res.json(await (0, product_model_1.fetchAllProducts)());
};
exports.httpFetchAllProducts = httpFetchAllProducts;
//fetch latest products
const httpFetchLatestProducts = async (req, res) => {
    return res.json(await (0, product_model_1.fetchLatestProducts)());
};
exports.httpFetchLatestProducts = httpFetchLatestProducts;
// fetch favourite products
const httpFetchFavouriteProducts = async (req, res) => {
    return res.json(await (0, product_model_1.fetchFavouriteProducts)());
};
exports.httpFetchFavouriteProducts = httpFetchFavouriteProducts;
