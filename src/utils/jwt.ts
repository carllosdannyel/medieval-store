import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';
import HttpException from './httpException';

export function generateToken(user: IUser): string {
  const { password, ...userWithoutPassword } = user;

  return jwt.sign(userWithoutPassword, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
}

export function validateToken(token: string | undefined) {
  if (!token) throw new HttpException(401, 'Token não encontrado!');

  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    throw new HttpException(401, 'Expired or invalid token');
  }
}
