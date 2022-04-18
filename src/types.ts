export interface productTypes {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface contextTypes {
  cart:productTypes[]
  latestProduct: productTypes[];
  favouriteProducts: productTypes[];
  topSellingProducts: productTypes[];
  addToCart : (product : productTypes) => void
}

export interface pageTopInfo {
  page: string;
  link: string;
}
