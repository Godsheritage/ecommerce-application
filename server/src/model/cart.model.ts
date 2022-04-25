import cartItemDatabse from "./cart.mongo";

const cart = [];

const addCartItem = (cartItem: any) => {
  cartItemDatabse.updateOne(cartItem);
};
