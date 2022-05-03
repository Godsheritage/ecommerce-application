"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignup = void 0;
const httpSignup = (req, res) => {
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
    const checkIfMailExists = ;
};
exports.httpSignup = httpSignup;
