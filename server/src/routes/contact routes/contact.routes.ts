import express from "express";

const contactRoute = express.Router();

contactRoute.post("/", httpPostContact);

export default contactRoute;
