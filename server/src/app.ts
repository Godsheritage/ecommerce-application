import express from "express";
import path from "path";
const app = express();

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/product", (req, res) => {
  res.json({
    msg: "here",
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
