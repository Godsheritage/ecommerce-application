import express from "express";
import httpPostContact from "./contact.controller";

const contactRoute = express.Router();

contactRoute.post("/", httpPostContact);

export default contactRoute;
