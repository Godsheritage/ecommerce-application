"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// where the schema will be stored
const authSchema = new mongoose_1.default.Schema({
    email: { type: Number, required: true },
    password: { type: Date, required: true },
});
//connect launchesSchema with the launches collection
const userDatabase = mongoose_1.default.model("credential", authSchema);
exports.default = userDatabase;
