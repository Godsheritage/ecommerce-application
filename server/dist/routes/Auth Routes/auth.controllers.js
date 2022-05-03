"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignup = void 0;
const auth_models_1 = require("../../model/auth models/auth.models");
const httpSignup = async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
        return res.status(400).json({
            error: "missing fields",
        });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({
            error: "passwords don't match",
        });
    }
    //check if mail exists
    const existingMail = await (0, auth_models_1.findMail)(email);
    if (existingMail) {
        return res.status(400).json({
            err: "mail already exists",
        });
    }
    await (0, auth_models_1.signUp)(email, password);
    // const checkIfMailExists =
};
exports.httpSignup = httpSignup;
