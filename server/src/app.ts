import path from "path";
import express from "express";
import productRoute from "./routes/product.routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public ")));

app.use('/products' ,productRoute);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
