import express from 'express';
import CustomError from '../errors/CustomError';
import ValidationError from '../errors/validationError';
import NotFoundError from '../errors/notFoundError';

const errorHandlerMiddleware: express.ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    // Handle custom errors
    res.status(400).json({ error: err.message });
  } else if (err instanceof ValidationError) {
    // Handle validation errors
    res.status(422).json({ error: err.message });
  } else if (err instanceof NotFoundError) {
    // Handle not found errors
    res.status(404).json({ error: err.message });
  } else {
    // Handle other unexpected errors
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default errorHandlerMiddleware;
