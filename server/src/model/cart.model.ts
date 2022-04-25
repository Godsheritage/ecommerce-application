import cartItemDatabse from "./cart.mongo";

const cart = [];


export const addToCart = (cartItem: any) => {
  cartItemDatabse.create(cartItem);
};
