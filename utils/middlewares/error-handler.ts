import { config } from '../../config/config';
import { Request, Response, NextFunction } from 'express';
import boom, { Boom } from '@hapi/boom';

type customError = Error | Boom | any;
type TErrorHandlerProps = {
  err: customError;
  req: Request;
  res: Response;
  next: NextFunction;
};

export function withErrorStack(err: customError, stack: string) {
  if (config.dev) {
    return {
      ...err,
      stack,
    };
  }
  return err;
}

export function logErrors(
  err: customError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(new Error(err));
}

export function wrapperError(
  err: customError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

export function errorHandler(
  err: customError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { output } = err;
  console.log(output);
  res.status(output.statusCode || 500);
  res.json(withErrorStack(output.payload, err.stack));
}
