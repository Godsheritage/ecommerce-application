import https from "https";
import fs from "fs";
import path from "path";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const MOGO_URL: any = process.env.MONGO_URL;

// console.log(MOGO_URL)

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "..", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert.pem")),
  },
  app
);

mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const startServer = async () => {
  await mongoose.connect(MOGO_URL);

  server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
  });
};

startServer()
