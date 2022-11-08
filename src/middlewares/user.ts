import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IJoi } from '../interfaces/joi';
import { IUser } from '../interfaces/user';
import mapError from '../utils/mapError';

const bodySchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': '"username" is required',
    'string.base': '"username" must be a string',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': '"classe" is required',
    'string.base': '"classe" must be a string',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': '"level" is required',
    'number.base': '"level" must be a number',
    'number.min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': '"password" is required',
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

function validateBody(user: IUser): IJoi {
  const { error } = bodySchema.validate(user);
  if (error) {
    return { 
      type: error.details[0].type === 'any.required' ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY', 
      message: error.message,
    };
  }
  return { type: null, message: '' };
}

export default function userValidation(req: Request, res: Response, next: NextFunction) {
  const { type, message } = validateBody(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
}
