import { RequestHandler } from "express";
import { fetchLatestProducts, fetchAllProducts, fetchFavouriteProducts} from "../model/product.model";

export const httpFetchAllProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchAllProducts());
};

export const httpFetchLatestProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchLatestProducts());
};

export const httpFetchFavouriteProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchFavouriteProducts());
};
