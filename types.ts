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
  sum: any;
  cart: productTypes[];
  singleProduct: productTypes;
  latestProducts: productTypes[];
  favouriteProducts: productTypes[];
  allProducts: productTypes[];
  // topSellingProducts: productTypes[];
  addToCart: (product: productTypes) => void;
  fetchSingleProduct: (_id: any) => Promise<void>;
  submitContact: (data: any) => Promise<void>;

  // products : productTypes[]
}

export interface FILTER_MENU_TYPES {
  name: string;
  link: string;
}

export interface PRODUCT_TOP_INFO_TYPES {
  page: string;
  link: string;
}

export interface PRODUCT_SECTION_TYPES {
  products: productTypes[];
  header?: string;
  style?: any;
}

// Backend types

interface contactDataTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}
