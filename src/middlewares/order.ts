import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IJoi } from '../interfaces/joi';
import { IProductsIds } from '../interfaces/product';
import mapError from '../utils/mapError';

const bodySchema = Joi.object({
  productsIds: Joi.array().min(1).required().messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  }),
});

function validateBody({ productsIds }: IProductsIds): IJoi {
  const { error } = bodySchema.validate({ productsIds });
  if (error) {
    console.log(error);
    
    return { 
      type: error.details[0].type === 'any.required' ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY', 
      message: error.message,
    };
  }
  return { type: null, message: '' };
}

export default function productIdsValidation(req: Request, res: Response, next: NextFunction) {
  const { type, message } = validateBody(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
}