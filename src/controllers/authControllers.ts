// src/controllers/authController.ts
import { Request, Response } from 'express';
import authService from '../services/authService';

export const signup = async (req: Request, res: Response) => {
  try {
    // Validate input data (e.g., using Joi or other validation library)

    // Call authService to create a new user
    const user = await authService.signup(req.body);

    // Send a successful response with user data
    res.json({ user });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
