"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCartItems = exports.addToCart = void 0;
const cart_mongo_1 = __importDefault(require("./cart.mongo"));
const cart = [];
//add items to cart  
const addToCart = async (cartItem) => {
    await cart_mongo_1.default.create(cartItem);
};
exports.addToCart = addToCart;
//fetch cart Items
const fetchCartItems = async () => {
    return await cart_mongo_1.default.find({}, { __v: 0 });
};
exports.fetchCartItems = fetchCartItems;
