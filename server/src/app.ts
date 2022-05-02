import cors from "cors";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import cookieSession from "cookie-session";
import passport, { Profile, session } from "passport";
import cartRoute from "./routes/Cart Routes/cart.routes";
import contactRoute from "./routes/contact routes/contact.routes";
import productRoute from "./routes/Product Routes/product.routes";
import {
  Strategy,
  StrategyOptionsWithRequest,
  VerifyCallback,
} from "passport-google-oauth20";
dotenv.config();


const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
// app.use(helmet());
app.use("/cartitems", cartRoute);
app.use("/Contact", contactRoute);
app.use("/products", productRoute);

//confign options
const CONFIG: any = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_SECRET_1: process.env.COOKIE_SECRET_1,
  COOKIE_SECRET_2: process.env.COOKIE_SECRET_2,
};


//passport authentication options
const AUTH_OPTIONS: any = {
  clientID: CONFIG.CLIENT_ID,
  clientSecret: CONFIG.CLIENT_SECRET,
  callbackURL: "https://localhost:5000/auth/google/callback",
};

app.use(
  cookieSession({
    name: "session",
    keys: [CONFIG.COOKIE_SECRET_1, CONFIG.COOKIE_SECRET_2],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

const verifyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
app.use(passport.initialize());

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

//read the session from the cookie
passport.deserializeUser((id: any, done) => {
  done(null, id);
});

app.use(passport.initialize());

app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  })
);

app.get("/failure", (req, res) => {
  return res.status(400).json({
    error: "Failed to login",
  });
});

app.use(express.static(path.join(__dirname, "..", "public ")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
