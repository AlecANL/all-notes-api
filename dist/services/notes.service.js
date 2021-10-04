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
const mongo_1 = __importDefault(require("../lib/mongo"));
const note_schema_1 = require("../utils/schemas/note.schema");
class NotesService {
    constructor() {
        this.collection = note_schema_1.NoteCollection;
        this.mongoDB = new mongo_1.default();
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield this.mongoDB.getAll(this.collection);
            return notes || [];
        });
    }
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield this.mongoDB.get(this.collection, id);
            return note || null;
        });
    }
    createNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteCreated = yield this.mongoDB.create(this.collection, note);
            return noteCreated;
        });
    }
    updateNote(note, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteUpdated = yield this.mongoDB.update(this.collection, note, id);
            return noteUpdated || null;
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteDeleted = yield this.mongoDB.delete(this.collection, id);
            return noteDeleted;
        });
    }
}
exports.default = new NotesService();
//# sourceMappingURL=notes.service.js.map