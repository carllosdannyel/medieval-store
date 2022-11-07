import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IJoi } from '../interfaces/joi';
import { IUserLogin } from '../interfaces/login';
import mapError from '../utils/mapError';

const bodySchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': '"password" is required',
  }),
});

function validateBody(user: IUserLogin): IJoi {
  const { error } = bodySchema.validate(user);
  if (error) return { type: 'BAD_REQUEST', message: error.message };
  return { type: null, message: '' };
}

export default function userValidation(req: Request, res: Response, next: NextFunction) {
  const { type, message } = validateBody(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
}