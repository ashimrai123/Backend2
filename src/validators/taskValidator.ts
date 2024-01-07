import Joi from 'joi';

export const getAllTasksSchema = Joi.object({
  completed: Joi.boolean(),
});

export const createTaskSchema = Joi.object({
    title: Joi.string().required().min(3).max(50).trim(),
});
