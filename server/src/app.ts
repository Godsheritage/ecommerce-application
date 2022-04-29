import cors from 'cors'
import path from "path";
import morgan from "morgan";
import express from "express";
import cartRoute from "./routes/Cart Routes/cart.routes";
import contactRoute from "./routes/contact routes/contact.routes";
import productRoute from "./routes/Product Routes/product.routes";

const app = express();

app.use(cors())
app.use(morgan("combined"));
app.use(express.json());
app.use("/cartitems", cartRoute);
app.use("/Contact", contactRoute);
app.use("/products", productRoute);

app.use(express.static(path.join(__dirname, "..", "public ")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
