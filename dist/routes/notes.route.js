"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = require("express");
const validate_handler_1 = require("../utils/middlewares/validate-handler");
const notesController = __importStar(require("../controllers/notes.controller"));
const notesSchemas = __importStar(require("../utils/schemas/note.schema"));
const notesRouter = (0, express_1.Router)();
exports.notesRouter = notesRouter;
notesRouter.get('/', notesController.getAllNotes);
notesRouter.get('/:id', (0, validate_handler_1.validateHandler)({ id: notesSchemas.noteIdSchema }, 'params'), notesController.getNote);
notesRouter.put('/:id', (0, validate_handler_1.validateHandler)({ id: notesSchemas.noteIdSchema }, 'params'), (0, validate_handler_1.validateHandler)(notesSchemas.updateNoteSchema), notesController.updateNote);
notesRouter.delete('/:id', (0, validate_handler_1.validateHandler)({ id: notesSchemas.noteIdSchema }, 'params'), notesController.deleteNote);
//# sourceMappingURL=notes.route.js.map