import Joi from 'joi';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const users: User[] = [];

export const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
