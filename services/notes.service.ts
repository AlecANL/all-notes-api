import { INotes, IPostNote } from '../types/notes.types';
import { notesSchemas } from '../utils/mocks/notes.schema';
import MongoLib from '../lib/mongo';
import { INoteSchema, NoteCollection } from '../utils/schemas/note.schema';
import { Model } from 'mongoose';

class NotesService {
  private collection: Model<INoteSchema>;
  private mongoDB: MongoLib;
  constructor() {
    this.collection = NoteCollection;
    this.mongoDB = new MongoLib();
  }
  async getNotes() {
    const notes: any = await this.mongoDB.getAll(this.collection);
    return notes || [];
  }
  async getNote(id: string) {
    const note: any = await this.mongoDB.get(this.collection, id);
    return note || null;
  }
  async createNote(note: IPostNote) {
    const noteCreated: any = await this.mongoDB.create(this.collection, note);
    return noteCreated;
  }
  async updateNote(note: IPostNote, id: string) {
    const noteUpdated = await this.mongoDB.update(this.collection, note, id);
    return noteUpdated || null;
  }
  async deleteNote(id: string) {
    const noteDeleted = await this.mongoDB.delete(this.collection, id);
    return noteDeleted;
  }
}

export default new NotesService();
