import { RequestHandler } from "express";
import { addToCart, fetchCartItems } from "../../model/cart.model";

//post cart items controller
export const httpPostCartItems: RequestHandler = (req, res) => {
  const cartItem = req.body;
  addToCart(cartItem);
  return res.status(201).json(cartItem);
};

//geet cart items controller
export const httpGetCartItems: RequestHandler = async (req, res) => {
  res.status(200).json( await fetchCartItems());
};
