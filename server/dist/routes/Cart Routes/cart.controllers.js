"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetCartItems = void 0;
const httpGetCartItems = (req, res) => {
    res.json({
        cart: "cartItems",
    });
};
exports.httpGetCartItems = httpGetCartItems;
