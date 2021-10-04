import { Router } from 'express';
import { validateHandler } from '../utils/middlewares/validate-handler';
import * as notesController from '../controllers/notes.controller';
import * as notesSchemas from '../utils/schemas/note.schema';

const notesRouter = Router();

notesRouter.get('/', notesController.getAllNotes);

notesRouter.get(
  '/:id',
  validateHandler({ id: notesSchemas.noteIdSchema }, 'params'),
  notesController.getNote
);

notesRouter.put(
  '/:id',
  validateHandler({ id: notesSchemas.noteIdSchema }, 'params'),
  validateHandler(notesSchemas.updateNoteSchema),
  notesController.updateNote
);

notesRouter.delete(
  '/:id',
  validateHandler({ id: notesSchemas.noteIdSchema }, 'params'),
  notesController.deleteNote
);

export { notesRouter };
