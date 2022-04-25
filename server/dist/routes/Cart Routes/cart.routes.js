"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controllers_1 = require("./cart.controllers");
const cartRoute = express_1.default.Router();
//get all the cart items
cartRoute.get("/", cart_controllers_1.httpGetCartItems);
exports.default = cartRoute;
