"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    category: { type: String, required: true },
});
const productDataDatabse = mongoose_1.default.model("product", productSchema);
exports.default = productDataDatabse;