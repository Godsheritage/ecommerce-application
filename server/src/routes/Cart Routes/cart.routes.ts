import express from "express";
import { httpGetCartItems, httpPostCartItems } from "./cart.controllers";

const cartRoute = express.Router();

//get all the cart items
cartRoute.post("/", httpPostCartItems);
cartRoute.get("/", httpGetCartItems);

export default cartRoute;
