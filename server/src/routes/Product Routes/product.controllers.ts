import { RequestHandler } from "express";
import {
  fetchLatestProducts,
  fetchSingleProduct,
  fetchAllProducts,
  fetchFavouriteProducts,
} from "../../model/products models/product.model";

//FETCH SINGLE PRODUCTS
export const httpFetchSingleProduct: RequestHandler = async (req, res) => {
  const ID = req.params.product;
  const found = await fetchSingleProduct(ID);
  if (!found) {
    return res.status(404).json({ error: `item with id ${ID} was not found` });
  }
  return res.status(200).json(found);
};

//FETCH ALL PRODUCTS
export const httpFetchAllProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchAllProducts());
};

//FETCH LATEST PRODUCTS
export const httpFetchLatestProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchLatestProducts());
};

// FETCH FAVOURITE PRODUCTS
export const httpFetchFavouriteProducts: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFavouriteProducts());
};
