"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.wrapperError = exports.logErrors = exports.withErrorStack = void 0;
const config_1 = require("../../config/config");
const boom_1 = __importDefault(require("@hapi/boom"));
function withErrorStack(err, stack) {
    if (config_1.config.dev) {
        return Object.assign(Object.assign({}, err), { stack });
    }
    return err;
}
exports.withErrorStack = withErrorStack;
function logErrors(err, req, res, next) {
    next(new Error(err));
}
exports.logErrors = logErrors;
function wrapperError(err, req, res, next) {
    if (!err.isBoom) {
        next(boom_1.default.badImplementation(err));
    }
    next(err);
}
exports.wrapperError = wrapperError;
function errorHandler(err, req, res, next) {
    const { output } = err;
    console.log(output);
    res.status(output.statusCode || 500);
    res.json(withErrorStack(output.payload, err.stack));
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map