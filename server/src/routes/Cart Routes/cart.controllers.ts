import { RequestHandler } from "express";
import { addToCart } from "../../model/cart.model";

export const httpPostCartItems: RequestHandler = (req, res) => {
  const cartItem = req.body;
  addToCart(cartItem);
  return res.status(201).json(cartItem);
};

export const httpGetCartItems: RequestHandler = (req, res) => {
  res.json({
    cart: "cartItems",
  });
};
