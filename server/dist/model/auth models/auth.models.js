"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.signUp = exports.findUser = void 0;
const util_1 = __importDefault(require("util"));
const crypto_1 = __importDefault(require("crypto"));
const auth_mongo_1 = __importDefault(require("./auth.mongo"));
const scrypt = util_1.default.promisify(crypto_1.default.scrypt);
//find email
const findUser = async (email) => {
    return await auth_mongo_1.default.findOne({ email }, { __v: 0 });
};
exports.findUser = findUser;
//sign up users
const signUp = async (email, password) => {
    const salt = crypto_1.default.randomBytes(8).toString("hex");
    //create hash buffer
    const buff = await scrypt(password, salt, 64);
    const record = {
        email,
        password: `${buff.toString("hex")}.${salt}`,
    };
    return await auth_mongo_1.default.create(record);
};
exports.signUp = signUp;
const hashPasswords = () => { };
const comparePasswords = async (hashedPassword, password) => {
    const [hashed, salt] = hashedPassword.split(".");
    const hashSuppliedBuffer = await scrypt(password, salt, 64);
    return hashSuppliedBuffer.toString('hex') === hashed;
};
exports.comparePasswords = comparePasswords;
