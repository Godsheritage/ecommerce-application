"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("./app"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MOGO_URL = process.env.MONGO_URL;
//create the server
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
//start the server 
const startServer = async () => {
    // await mongoose.connect(MOGO_URL);  
    server.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}...`);
    });
};
startServer();
