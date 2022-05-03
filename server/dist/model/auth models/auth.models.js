"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.findUser = void 0;
const auth_mongo_1 = __importDefault(require("./auth.mongo"));
//find email
const findUser = async (email, password) => {
    return await auth_mongo_1.default.findOne({ email, password }, { __v: 0 });
};
exports.findUser = findUser;
//sign up users
const signUp = async (email, password) => {
    return await auth_mongo_1.default.create({ email, password });
};
exports.signUp = signUp;
