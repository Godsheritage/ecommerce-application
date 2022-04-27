export interface productTypes {
  _id: string;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
  category: string;
}

export interface contextTypes {
  cart: productTypes[];
  latestProducts: productTypes[];
  favouriteProducts: productTypes[];
  allProducts: productTypes[];
  // topSellingProducts: productTypes[];
  addToCart: (product: productTypes) => void;
  fetchSingleProduct: (_id: any) => Promise<void>;
  singleProduct: productTypes;
  sum: any;

  // products : productTypes[]
}

export interface pageTopInfo {
  page: string;
  link: string;
}

export interface FILTER_MENU_TYPES {
  name: string;
  link: string;
}
