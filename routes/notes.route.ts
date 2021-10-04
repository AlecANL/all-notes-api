import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote,
} from '../controllers/notes.controller';
import { Router } from 'express';
import { validateHandler } from '../utils/middlewares/validate-handler';
import {
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../utils/schemas/note.schema';

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.get(
  '/:id',
  validateHandler({ id: noteIdSchema }, 'params'),
  getNote
);
notesRouter.post('/', validateHandler(createNoteSchema), createNote);
notesRouter.put(
  '/:id',
  validateHandler({ id: noteIdSchema }, 'params'),
  validateHandler(updateNoteSchema),
  updateNote
);
notesRouter.delete(
  '/:id',
  validateHandler({ id: noteIdSchema }, 'params'),
  deleteNote
);

export { notesRouter };
