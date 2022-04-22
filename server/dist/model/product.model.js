"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = exports.sendProductToMongo = void 0;
const product_mongo_1 = __importDefault(require("./product.mongo"));
const latestProduct = [
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669572815131393_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669574048042416_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669574048042416_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Black and White Stripes Dress",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669574268113464_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 45.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669575675443342_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669575409614831_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Flamboyant Pink Top",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669575409614831_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 35.0,
        category: "tops, jumpsuits",
    },
    {
        name: "Black and White Stripes Dress",
        image: "https://img.romwe.com/images/romwe.com/201703/1490669575675443342_thumbnail_900x.webp",
        size: "M",
        quantity: 1,
        price: 45.0,
        category: "tops, jumpsuits",
    },
];
const sendProductToMongo = async () => {
    // await productDataDatabse.updateMany(latestProduct, {
    //   upsert: true,
    // });
    //   console.log("hey");
    await product_mongo_1.default.create(latestProduct);
};
exports.sendProductToMongo = sendProductToMongo;
// sendProductToMongo()
const fetchProducts = async () => {
    return await product_mongo_1.default.find({}, { __v: 0 });
};
exports.fetchProducts = fetchProducts;
