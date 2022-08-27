import cartItemDatabse from "./cart.mongo";

const cart = [];

//ADD ITEMS TO THE CART
export const addToCart = async (cartItem: any) => {
  await cartItemDatabse.create(cartItem);
};

//FETCH CART ITEMS
export const fetchCartItems = async () => {
  return await cartItemDatabse.find({}, { __v: 0 });
};
