"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetCartItems = exports.httpPostCartItems = void 0;
const cart_model_1 = require("../../model/cart models/cart.model");
//post cart items controller
const httpPostCartItems = async (req, res) => {
    const cartItem = req.body;
    await (0, cart_model_1.addToCart)(cartItem);
    return res.status(201).json(cartItem);
};
exports.httpPostCartItems = httpPostCartItems;
//fetch cart items controller
const httpGetCartItems = async (req, res) => {
    res.status(200).json(await (0, cart_model_1.fetchCartItems)());
};
exports.httpGetCartItems = httpGetCartItems;
