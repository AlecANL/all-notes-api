import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote,
} from '../controllers/notes.controller';
import { Router } from 'express';
import { validateHandler } from '../utils/middlewares/validate-handler';
import { noteIdSchema } from '../utils/schemas/note.schema';

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.get(
  '/:id',
  validateHandler({ id: noteIdSchema }, 'params'),
  getNote
);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

export { notesRouter };
