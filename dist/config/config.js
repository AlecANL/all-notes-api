"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    dev: process.env.NODE_ENV !== 'production',
    dbCluster: process.env.DB_CLUSTER,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbUSer: process.env.DB_USER,
    port: process.env.PORT || 3001,
};
//# sourceMappingURL=config.js.map