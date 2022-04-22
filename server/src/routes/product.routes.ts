import express from 'express'
import { httpFetchProducts } from './product.controllers';

const productRoute = express.Router()

productRoute.get('/', httpFetchProducts)

export default productRoute;
