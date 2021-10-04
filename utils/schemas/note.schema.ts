import joi, { boolean, object, string } from 'joi';
import { Schema, model, SchemaDefinitionProperty } from 'mongoose';

export const noteIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const noteBodySchema = joi.string().min(5);
const isPrivate = joi.boolean();
const userSchema = joi.object();

export const createNoteSchema = {
  note: noteBodySchema.required(),
  isPrivate: isPrivate.required(),
  user: userSchema,
};

interface INoteSchema {
  note: string;
  isPrivate: boolean;
  user: object | null;
}

export const noteSchema = new Schema({
  note: string,
  isPrivate: boolean,
});

// export const NoteCollection = model<INoteSchema>('notes', noteSchema);
