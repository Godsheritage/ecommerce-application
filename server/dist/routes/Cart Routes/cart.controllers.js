"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetCartItems = exports.httpPostCartItems = void 0;
const cart_model_1 = require("../../model/cart.model");
const httpPostCartItems = (req, res) => {
    const cartItem = req.body;
    (0, cart_model_1.addToCart)(cartItem);
    return res.status(201).json(cartItem);
};
exports.httpPostCartItems = httpPostCartItems;
const httpGetCartItems = (req, res) => {
    res.json({
        cart: "cartItems",
    });
};
exports.httpGetCartItems = httpGetCartItems;
