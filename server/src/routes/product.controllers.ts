import { RequestHandler } from "express";
import { fetchProducts } from "../model/product.model";

export const httpFetchProducts: RequestHandler = async (req, res) => {
  res.json(
    await fetchProducts()
  );
};
