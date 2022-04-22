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
];

export const sendProductToMongo = async () => {
    // await productDataDatabse.updateMany(latestProduct, {
    //   upsert: true,
    // });
//   console.log("hey");
  await productDataDatabse.create(latestProduct);
};

sendProductToMongo();

export const fetchProducts = async () => {
  return await productDataDatabse.find({});
};

