import express from 'express'

const cartRoute = express.Router()

//get all the cart items
cartRoute.get('/', httpGetCartItems)

export default cartRoute