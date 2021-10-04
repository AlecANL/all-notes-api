import { NextFunction, Request, Response } from 'express';
import notesService from '../services/notes.service';
import { INotes } from '../types/notes.types';

export async function getAllNotes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const notes = await notesService.getNotes();
    res.status(200).json({
      notes,
      message: 'get All Notes',
    });
  } catch (error) {
    next(error);
    throw new Error(`whoops app crashed trying getAllNotes`);
  }
}

export async function getNote(req: Request, res: Response, next: NextFunction) {
  const id = req.params;
  try {
    const note = await notesService.getNote(`${id}`);
    res.status(200).json({
      note,
      message: 'get Note',
    });
  } catch (error) {
    next(error);
    throw new Error(`whoops app crashed trying getNote`);
  }
}

export async function createNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const note = req.body;
  try {
    const noteCreated: INotes = await notesService.createNote(note);
    res.status(201).json({
      note: noteCreated,
      message: 'get Note',
    });
  } catch (error) {
    next(error);
    throw new Error(`whoops app crashed trying getNote`);
  }
}

export async function updateNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params;
  const noteDidUpdated = req.body;
  try {
    const note = await notesService.updateNote(noteDidUpdated, `${id}`);
    res.status(200).json({
      note,
      message: 'get Note',
    });
  } catch (error) {
    next(error);
    throw new Error(`whoops app crashed trying updateNote`);
  }
}

export async function deleteNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params;
  try {
    const note = await notesService.getNote(`${id}`);
    res.status(200).json({
      note,
      message: 'get Note',
    });
  } catch (error) {
    next(error);
    throw new Error(`whoops app crashed trying getNote`);
  }
}
