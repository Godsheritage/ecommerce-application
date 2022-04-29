import cors from "cors";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import passport, { Profile, session } from "passport";
import dotenv, { config } from "dotenv";
import {
  Strategy,
  StrategyOptionsWithRequest,
  VerifyCallback,
} from "passport-google-oauth20";
import cartRoute from "./routes/Cart Routes/cart.routes";
import contactRoute from "./routes/contact routes/contact.routes";
import productRoute from "./routes/Product Routes/product.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(helmet());
app.use("/cartitems", cartRoute);
app.use("/Contact", contactRoute);
app.use("/products", productRoute);

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS: any = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: "https://localhost:5000/auth/google/callback",
};

const verifyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

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

app.get("failure", (req, res) => {
  return res.status(400).json({
    error: "Failed to login",
  });
});

app.use(express.static(path.join(__dirname, "..", "public ")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
