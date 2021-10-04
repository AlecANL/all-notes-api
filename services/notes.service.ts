import { INotes, IPostNote } from '../types/notes.types';
import { notesSchemas } from '../utils/mocks/notes.schema';

class NotesService {
  private collection: string;
  constructor() {
    this.collection = 'Notes';
  }
  async getNotes() {
    const notes: INotes[] = await Promise.resolve(notesSchemas);
    return notes;
  }
  async getNote(id: string) {
    const note: INotes = await Promise.resolve(notesSchemas[0]);
    return note;
  }
  async createNote(note: any) {
    const noteCreated: INotes = await Promise.resolve(notesSchemas[0]);
    return noteCreated;
  }
  async updateNote(note: IPostNote, id: string) {
    const noteUpdated = await Promise.resolve(notesSchemas[0]);
    return noteUpdated;
  }
  async deleteNote(note: IPostNote) {
    const noteDeleted = await Promise.resolve(notesSchemas[0]);
    return noteDeleted;
  }
}

export default new NotesService();
