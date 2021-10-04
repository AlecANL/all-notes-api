"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
function notFoundHandler(req, res) {
    const { output } = boom_1.default.notFound();
    res.status(output.statusCode).json(output.payload);
}
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=note-found-handler.js.map