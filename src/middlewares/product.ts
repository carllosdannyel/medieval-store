import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IJoi } from '../interfaces/joi';
import { IProduct } from '../interfaces/product';
import mapError from '../utils/mapError';

const bodySchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'any.required': '"name" is required',
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(2).required().messages({
    'any.required': '"amount" is required',
    'string.base': '"amount" must be a string',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

function validateBody(product: IProduct): IJoi {
  const { error } = bodySchema.validate(product);
  if (error) {
    return { 
      type: error.details[0].type === 'any.required' ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY', 
      message: error.message,
    };
  }
  return { type: null, message: '' };
}

export default function productValidation(req: Request, res: Response, next: NextFunction) {
  const { type, message } = validateBody(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
}