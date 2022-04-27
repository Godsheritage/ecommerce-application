import { RequestHandler } from "express";
import {
  fetchLatestProducts,
  fetchSingleProduct,
  fetchAllProducts,
  fetchFavouriteProducts,
} from "../../model/product.model";

//fetch single products
export const httpFetchSingleProduct: RequestHandler = async (req, res) => {
  const ID = req.params.product              
  // console.log(req.params)
  return res.status(200).json(await fetchSingleProduct(ID));
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
