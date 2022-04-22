import path from "path";
import express from "express";
import cartRoute from "./routes/Cart Routes/cart.routes";
import productRoute from "./routes/Product Routes/product.routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public ")));

app.use('/products' ,productRoute);

app.use('/cart' , cartRoute);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
