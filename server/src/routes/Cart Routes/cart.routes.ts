import express from "express";
import { httpGetCartItems, httpPostCartItems } from "./cart.controllers";

const cartRoute = express.Router();

cartRoute.get("/", httpGetCartItems);
cartRoute.post("/", httpPostCartItems);

export default cartRoute;
