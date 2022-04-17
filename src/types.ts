export interface productTypes {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface contextTypes {
  latestProduct: productTypes[];
  topSellingProducts : productTypes[];
  favouriteProducts : productTypes[];

}

export interface pageTopInfo {
  page : string;
  link : string;
}