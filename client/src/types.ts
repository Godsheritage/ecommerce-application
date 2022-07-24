//front end types

export interface productTypes {
  _id: string;
  title: string;
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
  signUsersUp: (credentials: signUpTypes) => Promise<void>;
  signUsersIn: (credentials: signInTypes) => Promise<void>;
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

export interface contactDataTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface signUpTypes {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface signInTypes {
  email: string;
  password: string;
}

export interface SIGN_IN_VALIDATION_TYPES {
  inputs: {
    userName: {
      value: string;
      isValid: boolean;
    };
    password: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}
