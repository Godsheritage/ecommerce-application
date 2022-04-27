import productDataDatabse from "./product.mongo";

const latestProduct = [
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669572815131393_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669574048042416_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669574048042416_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669574268113464_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669575675443342_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669575409614831_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669575409614831_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.romwe.com/images/romwe.com/201703/1490669575675443342_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },

  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/1628562563e7203d755a20bf3dc6cfbf76e769c294_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/162856256277ebd20d71cf601db828797d23e6702e_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/1628562559606e32f8888d5b1afa3153dfbe16257c_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/16285625577f53b4032c89724f27993c6aa0e13814_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/09/23/1600840697a7f57c018b4b8603ae18767c8e7ba0c8_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/09/23/160084070636e87f85575287a57f709a6fe9a911fb_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/09/23/1600840702148dbf7208470e24db3541cf5261c7f3_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/09/23/1600840700134caeafc78f53f4b51cbbd88e568ef9_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },

  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/11/02/160428419151111c0092668dc7c683f7a47448f1b8_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/11/02/160428418721d1a32468afeb38b1a3937669ea666a_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Flamboyant Pink Top",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/01/05/1609840017cd8cfcbc304b22a0336f6ce4ba1daf85_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 35.0,
    category: "tops, jumpsuits",
  },
  {
    name: "Black and White Stripes Dress",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/01/05/160984002842a0a35c831a9d39450173240ffe1e79_thumbnail_900x.webp",
    size: "M",
    quantity: 1,
    price: 45.0,
    category: "tops, jumpsuits",
  },
];

export const sendProductToMongo = async () => {
  await productDataDatabse.create(latestProduct);
};
//send products to mongodb
// sendProductToMongo()

//fetch single products from mongo
export const fetchSingleProduct = async (ID: string) => {
  return await productDataDatabse.findOne({_id : ID}, { __v: 0 });
};

//fetch latest products from mongo
export const fetchLatestProducts = async () => {
  return await productDataDatabse.find({}, { __v: 0 }).limit(8);
};

//fetch favourite products from mongo
export const fetchFavouriteProducts = async () => {
  return await productDataDatabse.find({}, { __v: 0 }).limit(4);
};

//fetch All products from mongo
export const fetchAllProducts = async () => {
  return await productDataDatabse.find({}, { __v: 0 });
};
