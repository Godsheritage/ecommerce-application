"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignup = void 0;
const auth_models_1 = require("../../model/auth models/auth.models");
// import cookieSession from "cookie-session";
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
    if (existingMail !== null) {
        return res.status(400).json({
            error: "mail already exists",
        });
    }
    //sign the user up
    await (0, auth_models_1.signUp)(email, password);
    const newMail = await (0, auth_models_1.findMail)(email);
    req.session.userId = newMail._id;
    return res.status(201).json({
        message: "user has been created",
    });
};
exports.httpSignup = httpSignup;
