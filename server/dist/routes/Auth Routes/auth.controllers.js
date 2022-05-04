"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignOut = exports.httpSignIn = exports.httpSignup = void 0;
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
    const existingMail = await (0, auth_models_1.findUser)(email);
    if (existingMail !== null) {
        return res.status(400).json({
            error: "mail already exists",
        });
    }
    //sign the user up
    await (0, auth_models_1.signUp)(email, password);
    const newUser = await (0, auth_models_1.findUser)(email);
    req.session.userId = newUser._id;
    return res.status(201).json({
        message: "user has been created",
    });
};
exports.httpSignup = httpSignup;
const httpSignIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    //find user
    const user = await (0, auth_models_1.findUser)(email);
    if (user === null) {
        return res.status(404).json({
            error: "User not found",
        });
    }
    if (user.password !== password) {
        return res.status(400).json({
            error: "Incorrect password",
        });
    }
    req.session.userId = user._id;
    return res.status(200).json(user);
};
exports.httpSignIn = httpSignIn;
const httpSignOut = (req, res) => {
    req.session = null;
    return res.status(200).redirect('/');
};
exports.httpSignOut = httpSignOut;
