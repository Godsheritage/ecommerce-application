import express from "express";
import httpPostContact from "./cart.controller";

const contactRoute = express.Router();

contactRoute.post("/", httpPostContact);

export default contactRoute;
