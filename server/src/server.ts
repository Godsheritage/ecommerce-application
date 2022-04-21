import https from "https";
import fs from "fs";
import path from "path";
import app from "./app";

const PORT = process.env.PORT || 5000;

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "..", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert.pem")),
  },
  app
);

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
