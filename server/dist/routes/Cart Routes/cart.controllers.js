"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetCartItems = exports.httpPostCartItems = void 0;
const httpPostCartItems = (req, res) => {
    const cartItem = req.body;
    res.json({
        cart: "cartItems",
    });
};
exports.httpPostCartItems = httpPostCartItems;
const httpGetCartItems = (req, res) => {
    res.json({
        cart: "cartItems",
    });
};
exports.httpGetCartItems = httpGetCartItems;
