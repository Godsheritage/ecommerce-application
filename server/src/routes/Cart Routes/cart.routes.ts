import express from "express";
import { httpGetCartItems } from "./cart.controllers";

const cartRoute = express.Router();

//get all the cart items
cartRoute.get("/", httpGetCartItems);

export default cartRoute;
