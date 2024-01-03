import CustomError from './CustomError';

class ValidationError extends CustomError {
  constructor(message = 'Validation Error') {
    super(message);
  }
}

export default ValidationError;
