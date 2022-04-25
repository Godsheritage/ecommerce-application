import { RequestHandler } from "express";

export const httpPostCartItems: RequestHandler = (req, res) => {
    const cartItem = req.body;


  res.json({
    cart: "cartItems",
  });
};


export const httpGetCartItems: RequestHandler = (req, res) => {
  res.json({
    cart: "cartItems",
  });
};
