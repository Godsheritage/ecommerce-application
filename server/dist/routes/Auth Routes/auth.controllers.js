"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignIn = exports.httpSignup = void 0;
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
    const existingMail = await (0, auth_models_1.findUser)(email, password);
    if (existingMail !== null) {
        return res.status(400).json({
            error: "mail already exists",
        });
    }
    //sign the user up
    await (0, auth_models_1.signUp)(email, password);
    const newUser = await (0, auth_models_1.findUser)(email, password);
    req.session.userId = newUser._id;
    return res.status(201).json({
        message: "user has been created",
    });
};
exports.httpSignup = httpSignup;
const httpSignIn = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email);
    // console.log({
    //   email,
    //   password,
    // });
    //find user
    const user = await (0, auth_models_1.findUser)(email, password);
    if (user === null) {
        return res.status(400).json({
            error: "User not found",
        });
    }
    req.session.userId = user._id;
    return res.status(200).json(user);
};
exports.httpSignIn = httpSignIn;
//   return res.status(200).json(user);
// };
