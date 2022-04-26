"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cart_routes_1 = __importDefault(require("./routes/Cart Routes/cart.routes"));
const product_routes_1 = __importDefault(require("./routes/Product Routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use('/cartItems', cart_routes_1.default);
app.use('/products', product_routes_1.default);
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
exports.default = app;
