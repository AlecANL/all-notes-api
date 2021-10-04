"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getNote = exports.getAllNotes = void 0;
const notes_service_1 = __importDefault(require("../services/notes.service"));
function getAllNotes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notes = yield notes_service_1.default.getNotes();
            res.status(200).json({
                notes,
                message: 'get All Notes',
            });
        }
        catch (error) {
            next(error);
            throw new Error(`whoops app crashed trying getAllNotes`);
        }
    });
}
exports.getAllNotes = getAllNotes;
function getNote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const note = yield notes_service_1.default.getNote(id);
            res.status(200).json({
                note,
                message: note ? 'get Note' : 'note not found',
            });
        }
        catch (error) {
            next(error);
            throw new Error(`whoops app crashed trying getNote`);
        }
    });
}
exports.getNote = getNote;
function createNote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const note = req.body;
        try {
            const noteCreated = yield notes_service_1.default.createNote(note);
            res.status(201).json({
                note: noteCreated,
                message: 'Note Crated',
            });
        }
        catch (error) {
            next(error);
            throw new Error(`whoops app crashed trying getNote`);
        }
    });
}
exports.createNote = createNote;
function updateNote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const noteDidUpdated = req.body;
        try {
            const note = yield notes_service_1.default.updateNote(noteDidUpdated, `${id}`);
            res.status(200).json({
                note,
                message: note ? 'note updated' : 'whoops note cannot update',
            });
        }
        catch (error) {
            next(error);
            throw new Error(`whoops app crashed trying updateNote`);
        }
    });
}
exports.updateNote = updateNote;
function deleteNote(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const note = yield notes_service_1.default.deleteNote(`${id}`);
            res.status(200).json({
                note,
                message: note ? 'note deleted' : 'whoops note cannot deleted',
            });
        }
        catch (error) {
            next(error);
            throw new Error(`whoops app crashed trying getNote`);
        }
    });
}
exports.deleteNote = deleteNote;
//# sourceMappingURL=notes.controller.js.map