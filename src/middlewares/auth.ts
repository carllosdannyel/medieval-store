import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/jwt';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  const decoded = validateToken(token);
  req.body.user = decoded;
  next();
}
