import express from "express";
import { httpGetCartItems, httpPostCartItems } from "./cart.controllers";

const cartRoute = express.Router();

//get all the cart items
cartRoute.get("/", httpGetCartItems);
cartRoute.post("/", httpPostCartItems);

export default cartRoute;
