import joi, { boolean, object, string } from 'joi';
import { Schema, model, SchemaDefinitionProperty } from 'mongoose';

export const noteIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const noteBodySchema = joi.string().min(5);
const isPrivate = joi.boolean();
const userSchema = joi.any();

export const createNoteSchema = {
  note: noteBodySchema.required(),
  isPrivate: isPrivate.required(),
  user: userSchema,
};

export const updateNoteSchema = {
  note: noteBodySchema,
  isPrivate: isPrivate,
  user: userSchema,
};
export type INoteSchema = {
  note: string;
  isPrivate: boolean;
  user: object | null;
};

export const noteSchema: Schema = new Schema({
  note: String,
  isPrivate: Boolean,
  user: Object || null,
});

noteSchema.set('toJSON', {
  transform: (document, ObjectReturned) => {
    ObjectReturned.id = ObjectReturned._id;
    delete ObjectReturned._id;
    delete ObjectReturned.__v;
  },
});

export const NoteCollection = model<INoteSchema>('Note', noteSchema);
