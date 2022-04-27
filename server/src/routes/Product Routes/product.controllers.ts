import { RequestHandler } from "express";
import {
  fetchLatestProducts,
  fetchSingleProduct,
  fetchAllProducts,
  fetchFavouriteProducts,
} from "../../model/product.model";

//fetch single products
export const httpFetchSingleProduct: RequestHandler = async (req, res) => {
  const ID = req.params.product;
  if (!ID) {
    return res.status(400).json({ error: "ID is missing" });
  }
  const found = await fetchSingleProduct(ID);
  if (!found) {
    return res.status(404).json({ error: `item with id ${ID} was not found` });
  }
  return res.status(200).json(found);
};

//fetch all products
export const httpFetchAllProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchAllProducts());
};

//fetch latest products
export const httpFetchLatestProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchLatestProducts());
};

// fetch favourite products
export const httpFetchFavouriteProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFavouriteProducts());
};
