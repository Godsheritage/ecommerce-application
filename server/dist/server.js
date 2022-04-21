"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5000;
const server = https_1.default.createServer({
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "key.pem")),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "cert.pem")),
}, app_1.default);
server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});
