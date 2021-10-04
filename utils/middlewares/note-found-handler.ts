import boom from '@hapi/boom';
import { Request, Response } from 'express';

export function notFoundHandler(req: Request, res: Response) {
  const { output } = boom.notFound();
  res.status(output.statusCode).json(output.payload);
}
