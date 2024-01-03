import CustomError from './CustomError';

class NotFoundError extends CustomError {
  constructor(message = 'Not Found') {
    super(message);
  }
}

export default NotFoundError;
