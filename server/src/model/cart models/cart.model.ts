import cartItemDatabse from "./cart.mongo";

const cart = [];

//add items to cart  
export const addToCart = async (cartItem: any) => {
  await cartItemDatabse.create(cartItem);
};

//fetch cart Items
export const fetchCartItems = async () => {
  return await cartItemDatabse.find({}, { __v: 0 });
};
