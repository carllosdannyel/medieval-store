import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

export function generateToken(user: IUser): string {
  const { password, ...userWithoutPassword } = user;

  return jwt.sign(userWithoutPassword, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
}

export function validateToken(token: string): string | jwt.JwtPayload {
  if (!token) return { type: 'UNAUTHORIZED', message: 'Token not found' };

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    
    return { type: null, message: payload };
  } catch (error) { 
    return { type: 'UNAUTHORIZED', message: 'Invalid token' };
  }
}
