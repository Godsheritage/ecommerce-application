import productDataDatabse from "./product.mongo";
// import {productTypes} from '../../../../types'

let products:any = []

//send products to mongo
export const sendProductToMongo = async () => {
  await productDataDatabse.create(products);
};

// sendProductToMongo()

//fetch All products from mongo 
export const fetchAllProducts = async () => {
  return await productDataDatabse.find({}, { __v: 0 });
};

//fetch single products from mongo
export const fetchSingleProduct = async (ID: string) => {
  return await productDataDatabse.findOne({_id : ID}, { __v: 0 });
};

//fetch latest products from mongo
export const fetchLatestProducts = async () => {
  return await productDataDatabse.find({}, { __v: 0 }).limit(8);
};

//fetch favourite products from mongo
export const fetchFavouriteProducts = async () => {  
  return await productDataDatabse.find({}, { __v: 0 }).limit(4);
};

