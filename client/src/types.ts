
export interface productTypes {
  _id: string;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity : number;
  category : string;
}

export interface contextTypes {
  cart: productTypes[];
  // latestProduct: productTypes[];
  // favouriteProducts: productTypes[];
  // topSellingProducts: productTypes[];
  addToCart: (product: productTypes) => void;
  sum :  any
  products : productTypes[]

}

export interface pageTopInfo {
  page: string;
  link: string;
}
