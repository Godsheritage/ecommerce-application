import { RequestHandler } from "express";
import { addToCart, fetchCartItems } from "../../model/cart.model";

//post cart items controller
export const httpPostCartItems: RequestHandler = async (req, res) => {
  const cartItem = req.body;
  await addToCart(cartItem);
  return res.status(201).json(cartItem);
};

//fetch cart items controller
export const httpGetCartItems: RequestHandler = async (req, res) => {
  res.status(200).json(await fetchCartItems());
};
