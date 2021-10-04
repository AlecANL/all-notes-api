import joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

export function isValidate(data: any, schema: any) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

export function validateHandler(schema: any, check: string = 'body') {
  return (req: any, res: Response, next: NextFunction) => {
    const isError: any = isValidate(req[check], schema);
    isError ? next(boom.badRequest(isError)) : next();
  };
}
