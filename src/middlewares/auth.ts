import { Request, Response, NextFunction } from 'express';
import Exception from '../utils/exception';
import { validateToken } from '../utils/jwt';
import mapError from '../utils/mapError';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  const { type, message } = validateToken(token as string) as Exception;
  if (type) return res.status(mapError(type)).json({ message });
  req.body.user = message;
  next();
}
