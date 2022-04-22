"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchProducts = void 0;
const product_model_1 = require("../model/product.model");
const httpFetchProducts = async (req, res) => {
    res.json(await (0, product_model_1.fetchProducts)());
};
exports.httpFetchProducts = httpFetchProducts;
