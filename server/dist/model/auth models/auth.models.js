"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.findMail = void 0;
const auth_mongo_1 = __importDefault(require("./auth.mongo"));
const findMail = async (email) => {
    return await auth_mongo_1.default.find({ email }, { _v: 0 });
};
exports.findMail = findMail;
const signUp = async (email, password) => {
    return await auth_mongo_1.default.create({ email, password });
};
exports.signUp = signUp;