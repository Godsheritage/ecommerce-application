"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MOGO_URL = process.env.MONGO_URL;
const server = https_1.default.createServer({
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "key.pem")),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "cert.pem")),
}, app_1.default);
mongoose_1.default.connection.once("open", () => {
    console.log("Mongodb connection is ready");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(err);
});
const startServer = async () => {
    await mongoose_1.default.connect(MOGO_URL);
    server.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}...`);
    });
};
startServer();
