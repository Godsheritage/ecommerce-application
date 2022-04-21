
export interface productTypes {
  id: string;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity : number;
}

export interface contextTypes {
  cart: productTypes[];
  latestProduct: productTypes[];
  favouriteProducts: productTypes[];
  topSellingProducts: productTypes[];
  addToCart: (product: productTypes) => void;
  sum :  any
}

export interface pageTopInfo {
  page: string;
  link: string;
}