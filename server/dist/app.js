"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("passport"));
const cart_routes_1 = __importDefault(require("./routes/Cart Routes/cart.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact routes/contact.routes"));
const product_routes_1 = __importDefault(require("./routes/Product Routes/product.routes"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
// app.use(helmet());
app.use("/cartitems", cart_routes_1.default);
app.use("/Contact", contact_routes_1.default);
app.use("/products", product_routes_1.default);
const CONFIG = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_SECRET_1: process.env.COOKIE_SECRET_1,
    COOKIE_SECRET_2: process.env.COOKIE_SECRET_2,
};
const AUTH_OPTIONS = {
    clientID: CONFIG.CLIENT_ID,
    clientSecret: CONFIG.CLIENT_SECRET,
    callbackURL: "https://localhost:5000/auth/google/callback",
};
app.use((0, cookie_session_1.default)({
    name: "session",
    keys: [CONFIG.COOKIE_SECRET_1, CONFIG.COOKIE_SECRET_2],
    maxAge: 24 * 60 * 60 * 1000,
}));
const verifyCallback = (accessToken, refreshToken, profile, done) => { };
passport_1.default.use(new passport_google_oauth20_1.Strategy(AUTH_OPTIONS, verifyCallback));
app.use(passport_1.default.initialize());
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
//read the session from the cookie
passport_1.default.deserializeUser((id, done) => {
    done(null, id);
});
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get("/auth/google", passport_1.default.authenticate("google", { scope: ["email", "profile"] }));
app.get("/auth/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
}));
app.get("/failure", (req, res) => {
    return res.status(400).json({
        error: "Failed to login",
    });
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
exports.default = app;
