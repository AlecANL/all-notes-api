"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHandler = exports.isValidate = void 0;
const joi_1 = __importDefault(require("joi"));
const boom_1 = __importDefault(require("@hapi/boom"));
function isValidate(data, schema) {
    const { error } = joi_1.default.object(schema).validate(data);
    return error;
}
exports.isValidate = isValidate;
function validateHandler(schema, check = 'body') {
    return (req, res, next) => {
        const isError = isValidate(req[check], schema);
        isError ? next(boom_1.default.badRequest(isError)) : next();
    };
}
exports.validateHandler = validateHandler;
//# sourceMappingURL=validate-handler.js.map