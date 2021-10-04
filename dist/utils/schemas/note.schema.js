"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteCollection = exports.noteSchema = exports.updateNoteSchema = exports.createNoteSchema = exports.noteIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
exports.noteIdSchema = joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/);
const noteBodySchema = joi_1.default.string().min(5);
const isPrivate = joi_1.default.boolean();
const userSchema = joi_1.default.any();
exports.createNoteSchema = {
    note: noteBodySchema.required(),
    isPrivate: isPrivate.required(),
    user: userSchema,
};
exports.updateNoteSchema = {
    note: noteBodySchema,
    isPrivate: isPrivate,
    user: userSchema,
};
exports.noteSchema = new mongoose_1.Schema({
    note: String,
    isPrivate: Boolean,
    user: Object || null,
});
exports.noteSchema.set('toJSON', {
    transform: (document, ObjectReturned) => {
        ObjectReturned.id = ObjectReturned._id;
        delete ObjectReturned._id;
        delete ObjectReturned.__v;
    },
});
exports.NoteCollection = (0, mongoose_1.model)('Note', exports.noteSchema);
//# sourceMappingURL=note.schema.js.map