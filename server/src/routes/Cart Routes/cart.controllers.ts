import { RequestHandler } from "express";

export const httpGetCartItems: RequestHandler = (req, res) => {
  res.json({
    cart: "cartItems",
  });
};
