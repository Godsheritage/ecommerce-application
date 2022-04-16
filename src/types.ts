export interface productTypes {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface contextTypes {
  latestProduct: productTypes[];
  topSellingProducts : productTypes[];
}
