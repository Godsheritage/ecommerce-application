import { RequestHandler } from "express";
import { fetchLatestProducts, fetchAllProducts, fetchFavouriteProducts} from "../../model/product.model";

//fetch all products
export const httpFetchAllProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchAllProducts());
};

//fetch latest products
export const httpFetchLatestProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchLatestProducts());
};

// fetch favourite products
export const httpFetchFavouriteProducts: RequestHandler = async (req, res) => {
  return res.json(await fetchFavouriteProducts());
};
